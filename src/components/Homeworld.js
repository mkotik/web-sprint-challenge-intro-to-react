import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HomeWorldWrap = styled.div`
  font-family: "Abril Fatface", cursive;
`;

const HomeWorldHeader = styled.p`
  border-bottom: 3px solid #484848;
`;

const HomeWorldText = styled.p``;

function Homeworld(props) {
  const { homeWorld } = props;
  return (
    <HomeWorldWrap>
      <HomeWorldHeader>Home World:</HomeWorldHeader>
      <HomeWorldText>{homeWorld}</HomeWorldText>
    </HomeWorldWrap>
  );
}
export default Homeworld;
