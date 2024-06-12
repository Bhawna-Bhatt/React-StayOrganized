import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
        console.log(json.ok);
        alert("New User Updated!");

        navigate("/viewtodo");
      })
      .catch((err) => {
        // If the POST returns an error, display a message
        console.log(err);
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
                <label className="form-label mt-2">
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
              </div>

              <div className="m-2">
                <label className="form-label mt-2">
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
              </div>

              <div className="m-2">
                <label className="formlablel mt-2">
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
              </div>

              <div className="ms-1 mt-5 mb-3">
                <button
                  type="button"
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
