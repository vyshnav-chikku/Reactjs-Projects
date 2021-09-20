import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Category from "../components/Category";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import Navbarmobile from "../components/Navbarmobile";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Sliders from "../components/Sliders";

const Container = styled.div`
  position: relative;
`;

const Navbarcontainer = styled.div``;

const Home = () => {
  const [st, setst] = useState("false");
  console.log(st);

  useEffect(() => {
    setst(!st);
  }, []);

  return (
    <Container>
      <Announcement />
      <Navbar changeState={(state) => setst(state)} />
      <Navbarcontainer>
        <Navbarmobile sta={st} />
      </Navbarcontainer>
      <Sliders />
      <Category />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
