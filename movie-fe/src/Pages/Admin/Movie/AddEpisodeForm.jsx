import React, { useState, useEffect } from "react";
import axiosInstance from "../../../config/axios";
import { formatDateForInput } from "../../../utils/dateUtils";

const AddEpisodeForm = ({ season, mode, initialData, onClose, onReload }) => {
  const [formData, setFormData] = useState({
    episode_number: "",
    title: "",
    overview: "",
    runtime: "",
    release_date: "",
  });
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [videoType, setVideoType] = useState(initialData?.video_type || 'external');
  const [videoUrl, setVideoUrl] = useState(initialData?.video_url || '');
  const [videoFile, setVideoFile] = useState(null);

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData({
        episode_number: initialData.episode_number,
        title: initialData.title,
        overview: initialData.overview,
        runtime: initialData.runtime,
        release_date: initialData.release_date ? formatDateForInput(initialData.release_date) : "",
      });
    }
  }, [mode, initialData]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.episode_number) {
      newErrors.episode_number = "Vui lòng nhập số tập";
    }
    if (!formData.title) {
      newErrors.title = "Vui lòng nhập tiêu đề";
    }
    if (!formData.overview) {
      newErrors.overview = "Vui lòng nhập mô tả";
    }
    if (!formData.runtime) {
      newErrors.runtime = "Vui lòng nhập thời lượng";
    }
    if (mode === "add" && !selectedVideo) {
      newErrors.video = "Vui lòng chọn file video";
    }
    if (!formData.release_date) {
      newErrors.release_date = "Vui lòng chọn ngày phát hành";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      if (mode === "edit" && initialData?.id) {
        // Edit mode - không upload video mới
        await axiosInstance.put(`/api/episode/${initialData.id}`, {
          ...formData,
          seasonId: season.value,
        });
        alert("Cập nhật tập phim thành công!");
      } else {
        // Add mode - upload video và tạo episode
        if (!selectedVideo) {
          throw new Error("Vui lòng chọn file video");
        }

        const formDataToSend = new FormData();
        formDataToSend.append("video", selectedVideo);
        formDataToSend.append("seasonId", season.value);
        formDataToSend.append("episode_number", formData.episode_number);
        formDataToSend.append("title", formData.title);
        formDataToSend.append("description", formData.overview);
        formDataToSend.append("runtime", formData.runtime);
        formDataToSend.append("release_date", formData.release_date);

        setIsUploading(true);
        const response = await axiosInstance.post("/api/episode", formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(progress);
          },
        });

        if (response.data.success) {
          alert("Thêm tập phim thành công!");
        }
      }
      onReload();
      onClose();
    } catch (error) {
      console.error("Error:", error);
      setError(error.response?.data?.error || error.message || "Có lỗi xảy ra, vui lòng thử lại");
    } finally {
      setLoading(false);
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedVideo(file);
      // Clear video error
      if (errors.video) {
        setErrors((prev) => ({
          ...prev,
          video: "",
        }));
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {mode === "edit" ? "Sửa tập phim" : "Thêm tập phim mới"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Số tập
              </label>
              <input
                type="number"
                name="episode_number"
                value={formData.episode_number}
                onChange={handleChange}
                className={`w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white ${
                  errors.episode_number
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {errors.episode_number && (
                <p className="text-red-500 text-xs mt-1">{errors.episode_number}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Thời lượng (phút)
              </label>
              <input
                type="number"
                name="runtime"
                value={formData.runtime}
                onChange={handleChange}
                className={`w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white ${
                  errors.runtime
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
              {errors.runtime && (
                <p className="text-red-500 text-xs mt-1">{errors.runtime}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Tiêu đề
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white ${
                errors.title
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mô tả
            </label>
            <textarea
              name="overview"
              value={formData.overview}
              onChange={handleChange}
              rows="4"
              className={`w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white ${
                errors.overview
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            />
            {errors.overview && (
              <p className="text-red-500 text-xs mt-1">{errors.overview}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Loại video</label>
            <select value={videoType} onChange={e => setVideoType(e.target.value)} className="border rounded px-2 py-1">
              <option value="external">Gắn link ngoài</option>
              <option value="hls">Upload HLS</option>
            </select>
          </div>

          {videoType === 'external' ? (
            <div className="mb-4">
              <label className="block mb-1 font-medium">URL video</label>
              <input type="text" value={videoUrl} onChange={e => setVideoUrl(e.target.value)} className="border rounded px-2 py-1 w-full" required />
            </div>
          ) : (
            <div className="mb-4">
              <label className="block mb-1 font-medium">Upload file video</label>
              <input type="file" accept="video/*" onChange={e => setVideoFile(e.target.files[0])} className="border rounded px-2 py-1 w-full" required />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Ngày phát hành
            </label>
            <input
              type="date"
              name="release_date"
              value={formData.release_date}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white ${
                errors.release_date
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              }`}
            />
            {errors.release_date && (
              <p className="text-red-500 text-xs mt-1">{errors.release_date}</p>
            )}
          </div>

          {error && (
            <div className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={loading || isUploading}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading || isUploading
                ? "Đang xử lý..."
                : mode === "edit"
                ? "Cập nhật"
                : "Thêm mới"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEpisodeForm; 