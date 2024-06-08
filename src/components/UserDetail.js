import React from "react";
import useFetch from "../services/useFetch";

export default function UserDetail({ userid }) {
  const url = "api/todos/byuser/" + userid;
  console.log(url);
  const [userdetaillist, errorInDetail, isLoading] = useFetch(url);
  if (isLoading) return <h2>Loading....</h2>;
  console.log("onchange ", userdetaillist);

  return (
    <>
      <p>user detil</p>
      <div id="detailOfuser" className="card-deck">
        <div className="card m-4 d-flex flex-row">
          {userdetaillist.map((x) => (
            <div className="card-body text-success border border-success m-2">
              <div className="card-header border border-success">
                <strong>{x.category}</strong>
              </div>

              <p className="card-header border border-success">
                <strong>{x.description}</strong>{" "}
              </p>
              <p className="card-header border border-success">
                <strong>{x.deadline}</strong>
              </p>
              <p className="card-header border border-success">
                <strong>{x.priority}</strong>
              </p>
              <p className="card-header border border-success">
                <strong>{x.completed}</strong>
              </p>
            </div>
          ))}
          <div />
        </div>
      </div>
    </>
  );
}
