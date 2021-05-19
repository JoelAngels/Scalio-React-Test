import React, { useState } from "react";
import Results from "./Results";

const Search = ({ searchHandler }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={searchText}
        placeholder="Login"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      <span>
        <button type="submit" onClick={() => searchHandler(searchText)}>
          Submit
        </button>
      </span>
    </div>
  );
};

export default Search;
