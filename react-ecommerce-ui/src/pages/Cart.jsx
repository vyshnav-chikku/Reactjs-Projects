import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Cartitem from "../components/Cart/Cartitem";
import Cartorder from "../components/Cart/Cartorder";
import Carttitle from "../components/Cart/Carttitle";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import Navbarmobile from "../components/Navbarmobile";

const Navbarcontainer = styled.div``;

const Cart = () => {
  const [st, setst] = useState("false");
  console.log(st);

  useEffect(() => {
    setst(!st);
  }, []);
  return (
    <div>
      <Navbar changeState={(state) => setst(state)} />
      <Announcement />
      <Navbarcontainer>
        <Navbarmobile sta={st} />
      </Navbarcontainer>
      <Carttitle />
      <Cartitem />
      <Footer />
    </div>
  );
};

export default Cart;
