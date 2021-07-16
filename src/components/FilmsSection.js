import React from "react";
import styled from "styled-components";

const Films = styled.div`
  /* width: 50%; */
`;

const FilmsHeader = styled.div`
  font-family: "Abril Fatface", cursive;
  border-bottom: solid 3px black;
  /* width: 190px; */
  /* margin: auto; */
  /* margin-left: 20px; */
`;

const FilmsList = styled.ul`
  padding-left: 0px;
`;

const FilmsListItem = styled.li`
  font-family: "Abril Fatface", cursive;
  /* width: 190px; */
  text-align: start;
  margin: 0px;
`;

function FilmsSection(props) {
  const { character } = props;
  return (
    <Films>
      <FilmsHeader>Films:</FilmsHeader>
      <FilmsList>
        {character.films.map((cur, i) => (
          <FilmsListItem>{character.films[i]}</FilmsListItem>
        ))}
      </FilmsList>
    </Films>
  );
}

export default FilmsSection;
