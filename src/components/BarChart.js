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

const BarChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ["red", "blue", "pink", "Purple", "Black", "Yellow", "Green"],
          datasets: [
            {
              label: "# of votes",
              data: [12, 19, 3, 20, 5, 7, 1],
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)"
            }
          ]
        }}
        height={200}
        width={900}
      />
    </div>
  );
};

export default BarChart;
