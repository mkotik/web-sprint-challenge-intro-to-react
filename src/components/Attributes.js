import React from "react";
import styled from "styled-components";

const AttributesWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const AttributeHeader = styled.p`
  font-family: "Abril Fatface", cursive;
  border-bottom: 3px solid #484848;
`;

const Attribute = styled.p`
  font-family: "Abril Fatface", cursive;
  margin: 0px;
  text-align: start;
  font-size: 1rem;
`;

function Attributes(props) {
  const { character } = props;
  return (
    <AttributesWrap>
      <AttributeHeader>Attributes:</AttributeHeader>
      <Attribute>Height: {character.height} cm</Attribute>
      <Attribute>Mass: {character.mass} kg</Attribute>
      <Attribute>Hair Color: {character.hair_color}</Attribute>
      <Attribute>Skin Color: {character.skin_color}</Attribute>
      <Attribute>Gender: {character.gender}</Attribute>
    </AttributesWrap>
  );
}

export default Attributes;
