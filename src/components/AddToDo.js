import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AddToDo() {
  const location = useLocation();
  console.log(location.state);

  const [userid, setUserID] = useState(location.state);
  const [category, setCategory] = useState([]);
  // const [description, setDescription] = useState(location.state.description);
  // const [deadline, setDeadline] = useState(location.state.deadline);
  // const [priority, setPriority] = useState(location.state.priority);
  console.log(userid);
  useEffect(() => {
    //
    fetch("http://localhost:8083/api/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log("fetch", data);
        setCategory(data);
      });

    //
  }, []);

  console.log("we", { category });

  return (
    <>
      <div className="container mytodocontainer mt-5 mb-3 bg-white">
        <form
          className="myform border border-success rounded p-5"
          name="taskform"
          id="taskform"
        >
          <div className="form-group mb-2  text-success fw-bold">
            <label for="userid">User ID : </label>
            <input
              list="userlist"
              className="form-control"
              name="userid"
              id="userid"
              value={userid}
              readOnly
            />
            {/* <datalist id="userlist"></datalist> */}
          </div>
          <div className="form-group mb-2 text-success fw-bold">
            <label for="category">Category : </label>
            <input
              list="categorylist"
              className="form-control"
              name="category"
              id="category"
              placeholder="Please select the category"
            />
            <datalist id="categorylist"></datalist>
          </div>
          <div className="form-group mb-2 text-success fw-bold">
            <label for="description">Description : </label>
            <textarea
              className="form-control"
              name="description"
              id="description"
              placeholder="Task Details"
            ></textarea>
          </div>
          <div className="form-group mb-2 text-success fw-bold">
            <label for="deadline">DeadLine : </label>
            <input
              type="date"
              className="form-control"
              name="deadline"
              id="deadline"
              min="2024-06-13"
            />
          </div>
          <div className="form-group mb-2 text-success fw-bold">
            <label for="priority">Priority : </label>
            <input
              list="prioritylist"
              className="form-control"
              name="priority"
              id="priority"
              placeholder="Please select the priority"
            />
            <datalist id="prioritylist">
              <option value="High"></option>
              <option value="Medium"></option>
              <option value="Low"></option>
            </datalist>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-lg btn-success mt-3 me-0"
              name="addToDo"
              id="addToDo"
            >
              Add New Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
