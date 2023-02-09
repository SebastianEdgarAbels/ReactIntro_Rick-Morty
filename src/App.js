import React, { useState } from 'react';
import './App.css';
import BasicPagination from './components/BasicPagination';
import SearchAppBar from './components/navBar/SearchAppBar';
import Home from './views/Home';

function App() {
  const [search, setSearch] = useState('');
  const [pageNr, setPageNr] = useState('1');
  const getInput = (input) => {
    setSearch(input.toLowerCase());
  };

  const getPaginationInput = (event) => {
    setPageNr(event);
  };

  return (
    <div className="App">
      <SearchAppBar getInput={getInput} />
      <Home search={search} pageNr={pageNr} />
      <BasicPagination getPaginationInput={getPaginationInput} />
    </div>
  );
}

export default App;
