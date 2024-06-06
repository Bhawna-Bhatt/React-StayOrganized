import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function ViewToDo() {
  const [userList, errorMsg] = useFetch("api/users");
  console.log(userList);

  return (
    <>
      <h2>Your To-do List</h2>
      <div class="container mymaincontainer"></div>

      <div class="dropdown text-center mt-3 mb-3">
        <p>{userList}</p>
        <select id="mydropdownMenuItems" class="btn btn-lg selected">
          <option class="selectedoption" value="">
            Select User
          </option>
        </select>
      </div>
    </>
  );
}
