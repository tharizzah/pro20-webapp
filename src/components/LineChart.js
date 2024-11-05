import React from "react";
import {
  Chart,
  CategoryScale,
  ArcElement,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title
} from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(
  ArcElement,
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title
);

const LineChart = () => {
  return (
    <div style={{ width: "40%", height: "auto" }}>
      <Line
        data={{
          labels: [
            "Apple",
            "Google",
            "Web",
            "Digital Store",
            "DML",
            "Artist",
            "Green"
          ],
          datasets: [
            {
              label: "# of votes",
              data: [12, 19, 3, 20, 5, 7, 1],
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)"
            }
          ]
        }}
      />
    </div>
  );
};

export default LineChart;
