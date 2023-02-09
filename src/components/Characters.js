import React, { useEffect, useState } from 'react';
import '../views/Home.css';
import Cards from './Cards';

function Characters({ search, pageNr }) {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  const fetchCharacter = () => {
    const url = `https://rickandmortyapi.com/api/character/?page=${pageNr}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        let results = result.results;
        setCharacters(results);
      })
      .catch((error) => {
        setError(error.message);
        console.log('error :>> ', error);
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
