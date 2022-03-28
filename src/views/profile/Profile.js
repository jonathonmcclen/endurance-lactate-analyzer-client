import LineChart from "../../components/LineChart";
import "./styles.css";

const Profile = () => {
  return (
    <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>
      <h2>USERNAME</h2>
      <div className="card chart-container">
        <LineChart />
      </div>
    </div>
  );
};

export default Profile;
