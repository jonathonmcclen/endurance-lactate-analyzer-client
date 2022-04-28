import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//import images

import Garmin from "../../assets/img/Garmin.png";
import AppleWatch from "../../assets/img/AppleWatch.png";
import Fitbit from "../../assets/img/Fitbit.png";

function Connect({ setUser }) {
  const [device, setDevice] = useState(Garmin);
  const [connected, setConnected] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setConnected(true);
  }

  if (connected) {
    return (
      <div>
        <img src={device} />
        <h2>Your device is connected!</h2>
      </div>
    );
  } else {
    return (
      <div id="formContainer" className="text-center">
        <main className="form-signin form-box">
          <form onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Device</h1>
            <div>
              <div className="form-floating">
                <select
                  onChange={(e) => {
                    setDevice(e.target.value);
                  }}
                  className="form-control"
                >
                  <option value={Garmin}>Garmin</option>
                  <option value={AppleWatch}>Apple Watch</option>
                  <option value={Fitbit}>Fitbit</option>
                </select>
                <label htmlFor="floatingPassword">Select Device</label>
              </div>
              <br />
              <img src={device} />
              <br />
            </div>
            <button
              style={{ backgroundColor: "#3b76c4", color: "white" }}
              className="w-100 btn btn-lg btn-orchid"
              type="submit"
            >
              Connect Device
            </button>
            <p style={{ margin: "10px 0 0 0 " }}>
              Looking to <a href="/registration">create an account?</a>
            </p>
            <p className="mt-1 mb-3 text-muted">© 2017–2021</p>
          </form>
        </main>
      </div>
    );
  }
}

export default Connect;
