import React from "react";
import { useLocation } from "react-router-dom";

export default function EditTasks() {
  const location = useLocation();
  console.log("in edit task", location.state.x.id);

  return (
    <>
      <h3>Edit Tasks </h3>;
      <div className="card m-4  d-flex flex-column" width="50">
        <div className="card-body text-success m-2">
          <div className="card-header border border-success m-2">
            <strong>{location.state.x.category}</strong>
          </div>
          <div className="card-header border border-success">
            <strong>{location.state.x.description}</strong>
          </div>
          <div className="card-header border border-success">
            <strong>{location.state.x.deadline}</strong>
          </div>
          <div className="card-header border border-success">
            <strong>{location.state.x.priority}</strong>
          </div>
          <div className="card-header border border-success">
            <strong>{location.state.x.completed}</strong>
          </div>
          <div className="card-header border border-success">
            <btn className="btn btn-success m-3">Edit Task</btn>
            <btn className="btn btn-success m-3 ">Delete Task</btn>
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
