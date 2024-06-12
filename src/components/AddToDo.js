import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AddToDo() {
  const location = useLocation();
  console.log(location.state);

  const [userid, setUserID] = useState(location.state);
  const [categoryname, setCategoryName] = useState("");
  const [category, setCategory] = useState([]);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");
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

  function AddNewTodo() {
    console.log("in new add to do");
    fetch("http://localhost:8083/api/todos", {
      method: "POST",
      body: JSON.stringify({
        userid: userid,
        category: categoryname,
        description: description,
        deadline: deadline,
        priority: priority,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        alert("Task Added successfully");
      })
      .catch((err) => {
        console.log("Oh no! There was a problem.Try again ", err);
      });
  }

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
            <label>Category : </label>
            <select onChange={(e) => setCategoryName(e.target.value)}>
              {category.map((x) => (
                <option>{x.name}</option>
              ))}
            </select>
            {/* <input
              list="categorylist"
              className="form-control"
              name="category"
              id="category"
              placeholder="Please select the category"
            />
            <datalist id="categorylist"></datalist> */}
          </div>
          <div className="form-group mb-2 text-success fw-bold">
            <label for="description">Description : </label>
            <textarea
              className="form-control"
              name="description"
              id="description"
              placeholder="Task Details"
              onChange={(e) => setDescription(e.target.value)}
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
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <div className="form-group mb-2 text-success fw-bold">
            <label for="priority">Priority : </label>

            <select
              id="prioritylist"
              name="priority"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div>
            <button
              type="button"
              className="btn btn-lg btn-success mt-3 me-0"
              name="addToDo"
              id="addToDo"
              onClick={AddNewTodo}
            >
              Add New Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
