import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  width: 100%;
  height: 15vh;
  background-color: black;
  transform: translateY(100px);
  /* position: inline; */
  /* z-index: -1; */
`;
function Footer() {
  return <FooterWrap />;
}

export default Footer;
