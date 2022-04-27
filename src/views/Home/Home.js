import Title from "../../components/Title";
import "./styles.css";
import StepAndRepeat from "../../assets/img/endurance_home_image.png";
import Marketing from "../../assets/img/ENDURANCE.png";

const Home = () => {
  return (
    <>
      <section className="light">
        <Title text="" width="100%" />
        <div>
          <img src={StepAndRepeat} width="100%" />
        </div>

        <section style={{ 
          padding: "40px"
          }}>
          <div className="row">
            {/* <div className="col-1"> </div> */}
            {/* <div className="col-4">
              <img src={Marketing} width="100%" />{" "}
            </div> */}
            <div id='enduracne-about-text-container'>
              <h1>Endurance lactate analayzer</h1>
              <p>
              ENDURANCE is the next step in biometric feedback for endurance athletes. Using data gathered from blood lactate testing, our system enables athletes to view real-time status on their lactate levels. Easily track, store, and share data with coaches, physicians, and physical therapists, and push the boundaries of your performance with ENDURANCE.
              </p>
              <div className="row">
                <div className="col-4"> </div>
                <div className="col-4">
                  <a href="/registration" className="btn btn-lg btn-orchird" style={{
                    backgroundColor: '#3b76c4', 
                    color:"white", 
                    position:'relative',
                    right: '20px'}}>
                    Join
                  </a>
                </div>
                <div className="col-4"> </div>
              </div>
            </div>
            <div className="col-1"> </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
