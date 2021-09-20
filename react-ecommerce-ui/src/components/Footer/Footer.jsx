import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Footercontact from "./Footercontact";
import Footerlama from "./Footerlama";
import Footerlinks from "./Footerlinks";

const Container = styled.div`
  height: 32vh;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Footer = () => {
  return (
    <Container>
      <Footerlama />
      <Footerlinks />
      <Footercontact />
    </Container>
  );
};

export default Footer;
