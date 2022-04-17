import LineChart from "../../components/LineChart";
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
  
  const graphOneReadings = [allReadings[0], allReadings[1], allReadings[2], allReadings[3], allReadings[4]]
  
  const graphTwoReadings = [allReadings[5], allReadings[6], allReadings[7], allReadings[8], allReadings[9]]

  const graphThreeReadings = [allReadings[10], allReadings[11], allReadings[12], allReadings[13], allReadings[14]]


  return (
    <section className="dark">
      <Title text="Username's Profile" />
      <div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>
        <div className="card chart-container">
          Year to Date Measurements
          <LineChart graphOneReadings={graphOneReadings} />
          <br/>
          Monthly Measurements
          <LineChart />
          <br/>
          <font></font>Current Measurements
          <LineChart />
        </div>
      </div>
    </section>
  );
};

export default Profile;
