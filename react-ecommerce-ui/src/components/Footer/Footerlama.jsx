import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;

  .icon {
    width: 50%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .desc {
    font-size: 20px;
    width: 90%;
    margin-bottom: 20px;
  }
  @media (max-width: 1050px) {
    .desc {
      font-size: 15px;
    }
  }
`;
const Icon = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;

const Footerlama = () => {
  return (
    <Container>
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "20px",
        }}
      >
        LAMA.
      </h1>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        laudantium quasi, veritatis hic provident magni voluptas neque officia
        maxime, enim ab, delectus deleniti necessitatibus earum. Deleniti
        inventore quas minima consequuntur.
      </p>
      <div className="icon">
        <Icon className="logo facebook" color="#4267b2">
          <Facebook style={{ width: "30px", height: "30px" }} />
        </Icon>
        <Icon className="logo insta" color="#fb3958">
          <Instagram style={{ width: "30px", height: "30px" }} />
        </Icon>
        <Icon className="logo twitter" color="#1da1f2">
          <Twitter style={{ width: "30px", height: "30px" }} />
        </Icon>
        <Icon className="logo pinterest" color="#e60023">
          <Pinterest style={{ width: "30px", height: "30px" }} />
        </Icon>
      </div>
    </Container>
  );
};

export default Footerlama;
