import React, { useState, useEffect } from "react";
import Results from "./components/Results/Results";
import Search from "./components/Search/Search";
import axios from "axios";
import "./App.css";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 330px;
  margin: 0 auto;

  @media only screen and (max-width: 480px) {
    display: block;
    margin: 0 auto;
    border-color: red;
    top: 10px;
  }
  @media only screen and (min-width: 749px) and (max-width: 1024px) {
    display: block;
    margin: 0 auto;
    border-color: red;
    top: 450px;
    background: black;
  }
`;

function App() {
  const [repoList, setRepoList] = useState({});
  const [loading, setLoading] = useState(false);

  const urlBuilder = (user) => {
    const url = `https://api.github.com/search/users?q=${user}%20in:login`;
    return url;
  };

  const searchHandler = (searchText) => {
    axios.get(urlBuilder(searchText)).then((repos) => {
      setRepoList(repos.data);
    });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      {loading ? (
        <RingLoader
          color={"#f9004d"}
          loading={loading}
          size={100}
          css={override}
        />
      ) : (
        <div className="App">
          <div className="container">
            <h1>Search for Repositories</h1>
          </div>
          <div className="repo-container">
            <Search searchHandler={searchHandler} />
            <Results repos={repoList} />
          </div>
        </div>
      )}
    </>
  );
}
export default App;
