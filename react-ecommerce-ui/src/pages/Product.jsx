import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import Navbarmobile from "../components/Navbarmobile";
import Newsletter from "../components/Newsletter";
import Singleproduct from "../components/Singleproduct";

const Container = styled.div``;
const Navbarcontainer = styled.div``;

const Product = () => {
  const [st, setst] = useState("false");
  console.log(st);

  useEffect(() => {
    setst(!st);
  }, []);

  return (
    <Container>
      <Navbar changeState={(state) => setst(state)} />
      <Navbarcontainer>
        <Navbarmobile sta={st} />
      </Navbarcontainer>
      <Announcement />
      <Singleproduct />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
