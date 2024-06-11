import React from "react";
import todolistimg from "../image/to-do-list-749304_1280.jpg";
import sitelogo from "../image/Stay Organized_transparent.png";
import HomeAnimation from "./HomeAnimation";

export default function HomePage() {
  return (
    <>
      <div className="container d-flex mt-4">
        <div className="col-lg-2">
          <div className="card text-white mt-3 ms-5">
            <img
              src={todolistimg}
              className="card-img"
              alt="list"
              height="250"
              width="250"
            ></img>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="v-stack bg-white container">
            <img
              src={sitelogo}
              alt="Sitelogo"
              width="400"
              height="300"
              className="mx-auto d-block"
            ></img>
          </div>
        </div>

        <div className="col-lg-5 m-4">
          <div className="v-stack container">
            <HomeAnimation />
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <p className="lead">
          Welcome to Stay Organized, your digital haven for mastering the art of
          efficiency and decluttering. Seamlessly blending intuitive design with
          powerful functionality, our website empowers users to streamline their
          lives with ease. Say goodbye to chaos and hello to productivity – join
          us today and experience the liberation of a clutter-free life.
        </p>
      </div>
    </>
  );
}
