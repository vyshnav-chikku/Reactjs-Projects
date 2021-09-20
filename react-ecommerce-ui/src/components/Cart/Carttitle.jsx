import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-areas:
    "title title title"
    "button1 details button2";
  justify-items: center;
  margin: 10px 0;
  .title {
    grid-area: title;
    font-size: 3rem;
    font-weight: 200;
  }
  .details {
    grid-area: details;
    display: flex;
    width: 350px;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    text-decoration: underline;
  }
  .button {
    padding: 15px;
    font-weight: 800;
    font-size: 17px;
    cursor: pointer;
  }
  .button1 {
    grid-area: button1;
    background: white;
    color: black;
  }
  .button2 {
    grid-area: button2;
    background: black;
    color: white;
  }
  @media (max-width: 788px) {
    grid-gap: 5px;
    .title {
      font-size: 2rem;
    }
    .details {
      width: 250px;
      font-size: 15px;
    }
    .button {
      padding: 10px;
      font-size: 12px;
    }
  }
  @media (max-width: 550px) {
    .title {
      font-size: 1.5rem;
    }
    .details {
      width: 180px;
      font-size: 12px;
    }
    .button {
      padding: 5px;
      font-size: 8px;
    }
  }
`;

const Carttitle = () => {
  return (
    <Container>
      <div className="title">YOUR BAG</div>
      <a href="/">
        <button className="button button1">CONTINUE SHOPPING</button>
      </a>
      <div className="details">
        <div className="shoppingitems">Shopping Bag (2)</div>
        <div className="wishlist">Your Wishlist (0)</div>
      </div>
      <a href="/">
        <button className="button button2">CHECKOUT NOW</button>
      </a>
    </Container>
  );
};

export default Carttitle;
