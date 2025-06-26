import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Plugin để hiển thị giá trị trên đầu cột với styling đẹp hơn
const barValuePlugin = {
  id: "barValuePlugin",
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    chart.data.datasets.forEach((dataset, i) => {
      const meta = chart.getDatasetMeta(i);
      meta.data.forEach((bar, index) => {
        const value = dataset.data[index];
        ctx.save();
        ctx.font = "bold 14px 'Inter', sans-serif";
        ctx.fillStyle = "#1f2937";
        ctx.textAlign = "center";
        ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 2;
        ctx.fillText(value, bar.x, bar.y - 12);
        ctx.restore();
      });
    });
  },
};

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ data = [], title = "", total, subtitle }) => {
  // Tạo gradient cho bars
  const createGradient = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(59, 130, 246, 0.9)");
    gradient.addColorStop(1, "rgba(59, 130, 246, 0.6)");
    return gradient;
  };

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "",
        data: data.map((item) => item.value),
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return "rgba(59, 130, 246, 0.8)";
          return createGradient(ctx);
        },
        borderRadius: {
          topLeft: 8,
          topRight: 8,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: false,
        maxBarThickness: 50,
        minBarLength: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
      onProgress: function(animation) {
        animation.chart.update('none');
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(17, 24, 39, 0.95)",
        titleColor: "#f9fafb",
        bodyColor: "#f9fafb",
        borderColor: "rgba(59, 130, 246, 0.3)",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
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
            return `Lượt xem: ${context.parsed.y}`;
          }
        }
      },
      barValuePlugin: {},
    },
    scales: {
      x: {
        grid: { 
          display: false,
          drawBorder: false
        },
        ticks: {
          color: "#6b7280",
          font: { 
            size: 12, 
            weight: "600",
            family: "'Inter', sans-serif"
          },
          maxRotation: 45,
          minRotation: 0,
          padding: 8,
        },
        border: {
          display: false
        }
      },
      y: {
        grid: { 
          color: "rgba(229, 231, 235, 0.5)",
          drawBorder: false,
          lineWidth: 1
        },
        ticks: {
          color: "#6b7280",
          font: { 
            size: 12,
            weight: "500",
            family: "'Inter', sans-serif"
          },
          beginAtZero: true,
          precision: 0,
          padding: 8,
          callback: function(value) {
            if (value >= 1000) {
              return (value / 1000).toFixed(1) + 'k';
            }
            return value;
          }
        },
        border: {
          display: false
        }
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        {title && (
          <div className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">
            {title}
          </div>
        )}
        {typeof total !== "undefined" && (
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {total}
          </div>
        )}
        {subtitle && (
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</div>
        )}
      </div>
      <div className="h-80 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
        <Bar data={chartData} options={options} plugins={[barValuePlugin]} />
      </div>
    </div>
  );
};

export default BarChart;