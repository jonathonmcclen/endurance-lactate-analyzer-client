import React from "react";
import Logo from "../assets/img/EnduranceLogo.png";

function Header({ user, setUser }) {
  function handleLogout() {
    fetch("/api/v1/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser("guest");
      }
    });
  }
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
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
              <a className="btn btn-warning" href="/profile">
                Profile
              </a>
            ) : null}{" "}
            &nbsp;
            {user === "guest" ? (
              <a
                href="/login"
                className="btn btn-outline"
                style={{ color: "#000" }}
                type="submit"
              >
                Login
              </a>
            ) : (
              <button className="btn btn-warning" onClick={handleLogout}>
                Signout
              </button>
            )}
            &nbsp;
            {user === "guest" ? (
              <a href="/registration" className="btn btn-warning" type="submit">
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
