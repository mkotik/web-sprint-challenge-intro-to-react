import React, { useState } from "react";
import styled from "styled-components";
import FilmsSection from "./FilmsSection.js";
import Attributes from "./Attributes.js";

const BoxWrap = styled.div`
  margin: auto;
  width: 70%;
  background-color: #faf9f6;
  border: solid 2px black;
  border-radius: 5px;
  font-family: "Tourney", cursive;
  margin-bottom: 2vh;
  &:hover {
    background-color: lightblue;
    cursor: pointer;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: auto;
  align-items: center;
`;

const BottomSection = styled.div`
  width: 100%;
  margin: 0px;
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  padding-bottom: 20px;
`;

function Bottom(props) {
  const { character } = props;
  return (
    <BottomSection>
      <FilmsSection character={character} />
      <Attributes character={character} />
    </BottomSection>
  );
}

function Character(props) {
  const { character } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <BoxWrap onClick={() => setIsOpen(!isOpen)}>
        <TopSection>
          <h2>{character.name}</h2>
          <h3>{character.birth_year}</h3>
        </TopSection>
        {isOpen && <Bottom character={character} />}
      </BoxWrap>
    </div>
  );
}

export default Character;
