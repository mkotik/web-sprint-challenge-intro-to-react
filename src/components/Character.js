import React, { useState } from "react";
import styled from "styled-components";

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
  /* align-items: center; */
  padding-top: 20px;
`;

const Films = styled.div`
  width: 40%;
`;

const FilmsHeader = styled.div`
  font-family: "Abril Fatface", cursive;
  border-bottom: solid 3px black;
  width: 80%;
  margin: auto;
`;

const FilmsList = styled.ul``;

const FilmsListItem = styled.li`
  font-family: "Abril Fatface", cursive;
  width: 20%;
`;

function Bottom(props) {
  const { character } = props;
  return (
    <BottomSection>
      <Films>
        <FilmsHeader>Films:</FilmsHeader>
        <FilmsList>
          {character.films.map((cur) => (
            <FilmsListItem>Test</FilmsListItem>
          ))}
        </FilmsList>
      </Films>
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
