import React, { useState, useHook } from "react";
import styled from "styled-components";
import Character from "./Character.js";

function Characters(props) {
  const { characters, setCharacters } = props;
  console.log(characters[0]);
  return characters.map((cur) => <Character />);
}

export default Characters;
