import React from "react";
import useFetch from "../services/useFetch";
import { Link } from "react-router-dom";

export default function UserDetail({ userid }) {
  const url = "api/todos/byuser/" + userid;
  console.log(url);
  const [userdetaillist, errorInDetail, isLoading] = useFetch(url);
  if (isLoading) return <h2>Loading....</h2>;
  console.log("onchange ", userdetaillist);

  return (
    <>
      <h5 className="p-2">Your To-do List</h5>
      <div id="detailOfuser" className="card-deck">
        <div className="card m-4 d-flex flex-row">
          {userdetaillist.map((x) => (
            <div className="card-body text-success border border-success m-2">
              <div className="card-header border border-success btn m-2">
                <strong>{x.category}</strong>
                <Link to="/edittasks" state={{ x }}>
                  {/* <Link
                  to={{
                    pathname: "/edittasks",
                    state = {a:x},
                  }}
                > */}
                  <button type="button" className="btn btn-success m-2">
                    See Details
                  </button>
                </Link>
              </div>

              <p className="card-header border border-success">
                <strong>{x.description}</strong>
              </p>
              <p className="card-header border border-success">
                <strong>Complete by : {x.deadline}</strong>
              </p>
              {/* <p className="card-header border border-success">
                <strong>{x.priority}</strong>
              </p>
              <p className="card-header border border-success">
                <strong>{x.completed}</strong>
              </p> */}
            </div>
          ))}
          <div />
        </div>
      </div>
    </>
  );
}
