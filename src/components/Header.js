import React from "react";
import Logo from "../assets/img/logo_2.png";
import '.././App.css'

function Header({ user, setUser }) {
  function handleLogout() {
    fetch("/api/v1/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser("guest");
      }
    });
  }
  return (
    <div id='header-container-div'>
      <nav className="navbar navbar-expand-sm navbar-orchid bg-orchid">
      
        <div className="container-fluid">
          <a href="/">
            <img src={Logo} width="250px" />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
            </ul>
            {user !== "guest" ? (
              <a className="btn btn-outline" href="/profile" style={{ color: "white" }}>
                Profile
              </a>
            ) : null}{" "}
            &nbsp;
            {user === "guest" ? (
              <a
                href="/login"
                className="btn btn-outline"
                style={{ color: "white" }}
                type="submit"
              >
                Login
              </a>
            ) : (
              <button className="btn btn-outline" onClick={handleLogout} style={{ color: "white" }}>
                Signout
              </button>
            )}
            &nbsp;
            {user === "guest" ? (
              <a href="/registration" className="btn btn-outline" type="submit" style={{ color: "white" }}>
                Join
              </a>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
