import React, { useState } from "react";
import ReactDOM from "react-dom";
import axiosInstance from "../../config/axios";

const VerifyCode = ({ onClose, onLoginClick, onRegisterClick }) => {
  const [userInputCode, setCode] = useState("");
  const [error, setError] = useState("");
  const email = localStorage.getItem('verifyEmail');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/api/auth/verify-email", {
        email,
        userInputCode
      });
      
      if (response.status === 200) {
        localStorage.removeItem('verifyEmail');
        onLoginClick();
      }
    } catch (error) {
      console.error('Verify error:', error.response?.data);
      setError(error.response?.data?.error || "Có lỗi xảy ra khi xác thực mã");
    }
  };

  return ReactDOM.createPortal(
    <div
      tabIndex="-1"
      aria-hidden="true"
      onClick={onClose}
      className="fixed top-0 left-0 z-[999] flex justify-center items-center w-full h-full overflow-x-hidden overflow-y-auto backdrop-blur-sm"
    >
      <div
        className="relative p-4 w-full max-w-md max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Verify Your Code
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4" action="#" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your code
                </label>
                <input
                  type="number"
                  name="code"
                  id="code"
                  value={userInputCode}
                  onChange={(e) => setCode(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="123456"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Verify Code
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                <a
                  onClick={onRegisterClick}
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Back
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default VerifyCode;
