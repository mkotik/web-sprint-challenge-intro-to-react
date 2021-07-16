import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Characters from "./components/Characters.js";
import data from "./data.js";

const App = () => {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/?format=json")
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters characters={characters} />
    </div>
  );
};

export default App;
