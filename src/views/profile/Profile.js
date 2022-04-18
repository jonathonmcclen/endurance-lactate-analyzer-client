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

  return (
    <section className="dark">
      <Title text="Username's Profile" />
      <div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>
        <div className="card chart-container">
          <LineChartYear />
          <br/>
          <div className="NotYearlyMeasurements">
          <LineChartMonth />
          <LineChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
