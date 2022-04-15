import "./styles.css";
import React, {useState} from "react";
import {useHistory} from 'react-router-dom'

function Login({setUser}){

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  
  function handleSubmit(e){
    e.preventDefault()
    fetch('/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }
  return (
    <>
      <div id="formContainer" className="text-center">
        <main className="form-signin">
          <form onSubmit={handleSubmit}>
            <h1 style={{ color: "#fff" }}>Endurance Lactate Analizer</h1>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                id="phoneinput"
                type="text"
                className="form-control"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
            </div>
            <button className="w-100 btn btn-lg btn-warning" type="submit">
              Login
            </button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
          </form>
        </main>
      </div>
    </>
  );
};

export default Login;
