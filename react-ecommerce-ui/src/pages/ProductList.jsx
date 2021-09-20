import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Filtercontainer from "../components/Filtercontainer.jsx";
import Products from "../components/Products.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer/Footer";
import Navbarmobile from "../components/Navbarmobile.jsx";

const Container = styled.div``;
const Navbarcontainer = styled.div``;

const ProductList = () => {
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
      <Filtercontainer />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
