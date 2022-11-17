import React, { useEffect, useState } from "react";
import "../views/Home.css";
import Cards from "./Cards";
// import SearchAppBar from "./navBar/SearchAppBar.js";

function Characters({ search, pageNr }) {
  // console.log("pageNr", pageNr);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  const fetchCharacter = () => {
    // console.log("this page is :>>>", pageNr);
    const url = `https://rickandmortyapi.com/api/character/?page=${pageNr}`;
    // console.log("url :>> ", url);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        let results = result.results;
        // console.log("result :>> ", results);
        setCharacters(results);
      })
      .catch((error) => {
        setError(error.message);
        console.log("error :>> ", error);
      });
  };

  useEffect(() => {
    fetchCharacter();
  }, [pageNr]);

  ///// ### 1 way to do it ### /////
  // let setSearch = (getInput) => {
  //   // console.log("getInput :>> ", getInput);
  //   setGetInput(getInput.toLowerCase());
  // };

  ///// ### another way to do it ### /////
  // const filteredResultValues = () => {
  //   // if (search === "") {
  //   //   return characters;
  //   // } else {
  //   let filteredChar = characters.filter((character) => {
  //     return character.name.toLowerCase().includes(search);
  //   });

  //   return filteredChar;
  //   // }
  // };

  return (
    <>
      {/* ///// ### and another way to do it ### ///// */}
      {characters &&
        characters
          .filter((character) => {
            return character.name.toLowerCase().includes(search);
          })
          .map((character, i) => {
            return (
              <div key={i} className="flip-card">
                <Cards cardChar={character} />
              </div>
            );
          })}
      {error && <p>{error}</p>}
      {/* <button onClick={(e) => {}}>button</button> */}
    </>
  );
}

export default Characters;

// filteredResultValues().map((character, i) => {
//           return (
//             <div key={i} className="flip-card">
//               <Cards cardChar={character} />
//             </div>
//           );
//         })
