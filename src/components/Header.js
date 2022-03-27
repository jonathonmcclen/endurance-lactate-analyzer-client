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
                <li className="nav-item">
                  <a className="nav-link" href="/playlists">
                    Playlists
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contact">
                    Contact
                  </a>
                </li>
              </ul>
              <button className="btn btn-outline-success" type="submit">
                Login
              </button>
              &nbsp;
              <button className="btn btn-success" type="submit">
                Join
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
