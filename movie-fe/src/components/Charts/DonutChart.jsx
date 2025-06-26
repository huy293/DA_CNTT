import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ data = [], title = "" }) => {
  // Tạo gradient colors đẹp hơn
  const gradientColors = [
    "rgba(59, 130, 246, 0.8)",   // Blue
    "rgba(16, 185, 129, 0.8)",   // Green
    "rgba(245, 158, 11, 0.8)",   // Yellow
    "rgba(239, 68, 68, 0.8)",    // Red
    "rgba(139, 92, 246, 0.8)",   // Purple
    "rgba(236, 72, 153, 0.8)",   // Pink
    "rgba(14, 165, 233, 0.8)",   // Sky
    "rgba(34, 197, 94, 0.8)",    // Emerald
    "rgba(251, 146, 60, 0.8)",   // Orange
    "rgba(168, 85, 247, 0.8)",   // Violet
    "rgba(6, 182, 212, 0.8)",    // Cyan
  ];

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: gradientColors.slice(0, data.length),
        borderColor: "rgba(255, 255, 255, 0.8)",
        borderWidth: 3,
        hoverBorderWidth: 4,
        hoverBorderColor: "rgba(255, 255, 255, 1)",
        hoverOffset: 8,
        cutout: '60%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
      animateRotate: true,
      animateScale: true,
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#374151",
          font: { 
            size: 12, 
            weight: "600",
            family: "'Inter', sans-serif"
          },
          padding: 15,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(17, 24, 39, 0.95)",
        titleColor: "#f9fafb",
        bodyColor: "#f9fafb",
        borderColor: "rgba(59, 130, 246, 0.3)",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 13
        },
        padding: 12,
        callbacks: {
          title: function(context) {
            return context[0].label;
          },
          label: function(context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return `${context.parsed} (${percentage}%)`;
          }
        }
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  // Tính tổng để hiển thị ở giữa
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full">
      {title && (
        <div className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
          {title}
        </div>
      )}
      <div className="bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="h-80 flex items-center justify-center relative">
          <Doughnut data={chartData} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {total}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Tổng cộng
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;