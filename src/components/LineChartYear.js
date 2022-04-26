import React, {useState} from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function LineChartYear(){

  
    const graphThreeReadings = {
        bpm: [122, 134, 155, 160, 167],
        mmol: [1.2, 1.9, 2.3, 2.5, 2.8]
      }
  
  
  const state = {
    labels: [...graphThreeReadings.bpm],
    datasets: [
      {
        label: "Mmol/l",
        backgroundColor: "rgba(24, 66, 120)",
        borderColor: "rgba(241, 241, 241)",
        borderWidth: 1,
        data: [...graphThreeReadings.mmol],
      },
    ],
  }
  return (
    <div>
      Yearly Measurements
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


    


export default LineChartYear