import React from "react";
import styled from "styled-components";

const Announcement = () => {
  return <Container>Super Deal!Free Shipping on Orders over $50</Container>;
};
export default Announcement;

/*---Styling---*/

const Container = styled.div`
  height: 30px;
  background: teal;
  color: white;
  font-size: 19px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width:416px){
    font-size: 12px;
  }
`;
