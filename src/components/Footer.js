import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="bg-light text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="#"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#55acee" }}
                href="#"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright: &nbsp;
            <a className="text-white" href="#">
              Endurance Lactate Analizer
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
