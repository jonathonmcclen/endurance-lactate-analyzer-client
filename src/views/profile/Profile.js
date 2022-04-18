import LineChart from "../../components/LineChart";
import LineChartMonth from "../../components/LineChartMonth";
import LineChartYear from "../../components/LineChartYear";
import "./styles.css";
import Title from "../../components/Title";
import {useEffect, useState} from 'react'

function Profile(){
  const [allReadings, setAllReadings] = useState([])
  

  useEffect(()=>{
    fetch('/api/v1/readings')
    .then(res => res.json())
    .then(data => setAllReadings(data))
  }, [])

  
  
  

  
  const graphTwoReadings = [allReadings[5], allReadings[6], allReadings[7], allReadings[8], allReadings[9]]

  const graphThreeReadings = [allReadings[10], allReadings[11], allReadings[12], allReadings[13], allReadings[14]]

  console.log(graphThreeReadings)
  return (
    <section className="dark">
      <Title text="Username's Profile" />
      <div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>
        <div className="card chart-container">
          Year to Date Measurements
          <LineChartYear />
          <br/>
          Monthly Measurements
          <LineChartMonth />
          <br/>
          Current Measurements
          <LineChart />
        </div>
      </div>
    </section>
  );
};

export default Profile;
