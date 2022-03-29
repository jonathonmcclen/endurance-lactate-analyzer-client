import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container-fluid">
            <h1>E.L.A</h1>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
              </ul>
              <a href="/profile">Profile</a> &nbsp;
              <a
                href="/login"
                className="btn btn-outline"
                style={{ color: "#000" }}
                type="submit"
              >
                Login
              </a>
              &nbsp;
              <a href="/registration" className="btn btn-warning" type="submit">
                Join
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
