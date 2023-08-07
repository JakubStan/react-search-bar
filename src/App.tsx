import { useState } from 'react';
import './App.css';
import {SearchBar} from "./components/SearchBar";
import {SerachResultList} from "./components/SerachResultList";

function App() {

  const [results, setResults] = useState([]);
  
  return (
    <>
      <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults}/>
        <SerachResultList results={results} />
      </div>
      </div>
    </>
  )
}

export default App
