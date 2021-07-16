import React, { useState, useHook } from "react";
import Character from "./Character.js";

function Characters(props) {
  const { characters } = props;
  //   return <Character character={characters[0]} />;
  return characters.map((cur, i) => <Character character={characters[i]} />);
}

export default Characters;
