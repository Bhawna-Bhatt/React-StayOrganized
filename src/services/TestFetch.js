import React from "react";
import useFetch from "./useFetch";

export default function TestFetch() {
  const { data1: user, error } = useFetch("api/categories");
  console.log({ user });
  return (
    <>
      <p>{user}</p>
    </>
  );
}
