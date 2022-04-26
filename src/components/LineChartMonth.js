import React, {useState} from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function LineChartMonth(){

  
    const graphTwoReadings = {
        bpm: [125, 133, 155, 157, 168],
        mmol: [0.9, 1.4, 2.2, 2.3, 2.7]
      }
  
  
  const state = {
    labels: [...graphTwoReadings.bpm],
    datasets: [
      {
        label: "Mmol/l",
        backgroundColor: "rgba(24, 66, 120)",
        borderColor: "rgba(241, 241, 241)",
        borderWidth: 1,
        data: [...graphTwoReadings.mmol],
      },
    ],
  }
  return (
    <div className="DailyLineChart">
      Monthly Measurements
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


    


export default LineChartMonth