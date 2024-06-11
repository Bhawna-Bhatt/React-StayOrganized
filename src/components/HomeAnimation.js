import React from "react";
import { useState } from "react";

export default function HomeAnimation() {
  const [userNum, setUserNum] = useState(0);
  const [todoNum, setTodoNum] = useState(0);

  fetch("http://localhost:8083/api/todos/")
    .then((response) => response.json())
    .then((data) => {
      setTodoNum(data.length);
    });

  fetch("http://localhost:8083/api/users")
    .then((response) => response.json())
    .then((data) => {
      setUserNum(data.length);
    });
  console.log(todoNum, userNum);

  return (
    <>
      <div className="text-success myanimation">
        <h3> Active Users : {userNum} </h3>
        <h3> Active Tasks :{todoNum} </h3>
      </div>
    </>
  );
}
