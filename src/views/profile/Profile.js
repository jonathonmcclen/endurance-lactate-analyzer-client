import LineChart from "../../components/LineChart";
import LineChartMonth from "../../components/LineChartMonth";
import LineChartYear from "../../components/LineChartYear";
import "./styles.css";
import Title from "../../components/Title";
import { useEffect, useState } from "react";

function Profile() {
  const [allReadings, setAllReadings] = useState([]);

  useEffect(() => {
    fetch("/api/v1/readings")
      .then((res) => res.json())
      .then((data) => setAllReadings(data));
  }, []);

  return (
    <section className="dark">
      <Title text="Username's Profile" />
      <div style={{ padding: "0 0 60px 0" }}>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>

        <div className="row">
          <div className="col-md-1"> </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-3"> </div>
              <div className="col-6">
                <img
                  style={{ borderRadius: "50%" }}
                  width="100%"
                  src="https://advanced-web-technology-c3582e48.s3.us-west-1.amazonaws.com/AWT1/images/PlaceHolder%28s%29/UserPlaceholder.jpg"
                />
              </div>
              <div className="col-3"> </div>
            </div>
          </div>
          <div className="col-md-5">
            <LineChartYear />
          </div>
          <div className="col-1"> </div>
        </div>
        <div className="row">
          <div className="col-1"> </div>
          <div className="col-md-5">
            <LineChartMonth />
          </div>
          <div className="col-md-5">
            <LineChart />
          </div>
          <div className="col-1"> </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
