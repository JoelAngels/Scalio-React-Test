import React, { useState } from "react";
import "./App.css";
import Results from "./components/Results";
import Search from "./components/Search";
import listLoading from "./components/Loading";
import axios from "axios";

function App() {
  const ListLoading = listLoading(Results);
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
        <ListLoading repos={repoList} />
      </div>
    </div>
  );
}
export default App;

/*

https://api.github.com/search/users?q=tetris%20in:login&page=1&per_page=10

*/

/*

https://api.github.com/search/users?q=tetris%20in:login&order=desc&page=1&per_page=10

Add material ui pagination component
Underneath the table


Change the page number in the url string to match the page number in the material ui pagination component
array.sort based on userName
*/

// useEffect(() => {
//   const apiUrl = `https://api.github.com/search/users?q=foo%20in:login`;
//   axios.get(urlBuilder("foo")).then((repos) => {
//     setRepoList(repos.data);
//   });
// }, [setRepoList]);
