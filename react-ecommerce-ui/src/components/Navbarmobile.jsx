import { Badge } from "@material-ui/core";
import {
  ArrowDropDown,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: ${(props) => (props.state ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  background: #ff4500;

  color: white;
  transition: all 0.5s ease;
  @media (min-width: 566px) {
    display: none;
  }

  .searchcontainer {
    padding: 2px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background: white;
      color: black;
      border-top: 5px solid black;
      border-left: 5px solid black;
      border-radius: 5px;
    }
    .language {
      font-size: 1rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      :hover {
        background: white;
        color: black;
      }
    }
    .search {
      border: 1px solid grey;
      margin: 5px 0;
      border-radius: 20px;
      display: flex;
      padding: 5px;
      background: white;
    }
  }
  .searchinput {
    border: none;
    font-size: 1rem;
    outline: none;
  }
  .searchicon {
    cursor: pointer;
    color: black;
  }
  .home {
    padding: 10px;
    font-size: 1.2rem;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    text-decoration: none;
    :hover {
      background: white;
      color: black;
      border-bottom: 5px solid black;
      border-left: 5px solid black;
      font-weight: bolder;
      border-radius: 5px;
    }
  }
  .register {
    padding: 10px;
    font-size: 1.2rem;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    text-decoration: none;
    :hover {
      background: white;
      color: black;
      border-bottom: 5px solid black;
      border-left: 5px solid black;
      font-weight: bolder;
      border-radius: 5px;
    }
  }
  .signin {
    padding: 10px;
    font-size: 1.2rem;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    text-decoration: none;
    :hover {
      background: white;
      color: black;
      border-left: 5px solid black;
      border-bottom: 5px solid black;
      border-radius: 5px;
      font-weight: bolder;
    }
  }
  .cart {
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    text-decoration: none;
    :hover {
      background: white;
      color: black;
      border-left: 5px solid black;
      border-radius: 5px;
      border-bottom: 5px solid black;
    }
    .cartcontainer {
      border: none;
    }
  }
`;

const Navbarmobile = (props) => {
  const [initial, setinitial] = useState(false);
  console.log(props.sta);

  return (
    <Container state={props.sta}>
      <div className="searchcontainer">
        <div className="language">
          EN
          <ArrowDropDown />
        </div>
        <div className="search">
          <input className="searchinput" type="text" placeholder="Search" />
          <Search className="searchicon" />
        </div>
      </div>
      <a href="/" className="home">
        HOME
      </a>

      <a href="/register" className="register">
        REGISTER
      </a>
      <a href="/login" className="signin">
        SIGN IN
      </a>
      <a href="/cart" className="cart">
        <div className="cartcontainer">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </div>
      </a>
    </Container>
  );
};
export default Navbarmobile;
