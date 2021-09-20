import { Badge } from "@material-ui/core";
import {
  ArrowDropDown,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas: "left center right";
  padding: 10px;
  .left {
    grid-area: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0px 20px;
  }
  .left .language {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
  }
  .left .searchcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    width: 300px;
    padding: 4px;
    @media (max-width: 774px) {
      width: 100px;
    }
  }
  .left .searchcontainer .searchinput {
    width: 90%;
    outline: none;
    border: none;
    font-size: 18px;
  }
  .left .searchcontainer .searchicon {
    cursor: pointer;
  }
  .right {
    grid-area: right;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .right .menuitem {
    cursor: pointer;
  }
  .right .menuitem.cart {
    margin: 0 20px;
    height: 15px;
  }

  .center {
    grid-area: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right .register {
    margin: 0 20px;
  }
  .hamburgermenu {
    display: none;
  }
  @media (max-width: 566px) {
    grid-template-areas: "center center center center center center center center hamburger";
    padding: 2px;
    grid-gap: 2px;
    .left {
      display: none;
    }

    .right {
      display: none;
    }
    .hamburgermenu {
      grid-area: hamburger;
      width: 40px;
      height: 40px;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.5s ease-in-out;
    }
    @media (max-width: 398px) {
      .hamburgermenu {
        transform: scale(0.8);
      }
      .center {
        transform: scale(0.8);
      }
    }
    .hamburger {
      width: 30px;
      height: 5px;
      background: black;
      border-radius: 5px;
      position: relative;
      transition: all 0.4s ease;
    }
    .hamburger::before,
    .hamburger::after {
      content: "";
      position: absolute;
      width: 30px;
      height: 5px;
      background: black;
      border-radius: 5px;
    }
    .hamburger::before {
      transform: translateY(-10px);
    }
    .hamburger::after {
      transform: translateY(10px);
    }
    .hamburgermenu.active .hamburger {
      background-color: transparent;
      transform: rotate(180deg);
    }
    .hamburgermenu.active .hamburger::before {
      transform: translateY(0) rotate(45deg);
    }
    .hamburgermenu.active .hamburger::after {
      transform: translateY(0) rotate(-45deg);
    }
  }
`;

const Navbar = (props) => {
  const [state, setstate] = useState(false);

  const handleClick = () => {
    state ? setstate(false) : setstate(true);
    props.changeState(state);
  };

  useEffect(() => {
    setstate(!state);
  }, state);

  return (
    <Container>
      <div className="left">
        <span className="language">
          EN
          <ArrowDropDown />
        </span>
        <div className="searchcontainer">
          <input className="searchinput" type="text" placeholder="Search" />
          <Search className="searchicon" />
        </div>
      </div>
      <div className="center">
        <a href="/" style={{ textDecoration: "none", color: "black" }}>
          <h1>LAMA.</h1>
        </a>
      </div>
      <div className="right">
        <h3 className="menuitem register">
          <a
            href="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            Register
          </a>
        </h3>
        <h3 className="menuitem signin">
          <a href="/login" style={{ textDecoration: "none", color: "black" }}>
            SignIn
          </a>
        </h3>
        <a href="/cart" style={{ textDecoration: "none", color: "black" }}>
          <Badge className="menuitem cart" badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </a>
      </div>
      <div
        onClick={handleClick}
        className={state ? "hamburgermenu" : "hamburgermenu active"}
      >
        <div className="hamburger"></div>
      </div>
    </Container>
  );
};
export default Navbar;

/*styling ----*/
