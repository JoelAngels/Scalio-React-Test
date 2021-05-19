import React, { useState } from "react";
import Results from "./components/Results/Results";
import Search from "./components/Search/Search";
import axios from "axios";
import "./App.css";

function App() {
  const [repoList, setRepoList] = useState({});

  const urlBuilder = (user) => {
    const url = `https://api.github.com/search/users?q=${user}%20in:login`;
    return url;
  };

  const searchHandler = (searchText) => {
    axios.get(urlBuilder(searchText)).then((repos) => {
      setRepoList(repos.data);
    });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Search for Repositories</h1>
      </div>
      <div className="repo-container">
        <Search searchHandler={searchHandler} />
        <Results repos={repoList} />
      </div>
    </div>
  );
}
export default App;
