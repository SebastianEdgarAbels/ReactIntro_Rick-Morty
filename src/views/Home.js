import React from "react";
import Characters from "../components/Characters";
// import SearchAppBar from "../components/navBar/SearchAppBar";
import "./Home.css";

function Home({ search, pageNr }) {
  // console.log("characters :>> ", results);
  return (
    <div className="container">
      <Characters search={search} pageNr={pageNr} />
    </div>
  );
}

export default Home;
