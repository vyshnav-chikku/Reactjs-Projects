import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 40px 0;
  background: #ffefd5;
  display: grid;
  grid-template-areas:
    "news"
    "para"
    "email";
  justify-items: center;
  .news {
    grid-area: news;
    font-size: 100px;
  }
  .para {
    grid-area: para;
    font-size: 30px;
    margin: 10px 0;
    color: grey;
  }
  .email {
    grid-area: email;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
    height: 50px;
    margin: 10px 0;
  }
  .email input {
    width: 90%;
    height: 100%;
    font-size: 20px;
    outline: none;
    border: 1px solid grey;
  }
  .email .icon {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #348781;
    cursor: pointer;
    color: white;
  }
  @media (max-width: 644px) {
    .news {
      font-size: 50px;
    }
    .para {
      font-size: 20px;
    }
    .email {
      height: 30px;
      width: 250px;
    }
  }
  @media (max-width: 424px) {
    .news {
      font-size: 40px;
    }
    .para {
      font-size: 15px;
    }
    .email {
      height: 27px;
      width: 230px;
    }
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <h1 className="news">Newsletter</h1>
      <p className="para">Get timely updates from your favorite products.</p>
      <div className="email">
        <input type="text" placeholder="Your Email" />
        <div className="icon">
          <Send />
        </div>
      </div>
    </Container>
  );
};

export default Newsletter;
