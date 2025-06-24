import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import {
  FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaCompress, FaFastForward, FaFastBackward, FaEllipsisV
} from 'react-icons/fa';

const QUALITIES = [360, 480, 720, 1080];
const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

const VideoPlayer = ({ src, poster }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const [currentQuality, setCurrentQuality] = useState(720);
  const [availableQualities, setAvailableQualities] = useState(QUALITIES);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [seekEffect, setSeekEffect] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showVolume, setShowVolume] = useState(false);

  // HLS setup
  useEffect(() => {
    const video = videoRef.current;
    let hls;
    setIsLoading(true);
    setError(null);
    if (!video || !src) return;
    if (src.endsWith('.m3u8')) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hlsRef.current = hls;
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          setIsLoading(false);
        });
        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            setError('Không thể phát video.');
            setIsLoading(false);
          }
        });
        hls.on(Hls.Events.FRAG_CHANGED, () => {
          setIsLoading(false);
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
        setIsLoading(false);
      }
    } else {
      video.src = src;
      setIsLoading(false);
    }
    const handleCanPlay = () => setIsLoading(false);
    const handleError = () => setError('Không thể phát video.');
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    return () => {
      if (hls) hls.destroy();
      hlsRef.current = null;
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  // Video events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const update = () => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration || 0);
      setPlaying(!video.paused);
      setVolume(video.volume);
      setIsMuted(video.muted);
      setPlaybackRate(video.playbackRate);
    };
    video.addEventListener('timeupdate', update);
    video.addEventListener('play', update);
    video.addEventListener('pause', update);
    video.addEventListener('volumechange', update);
    video.addEventListener('loadedmetadata', update);
    video.addEventListener('ratechange', update);
    return () => {
      video.removeEventListener('timeupdate', update);
      video.removeEventListener('play', update);
      video.removeEventListener('pause', update);
      video.removeEventListener('volumechange', update);
      video.removeEventListener('loadedmetadata', update);
      video.removeEventListener('ratechange', update);
    };
  }, []);

  // Controls
  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  };
  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Number(e.target.value);
  };
  const handleVolume = (v) => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = v;
    if (v === 0) video.muted = true;
    else video.muted = false;
    setVolume(v);
  };
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };
  const handleQualityChange = (q) => {
    if (hlsRef.current) {
      setIsLoading(true);
      const idx = hlsRef.current.levels.findIndex(l => l.height === q);
      hlsRef.current.currentLevel = idx;
    }
    setCurrentQuality(q);
  };
  const handleSpeedChange = (s) => {
    const video = videoRef.current;
    if (video) video.playbackRate = s;
    setPlaybackRate(s);
  };
  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) containerRef.current.requestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  };
  useEffect(() => {
    const onFull = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFull);
    return () => document.removeEventListener('fullscreenchange', onFull);
  }, []);

  // Double click seek
  const handleDoubleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const video = videoRef.current;
    if (!video) return;
    if (x < width / 2) {
      video.currentTime = Math.max(0, video.currentTime - 5);
      setSeekEffect('backward');
      setTimeout(() => setSeekEffect(null), 500);
    } else {
      video.currentTime = Math.min(video.duration, video.currentTime + 5);
      setSeekEffect('forward');
      setTimeout(() => setSeekEffect(null), 500);
    }
  };

  // Đóng popup settings khi click ngoài
  useEffect(() => {
    if (!showSettings) return;
    const handleClick = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setShowSettings(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showSettings]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
    >
      <div
        className="absolute inset-0 z-10 user-select-none"
        onClick={handlePlayPause}
        onDoubleClick={handleDoubleClick}
      />
      <video
        ref={videoRef}
        poster={poster}
        className="w-full h-full object-cover rounded-xl"
        tabIndex={-1}
        playsInline
        controls={false}
      />
      {/* Seek effect overlay */}
      {seekEffect === 'backward' && (
        <div className="absolute top-1/2 left-8 -translate-y-1/2 z-30 text-white text-5xl font-bold pointer-events-none drop-shadow-lg flex items-center">
          <FaFastBackward />
          <span className="text-2xl ml-2">-5s</span>
        </div>
      )}
      {seekEffect === 'forward' && (
        <div className="absolute top-1/2 right-8 -translate-y-1/2 z-30 text-white text-5xl font-bold pointer-events-none drop-shadow-lg flex items-center">
          <FaFastForward />
          <span className="text-2xl ml-2">+5s</span>
        </div>
      )}
      {/* Overlay loading */}
      {isLoading && !error && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-cyan-400"></div>
          <span className="text-white ml-4 text-lg">Đang tải video...</span>
        </div>
      )}
      {/* Overlay error */}
      {error && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-30 text-white text-xl font-semibold">
          {error}
        </div>
      )}
      {/* Custom controls */}
      <div className="absolute left-0 right-0 bottom-0 z-50 bg-black/70 flex items-center px-4 py-2 gap-3">
        {/* Play/Pause */}
        <button onClick={handlePlayPause} className="bg-none border-none text-white text-2xl cursor-pointer hover:text-cyan-400 transition-colors">
          {playing ? <FaPause /> : <FaPlay />}
        </button>
        {/* Seek bar */}
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="flex-1 accent-cyan-400 h-1 mx-2"
        />
        <span className="text-white text-xs min-w-[60px] text-right">{formatTime(currentTime)} / {formatTime(duration)}</span>
        {/* Volume */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => setShowVolume(true)}
          onMouseLeave={() => setShowVolume(false)}
        >
          <button
            onClick={toggleMute}
            className={`p-2 rounded-full transition-colors duration-200 ${
              showVolume ? 'bg-cyan-700 text-white' : 'bg-gray-800 text-cyan-400'
            }`}
          >
            {isMuted || volume === 0 ? <FaVolumeMute size={22} /> : <FaVolumeUp size={22} />}
          </button>
          {/* Volume slider popup */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-10 z-50 transition-all duration-200 ${
              showVolume ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            style={{ minWidth: 44, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div className="rounded-xl shadow-xl flex flex-col items-center py-2 px-3">
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={isMuted ? 0 : volume}
                onChange={e => {
                  handleVolume(Number(e.target.value));
                  if (isMuted && Number(e.target.value) > 0) setIsMuted(false);
                }}
                className="volume-slider w-24 h-2"
                style={{ transform: 'rotate(-90deg)', marginBottom: 0 }}
              />
            </div>
          </div>
        </div>
        {/* Settings (quality + speed) */}
        <div className="relative">
          <button
            onClick={() => setShowSettings((v) => !v)}
            className="bg-none border-none text-white text-2xl cursor-pointer p-2 hover:text-cyan-400"
          >
            <FaEllipsisV />
          </button>
          {showSettings && (
            <div
              className="absolute bottom-12 right-0 bg-gray-900 rounded-xl shadow-lg p-4 z-50 min-w-[180px] flex flex-col gap-4"
            >
              {/* Quality */}
              <div>
                <label className="text-white mr-2 text-sm">Phân giải:</label>
                <select
                  value={currentQuality}
                  onChange={e => handleQualityChange(Number(e.target.value))}
                  className="bg-gray-800 text-white border-none text-sm rounded px-2 py-1 mt-1 outline-none cursor-pointer"
                >
                  {QUALITIES.map(q => (
                    <option key={q} value={q}>{q}p</option>
                  ))}
                </select>
              </div>
              {/* Speed */}
              <div>
                <label className="text-white mr-2 text-sm">Tốc độ:</label>
                <select
                  value={playbackRate}
                  onChange={e => handleSpeedChange(Number(e.target.value))}
                  className="bg-gray-800 text-white border-none text-sm rounded px-2 py-1 mt-1 outline-none cursor-pointer"
                >
                  {SPEEDS.map(s => (
                    <option key={s} value={s}>{s}x</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
        {/* Fullscreen */}
        <button onClick={handleFullscreen} className="bg-none border-none text-white text-2xl cursor-pointer ml-2 hover:text-cyan-400">
          {isFullscreen ? <FaCompress /> : <FaExpand />}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;