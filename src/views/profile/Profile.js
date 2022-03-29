import LineChart from "../../components/LineChart";
import "./styles.css";
import Title from "../../components/Title";

const Profile = () => {
  return (
    <section className="dark">
      <Title text="Username's Profile" />
      <div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js"></script>
        <div className="card chart-container">
          <LineChart />
        </div>
      </div>
    </section>
  );
};

export default Profile;
