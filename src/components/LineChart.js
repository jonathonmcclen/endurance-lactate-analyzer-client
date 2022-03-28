import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const state = {
  labels: [
    60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
  ],
  datasets: [
    {
      label: "Mmol/l",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

export default class LineChart extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
            elements: {
              Line: {
                borderJoinStyle: "round",
              },
            },
          }}
        />
      </div>
    );
  }
}
