const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const path = require('path');
const fs = require('fs');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const createHLSStream = async (inputPath, outputDir, filename) => {
  const nameWithoutExt = filename.split('.').slice(0, -1).join('.');
  const hlsBaseDir = path.join(outputDir, 'hls', nameWithoutExt);

  if (!fs.existsSync(hlsBaseDir)) {
    fs.mkdirSync(hlsBaseDir, { recursive: true });
  }

  // Định nghĩa các chất lượng video muốn tạo
  const qualities = [
    { name: '360p', resolution: '640x360', videoBitrate: '800k', audioBitrate: '96k' },
    { name: '480p', resolution: '854x480', videoBitrate: '1400k', audioBitrate: '128k' },
    { name: '720p', resolution: '1280x720', videoBitrate: '2800k', audioBitrate: '128k' },
    { name: '1080p', resolution: '1920x1080', videoBitrate: '5000k', audioBitrate: '192k' },
  ];

  console.log('[FFMPEG] Input:', inputPath);
  console.log('[FFMPEG] Output HLS Dir:', hlsBaseDir);

  return new Promise((resolve, reject) => {
    const command = ffmpeg(inputPath);
    let masterPlaylistContent = '#EXTM3U\n#EXT-X-VERSION:3\n';
    
    // Tạo các output stream cho từng chất lượng
    qualities.forEach(q => {
      const qualityDir = path.join(hlsBaseDir, q.name);
      if (!fs.existsSync(qualityDir)) {
        fs.mkdirSync(qualityDir, { recursive: true });
      }
      
      command
        .output(path.join(qualityDir, 'playlist.m3u8'))
        .outputOptions([
          `-vf scale=${q.resolution}`,
          `-c:a aac`,
          `-ar 48000`,
          `-c:v h264`,
          `-profile:v main`,
          `-crf 20`,
          `-sc_threshold 0`,
          `-g 48`,
          `-keyint_min 48`,
          `-hls_time 10`,
          `-hls_playlist_type vod`,
          `-b:v ${q.videoBitrate}`,
          `-b:a ${q.audioBitrate}`,
          `-hls_segment_filename ${path.join(qualityDir, 'segment%03d.ts')}`
        ]);

      masterPlaylistContent += `#EXT-X-STREAM-INF:BANDWIDTH=${parseInt(q.videoBitrate) * 1000},RESOLUTION=${q.resolution.split('x')[0]}x${q.resolution.split('x')[1]}\n${q.name}/playlist.m3u8\n`;
    });

    command
      .on('start', (cmd) => {
        console.log('[FFMPEG] Start command:', cmd);
      })
      .on('end', () => {
        // Ghi master playlist
        fs.writeFileSync(path.join(hlsBaseDir, 'master.m3u8'), masterPlaylistContent);
        console.log('[FFMPEG] HLS processing with multiple qualities done');
        
        const urlPath = `/uploads/videos/hls/${nameWithoutExt}/master.m3u8`;
        resolve({
          hlsPath: urlPath.replace(/\\/g, '/'),
          message: 'Video processing completed successfully'
        });
      })
      .on('error', (err) => {
        console.error('[FFMPEG] Error:', err);
        reject(new Error('An error occurred while processing video: ' + err.message));
      })
      .run();
  });
};

module.exports = {
  createHLSStream
};
