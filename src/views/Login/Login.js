import "./styles.css";

const Login = () => {
  return (
    <>
      <div id="formContainer" className="text-center">
        <main className="form-signin">
          <form>
            <h1 style={{ color: "#fff" }}>Endurance Lactate Analizer</h1>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                id="phoneinput"
                type="phone"
                className="form-control"
                placeholder="000-000-0000"
              />
              <label for="floatingInput">Email</label>
            </div>
            <div>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
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
