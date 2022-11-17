import React, { useState, useEffect } from "react";
import "./App.css";
import BasicPagination from "./components/BasicPagination";
import SearchAppBar from "./components/navBar/SearchAppBar";
import Home from "./views/Home";

function App() {
  //input word hast to arrive herein
  //create a function  . pass the function as props to the children. create
  // const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [pageNr, setPageNr] = useState("1");
  const getInput = (input) => {
    console.log("input >>>>:", input.toLowerCase());
    setSearch(input.toLowerCase());
    // useEffect(() => {
    //   console.log("hi");
    // }, [count]);
  };

  const getPaginationInput = (event) => {
    // console.log("event", event);
    setPageNr(event);
  };

  // console.log("getInputForPagination", getPaginationInput);

  return (
    <div className="App">
      <SearchAppBar getInput={getInput} />
      {/* pass input as props to the component in which you list your characters */}
      <Home search={search} pageNr={pageNr} />
      {/* <button onClick={() => setCount(count + 1)}>click</button> */}
      <BasicPagination getPaginationInput={getPaginationInput} />
    </div>
  );
}

export default App;
