import React from "react";
import SiteLogo from "../image/Stay Organized_transparent.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary">
        <div className="container-fluid mt-5 myfooter">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <ul className="list-unstyled">
                <li>
                  <img src={SiteLogo} alt="Logo" height="100" width="100" />
                </li>
                <li>
                  <span className=" lead">World’s favorite To-do list</span>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <ul className="list-unstyled">
                <li>
                  <p className="fs-6 fw-bold">Features</p>
                </li>
                <li>
                  <p>How it works</p>
                </li>
                <li>
                  <p>Pricing</p>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <ul className="list-unstyled">
                <li>
                  <p className="fs-6 fw-bold">Company</p>
                </li>
                <li>
                  <p>About Us</p>
                </li>
                <li>
                  <p>Careers</p>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <ul className="list-unstyled">
                <li>
                  <p className="fs-6 fw-bold">Connect with us</p>
                </li>
                <li>
                  <i className="bi-facebook"></i>
                </li>
                <li>
                  <i className="bi-twitter"></i>
                </li>
                <li>
                  <a href="" className="me-4 text-reset">
                    <i className="fab bi-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
