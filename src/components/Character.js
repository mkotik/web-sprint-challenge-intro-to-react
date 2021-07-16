import React from "react";
import styled from "styled-components";

const BoxWrap = styled.div`
  margin: auto;
  width: 70%;
  height: 7vh;
  background-color: #faf9f6;
  border: solid 2px black;
  border-radius: 5px;
  font-family: "Tourney", cursive;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: auto;
  align-items: center;
`;

function Character() {
  return (
    <div>
      <BoxWrap>
        <TopSection>
          <h2>Luke Skywalker</h2>
          <h3>19BBY</h3>
        </TopSection>
      </BoxWrap>
    </div>
  );
}

export default Character;
