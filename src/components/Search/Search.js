import React, { useState } from "react";
import "./Search.css";

const Search = ({ searchHandler }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="wrapper">
      <input
        type="text"
        value={searchText}
        placeholder="Enter Login Data"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <span>
        <button
          type="submit"
          onClick={() => searchHandler(searchText)}
          className="button"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </span>
    </div>
  );
};

export default Search;
