import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = ({ data = [], title = "" }) => {
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Số lượng",
        data: data.map((item) => item.value),
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return "rgba(59, 130, 246, 0.1)";
          
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)");
          gradient.addColorStop(1, "rgba(59, 130, 246, 0.3)");
          return gradient;
        },
        borderWidth: 3,
        pointBackgroundColor: "rgba(59, 130, 246, 1)",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "rgba(59, 130, 246, 1)",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 4,
        fill: true,
        tension: 0.4,
        cubicInterpolationMode: 'monotone',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart',
    },
    plugins: {
      legend: {
        display: false,
      },
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
            return `Số lượng: ${context.parsed.y}`;
          }
        }
      },
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
    elements: {
      point: {
        hoverRadius: 8,
      },
    },
  };

  return (
    <div className="w-full">
      {title && (
        <div className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">
          {title}
        </div>
      )}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
        <div className="h-80">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;