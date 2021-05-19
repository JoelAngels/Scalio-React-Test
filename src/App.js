import React, { useEffect, useState } from "react";
import "./App.css";
import Results from "./components/Results";
import Search from "./components/Search";
import listLoading from "./components/Loading";
import axios from "axios";

function App() {
  const ListLoading = listLoading(Results);
  const [repoList, setRepoList] = useState({});

  // create a function that expects a string argument, that then concatinates 3 strings into one url string.

  // replace the 2nd string with search term
  const searchHandler = (searchText) => {
    axios.get(urlBuilder(searchText)).then((repos) => {
      setRepoList(repos.data);
    });
  };
  // make a request using the newly created url.
  const urlBuilder = (user) => {
    const url = `https://api.github.com/search/users?q=${user}%20in:login`;
    return url;
  };

  // useEffect(() => {
  //   const apiUrl = `https://api.github.com/search/users?q=foo%20in:login`;
  //   axios.get(urlBuilder("foo")).then((repos) => {
  //     setRepoList(repos.data);
  //   });
  // }, [setRepoList]);
  return (
    <div className="App">
      <div className="container">
        <h1>My Repositories</h1>
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
