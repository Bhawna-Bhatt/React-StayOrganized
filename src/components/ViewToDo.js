import React, { useEffect, useState } from "react";
import useFetch from "../services/useFetch";
import UserDetail from "./UserDetail";

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
          {/* <div id="detailOfuser" className="card-deck">
            <div className="card">
              {userList.map((x) => (
                <div class="card-body">
                  <p class="card-text"> {x.category}</p>
                  <p class="card-text"> {x.description}</p>
                  <p class="card-text"> {x.deadline}</p>
                  <p class="card-text"> {x.priority}</p>
                  <p class="card-text"> {x.completed}</p>
                </div>
              ))}
              <div />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
