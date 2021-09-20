import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  .titl {
    margin-bottom: 30px;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    li {
      list-style: none;
      width: 50%;
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 1050px) {
    .items li {
      font-size: 15px;
    }
  }
`;

const Footerlinks = () => {
  return (
    <Container>
      <div className="titl">
        <h2>Useful Links</h2>
      </div>
      <ul className="items">
        <li>Home</li>
        <li>Man Fashion</li>
        <li>Accessories</li>
        <li>Order Tracking</li>
        <li>Wishlist</li>
        <li>Cart</li>
        <li>Woman Fashion</li>
        <li>My Account</li>
        <li>Wishlist</li>
        <li>Terms</li>
      </ul>
    </Container>
  );
};

export default Footerlinks;
