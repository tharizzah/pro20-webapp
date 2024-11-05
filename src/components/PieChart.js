import React from "react";
import { Pie } from "react-chartjs-2";
//import ChartDataLabels from "chartjs-plugin-datalabels";

const options = {
  plugins: {
    legend: {
      display: true,
      position: "top"
    },
    tooltip: {
      callbacks: {
        label: context => {
          const label = context.label || "Apple Marketplace";
          const value = context.raw;
          const percentage = ((value / 450) * 100).toFixed(2) + "%"; // Total of 450 in this example
          return `${label}: ${value} (${percentage})`;
        }
      }
    }
  }
};

const PieChart = () => {
  const data = {
    labels: ["Marketplace Fee", "Typical Digital Store", "VASTR", "Artist"],
    datasets: [
      {
        data: [30, 10, 10, 50],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(26, 107, 37)",
          "rgb(255, 205, 86)",
          "rgb(54, 162, 235)"
        ]
      }
    ]
  };

  return (
    <div style={{ width: "32%" }}>
      <h3 className="heading-3" style={{ textAlign: "center" }}>
        Apple Marketplace
      </h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
