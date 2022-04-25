import Title from "../../components/Title";
import "./styles.css";
import StepAndRepeat from "../../assets/img/EnduranceCardBgCropped.png";
import Marketing from "../../assets/img/ENDURANCE.png";

const Home = () => {
  return (
    <>
      <section className="dark">
        <Title text="Home" width="100%" />
        <div>
          <img src={StepAndRepeat} width="100%" />
        </div>

        <section style={{ padding: "40px" }}>
          <div className="row">
            <div className="col-1"> </div>
            <div className="col-4">
              <img src={Marketing} width="100%" />{" "}
            </div>
            <div className="col-6">
              <h1>Endurance lactate analayzer</h1>
              <p>
                Morbi tristique dolor vel ante hendrerit, nec volutpat sem
                vestibulum. Nam vulputate consectetur lacus, ut ornare quam
                commodo vitae. Quisque congue augue eget purus tempor facilisis.
                Cras fringilla dolor a quam mattis fermentum. Curabitur quis
                tellus mi. Nam vitae posuere augue, eu hendrerit diam. Vivamus
                quis accumsan ipsum. Suspendisse finibus velit eros, et sagittis
                arcu placerat at. Fusce et erat ac nisl aliquet dignissim id
              </p>
              <p>
                quis odio. Mauris fringilla, nulla sed imperdiet tempus, velit
                neque ultrices risus, vel mattis libero turpis et purus. Proin
                blandit arcu ante, ac porta enim ullamcorper sed. Nunc non
                tristique lacus, et rutrum eros. In arcu augue, hendrerit in
                mauris non, posuere eleifend purus. Maecenas sollicitudin leo id
                turpis ultrices, eu congue tellus consectetur. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Ut in nulla tempus, euismod nisl eget,
                elementum justo.
              </p>
              <div className="row">
                <div className="col-4"> </div>
                <div className="col-4">
                  <a href="/registration" className="btn btn-lg btn-warning">
                    Sign Up
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
