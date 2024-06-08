import React from "react";
import todolistimg from "../image/to-do-list-749304_1280.jpg";
import sitelogo from "../image/Stay Organized_transparent.png";

export default function HomePage() {
  return (
    <>
      <div class="d-flex mt-4">
        <div class="col-lg-5">
          <div class="card text-white mt-3 ms-5">
            <img
              src={todolistimg}
              className="card-img"
              alt="list"
              height="250"
              width="250"
            ></img>
            {/* <div class="card-img-overlay">
                            <p class="text-danger text-center display-6 mt-5" id="userNum"></p>
                            <p class="text-warning text-center display-6 mt-5" id="todoNum"></p>
                            </div> */}
          </div>
        </div>

        <div class="col-lg-5">
          <div class="v-stack bg-white container">
            <img
              src={sitelogo}
              alt="Sitelogo"
              width="400"
              height="300"
              class="mx-auto d-block"
            ></img>
          </div>
        </div>
      </div>

      <div class="container mt-4">
        <p class="lead">
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
