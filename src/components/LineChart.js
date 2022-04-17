import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function LineChart({graphOneReadings}){
  const graphLabels = []
  
  
  const state = {
    labels: [90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
    datasets: [
      {
        label: "Mmol/l",
        backgroundColor: "rgba(237, 155, 40)",
        borderColor: "rgba(237, 155, 40)",
        borderWidth: 1,
        data: [65, 65, 65, 59, 59, 59, 80, 80, 80, 160, 120, 160],
      },
    ],
  }
  return (
    <div>
      <Line
        data={state}
        options={{
          elements: {
            Line: {
              borderJoinStyle: "round",
              tension: 0.5,
            },
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          },
        }}
      />
    </div>
  );
}


    


export default LineChart