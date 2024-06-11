import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EditTasks() {
  const location = useLocation();
  const [disableInput, setDisableInput] = useState(true);
  const [disablecompleted, setDisableCompleted] = useState("hidden");

  //console log for to check if we received value via link

  console.log("in edit task", location.state.x.id);

  // states for edit
  const [id, setID] = useState(location.state.x.id);
  const [userid, setUserId] = useState(location.state.x.userid);
  const [category, setCategory] = useState(location.state.x.category);
  const [description, setDescription] = useState(location.state.x.description);
  const [deadline, setDeadline] = useState(location.state.x.deadline);
  const [priority, setPriority] = useState(location.state.x.priority);
  const [completed, setCompleted] = useState(location.state.x.completed);

  // state for icon

  // function to edit task
  function PostTask() {
    //Post data
    const url = "http://localhost:8083/api/todos/" + id;
    console.log("completed", Boolean(completed));
    //setCompleted((completed === "true") ? WebTransportDatagramDuplexStream)
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        category: category,
        description: description,
        deadline: deadline,
        priority: priority,
        completed: Boolean(completed),
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        alert("Task Added successfully");
      })
      .catch((err) => {
        // If the PUT returns an error, ...
        console.log(err);
      });
    setDisableInput(!disableInput);
  }

  //delete function

  function DeleteTask() {
    const url = "http://localhost:8083/api/todos/" + id;
    // send DELETE request w/ id as part of URL
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        // If the DELETE is successful, display a message
        alert("Task deleted");
      })
      .catch((err) => {
        // If the DELETE returns an error, display a message
        alert("Unexpected error.");
      });
  }

  console.log("com", typeof completed, completed);
  return (
    <>
      <h3>Edit {location.state.x.category} </h3>;
      <div className="card m-4  d-flex flex-column" width="50">
        <div className="card-body text-success m-2">
          <div className="card-header border border-success m-2">
            <label className="text-dark h6">
              <strong className="me-3">Category : </strong>
            </label>
            <strong>{category}</strong>
          </div>
          <div className="card-header border border-success">
            <label className="text-dark">
              <strong className="me-3" style={{ width: "300px" }}>
                Description :
              </strong>
            </label>
            <input
              value={description}
              disabled={disableInput}
              style={{ width: "700px" }}
              className="bg-warning text-dark fw-bolder fs-6"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="card-header border border-success">
            <label className="text-dark">
              <strong className="me-3">End Date :</strong>{" "}
            </label>
            <input
              value={deadline}
              disabled={disableInput}
              style={{ width: "300px" }}
              className="bg-warning text-dark fw-bolder fs-6 ms-3"
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <div className="card-header border border-success">
            <label className="text-dark">
              {" "}
              <strong className="me-3">Priority : </strong>
            </label>{" "}
            <input
              value={priority}
              disabled={disableInput}
              style={{ width: "300px" }}
              className="bg-warning text-dark fw-bolder fs-6 ms-4"
              onChange={(e) => setPriority(e.target.value)}
            />
          </div>
          <div className="card-header border border-success">
            <label className="text-dark">
              <strong className="me-3"> Completed : </strong>
            </label>{" "}
            <i
              className={
                completed ? "bi bi-check2-square fs-3" : "bi bi-file-excel fs-3"
              }
            ></i>
            <input
              value={completed}
              disabled={disableInput}
              type={disablecompleted}
              style={{ width: "300px" }}
              className="bg-warning"
              onChange={(e) => setCompleted(e.target.value)}
            />
          </div>
          <div className="card-header border border-success">
            <button
              className="btn btn-success m-3"
              onClick={() => {
                setDisableInput(!disableInput);
                setDisableCompleted("show");
              }}
            >
              Edit Task
            </button>
            <button className="btn btn-success m-3" onClick={PostTask}>
              Save Task
            </button>
            <button className="btn btn-success m-3 " onClick={DeleteTask}>
              Delete Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
// "id": 1,
// "userid": 5,
// "category": "Personal Task",
// "description": "Finish studying for ENG 211 exam",
// "deadline": "2022-12-15",
// "priority": "Medium",
// "completed": false
