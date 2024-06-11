import React, { useEffect, useState } from "react";
import useFetch from "../services/useFetch";
import UserDetail from "./UserDetail";
import { Link } from "react-router-dom";

export default function ViewToDo() {
  const [userid, setUserid] = useState("1");
  const [userList, errorMsg, isLoading] = useFetch("api/users");
  //console.log("is loading", isLoading);
  if (isLoading) return <h2>Loading....</h2>;

  function getDetails(selectedUser) {
    console.log("user from change", selectedUser);
    setUserid(selectedUser);
    return <UserDetail id={userid} />;
  }
  console.log("updated", userid);

  return (
    <>
      <div className="container mymaincontainer">
        <div className="dropdown text-center mt-3 mb-3">
          <select
            className="btn btn-lg selected"
            id="mydropdownMenuItems"
            onChange={(e) => getDetails(e.target.value)}
          >
            {/* <option>Select User </option> */}
            {userList.map((x) => (
              <option value={x.id}>{x.name}</option>
            ))}
          </select>
          <UserDetail userid={userid} />
          <Link to="/addtodo" state={userid}>
            <button className="btn btn-success m-3 ">Add a New Task</button>
          </Link>
        </div>
      </div>
    </>
  );
}
