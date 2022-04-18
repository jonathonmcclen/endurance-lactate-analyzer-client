import React, {useState} from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function LineChart(){

  
  const graphOneReadings = {
    bpm: [133, 151, 165, 170, 185],
    mmol: [1.3, 1.7, 2.3, 2.6, 3.7]
  }
  
  
  const state = {
    labels: [...graphOneReadings.bpm],
    datasets: [
      {
        label: "Mmol/l",
        backgroundColor: "rgba(237, 155, 40)",
        borderColor: "rgba(237, 155, 40)",
        borderWidth: 1,
        data: [...graphOneReadings.mmol],
      },
    ],
  }
  return (
    <div className="DailyLineChart">
      Current Measurements
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
              text: "Blood Lactate Measurements",
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