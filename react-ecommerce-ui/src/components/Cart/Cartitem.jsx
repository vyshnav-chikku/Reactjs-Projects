import React from "react";
import styled from "styled-components";
import Cartorder from "./Cartorder";
import Cartsingleitems from "./Cartsingleitems";
import Carttitle from "./Carttitle";
import Cartsingleitem2 from "./Cartsingleitem2";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  .cartitem1 {
    grid-column: 1/3;
    grid-row: 1/2;
    border-bottom: 1px solid grey;
  }
  .cartorder {
    grid-column: 3/4;
    grid-row: 1/3;
  }
  .cartitem2 {
    grid-column: 1/3;
    grid-row: 2/3;
  }
  @media (max-width: 992px) {
    .cartitem1 {
      grid-column: 1/4;
    }
    .cartitem2 {
      grid-column: 1/4;
    }
    .cartorder {
      grid-column: 1/4;
      grid-row: 3/4;
    }
  }
`;

const Cartitem = () => {
  return (
    <Container>
      <div className="cartitem1">
        <Cartsingleitems />
      </div>
      <div className="cartitem2">
        <Cartsingleitem2 />
      </div>
      <div className="cartorder">
        <Cartorder />
      </div>
    </Container>
  );
};

export default Cartitem;
