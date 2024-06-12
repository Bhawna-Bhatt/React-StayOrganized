import React, { useState } from "react";
import useFetch from "../services/useFetch";
import { Link } from "react-router-dom";

export default function UserDetail({ userid }) {
  const [search, setSearch] = useState("");
  const url = "api/todos/byuser/" + userid;
  console.log("in usedeatil", url);
  const [userdetaillist, errorInDetail, isLoading] = useFetch(url);
  if (isLoading) return <h2>Loading....</h2>;
  console.log("onchange ", userdetaillist);
  console.log("search string ", search);

  return (
    <>
      {" "}
      <div className="container bg-warning mt-5">
        <form className="d-flex me-0" role="search">
          <input
            type="search"
            className="form-control me-2"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          ></input>

          <button className="btn btn-outline-light bg-success" type="button">
            Search
          </button>
        </form>
      </div>
      <h5 className="p-2">Your To-do List</h5>
      <div id="detailOfuser" className="card-deck">
        <div className="card m-4 d-flex flex-row">
          {userdetaillist
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.description.toLowerCase().includes(search);
            })
            .map((x) => (
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
                <p className="card-header border border-success">
                  <strong>{x.priority}</strong>
                </p>
                <p className="card-header border border-success">
                  <strong>{String(x.completed)}</strong>
                </p>
              </div>
            ))}
          <div />
        </div>
      </div>
    </>
  );
}
