import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 20px;
  .title {
    grid-column: 1/3;
    grid-row: 1/2;
    font-size: 50px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .filter1 {
    grid-column: 1/2;
    grid-row: 2/3;
    font-size: 30px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .filter2 {
    grid-column: 2/3;
    grid-row: 2/3;
    font-size: 30px;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  @media (max-width: 630px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
    .title {
      grid-column: 1/2;
      grid-row: 1/2;
      font-size: 35px;
      margin-bottom: 10px;
    }
    .filter1 {
      grid-column: 1/2;
      grid-row: 2/3;
      font-size: 25px;
    }
    .filter2 {
      grid-column: 1/2;
      grid-row: 3/4;
      font-size: 25px;
      justify-content: start;
    }
  }
  @media (max-width: 378px) {
    .filter1 {
      font-size: 20px;
    }
    .filter2 {
      font-size: 20px;
    }
  }
`;
const Select = styled.select`
  width: ${(props) => props.w1};
  height: ${(props) => props.h1};
  margin: ${(props) => props.m1};
  font-size: 20px;
  @media (max-width: 786px) {
    font-size: 15px;
    width: ${(props) => props.w2};
    height: ${(props) => props.h2};
    margin: ${(props) => props.m2};
  }
`;

const Filtercontainer = () => {
  return (
    <Container>
      <h1 className="title">Dresses</h1>
      <div className="filter filter1">
        <p className="filterproducts">Filter Products:</p>
        <Select w1="80px" w2="60px" h1="40px" h2="30px" m1="0 10px" m2="0 5px">
          <option disabled selected>
            Color
          </option>
          <option>White</option>
          <option>Black</option>
          <option>Red</option>
          <option>Blue</option>
          <option>Yellow</option>
          <option>Green</option>
        </Select>
        <Select w1="80px" w2="60px" h1="40px" h2="30px" m1="0 10px" m2="0 5px">
          <option disabled selected>
            Size
          </option>
          <option>XS</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
          <option>XXL</option>
        </Select>
      </div>
      <div className="filter filter2">
        Sort Products:
        <Select w1="100px" w2="70px" h1="40px" h2="30px" m1="0 10px" m2="0 5px">
          <option selected>Newest</option>
          <option>Price (asc)</option>
          <option>Price (desc)</option>
        </Select>
      </div>
    </Container>
  );
};

export default Filtercontainer;
