import React from "react";
import SiteLogo from "../image/Stay Organized_transparent.png";
export default function Header() {
  return (
    <>
      <header className="myheader">
        <div className="navbar navbar-expand-lg container-fluid navbar-light">
          <div className="container-fluid mynavclass">
            <img alt="SiteLogo" src={SiteLogo} width="100" height="100" />

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse ms-5 h5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item ms-5">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item ms-5">
                  <a href="/viewtodo" className="nav-link">
                    Your To-dos
                  </a>
                </li>
                {/* <li className="nav-item ms-5">
                  <a href="/addtodo" className="nav-link">
                    Add a Task
                  </a>
                </li> */}
                <li className="nav-item ms-5">
                  <a href="/registeruser" className="nav-link">
                    Register
                  </a>
                </li>
              </ul>
            </div>

            <form className="d-flex me-0" role="search">
              <input
                type="search"
                className="form-control me-2"
                placeholder="Search"
              ></input>

              <button
                className="btn btn-outline-dark bg-secondary"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
