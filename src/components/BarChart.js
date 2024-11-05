import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  // Chart data and configuration
  const data = {
    labels: ["Apple", "Google", "Web", "Digital Store", "DML", "Artist"],
    datasets: [
      {
        label: "Marketplaces & Splits",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(82, 95, 148, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(236, 112, 134, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(41, 48, 75, 0.2)"
        ],
        borderColor: [
          "rgba(82, 95, 148, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(236, 112, 134, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(41, 48, 75, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top"
      },
      tooltip: {
        enabled: true
      }
    },
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div style={{ width: "45%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
