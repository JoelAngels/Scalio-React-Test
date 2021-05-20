import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Search.css";

const Search = ({ searchHandler }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
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
        data-aos="fade-up"
      />
      <span data-aos="fade-down">
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
