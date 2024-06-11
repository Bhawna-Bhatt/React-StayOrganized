import React from "react";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateUser() {
    fetch("http://localhost:8083/api/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        username: username,
        password: password,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        // If the POST finishes successfully, display a message
        alert("New User added");
      })
      .catch((err) => {
        // If the POST returns an error, display a message
        alert("Unexpected error", err);
      });
  }

  return (
    <>
      <h2>Let us Sign you up!</h2>
      <div className="container mt-5 mb-3 bg-white">
        <div className="card-header border border-success">
          <form
            className="border border-3 border-dark needs-validation"
            id="registerform"
          >
            <div className="ms-5 mt-5 form-group ">
              <div className="m-2">
                <label for="name" class="form-label mt-2">
                  <strong className="me-3" style={{ width: "300px" }}>
                    Name :{" "}
                  </strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  id="name"
                  className="form-control bg-warning text-dark fw-bolder fs-6"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div class="invalid-feedback"> Please fill a valid name </div>
              </div>

              <div className="m-2">
                <label for="username" class="form-label mt-2">
                  <strong className="me-3" style={{ width: "300px" }}>
                    Username :{" "}
                  </strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  id="username"
                  className="form-control bg-warning text-dark fw-bolder fs-6"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div class="invalid-feedback"> Please fill a valid user</div>
              </div>

              <div class="m-2">
                <label for="password" class="formlablel mt-2">
                  <strong className="me-3" style={{ width: "300px" }}>
                    Password :{" "}
                  </strong>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  id="password"
                  className="form-control bg-warning text-dark fw-bolder fs-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div class="invalid-feedback">
                  {" "}
                  Please fill a valid password{" "}
                </div>
              </div>

              <div className="ms-1 mt-5 mb-3">
                <button
                  type="submit"
                  className="btn btn-lg btn-success mybutton"
                  onClick={validateUser}
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
