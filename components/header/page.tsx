import React from "react";

export const Header = () => {
  return (
    <div className="w-100 text-white">
      <div className="d-flex flex-row justify-content-between align-items-center w-100">
        <h1 className="fw-bold text-white">Movie Mingle</h1>
        <form id="form">
          <input
            type="text"
            id="search"
            className="search"
            placeholder="Search..."
            // onClick={}
          />
        </form>
      </div>
    </div>
  );
};
