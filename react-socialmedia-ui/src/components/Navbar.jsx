import { Badge } from "@material-ui/core";
import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import person11 from "/home/chikku/S7/react-socialmedia-ui/src/assets/person/11.jpg";

const Mobilecontainer = styled.div`
  grid-column: 4/12;
  display: grid;
  grid-template-columns: repeat(10, 1fr);

  @media screen and (max-width: 896px) {
    padding: 10px;
    background: black;
    display: ${(props) => (props.st ? "none" : "grid")};
    grid-column: 1/12;
    grid-row: 2/6;
    grid-template-rows: repeat(4, 1fr);
  }
`;

const Container = styled.nav`
  display: grid;
  z-index: 200;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(1, 1fr);
  padding: 10px;
  background-color: #1e90ff;
  position: sticky;
  top: 0;
  .titlecontainer {
    grid-column: 1/3;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title {
    font-size: 38px;
    letter-spacing: 3px;
    font-weight: bolder;
    color: white;
    margin-left: 10px;
    cursor: pointer;
    text-decoration: none;
  }
  .container {
  }
  .searchcontainer {
    grid-column: 1/5;
    display: flex;
    align-items: center;
    background: white;
    width: 100%;
    border-radius: 30px;
  }
  .searchicon {
    margin-left: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .searchinput {
    width: 90%;
  }
  .searchinput input {
    width: 95%;

    font-size: 20px;
    outline: none;
    border: none;
  }

  .homepage {
    cursor: pointer;

    grid-column: 5/6;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: white;
    margin-left: 20px;
    text-decoration: none;
  }
  .timeline {
    grid-column: 6/7;
    display: flex;
    cursor: pointer;
    align-items: center;
    font-size: 20px;
    color: white;
    margin-left: 20px;
    text-decoration: none;
  }
  .usericons {
    grid-column: 8/11;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .badges {
    width: 150px;
    display: flex;
    cursor: pointer;
    color: white;
    justify-content: space-around;
  }
  .profile {
    cursor: pointer;
    width: 50px;
    height: 50px;
  }
  .profile img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid white;
  }
  .hamburgermenu {
    display: none;
  }
  @media screen and (max-width: 896px) {
    transition: all 2s ease;
    grid-template-rows: repeat(${(props) => (props.st ? "1" : "5")}, 1fr);
    padding: 0;

    .titlecontainer {
      padding: 5px;
      grid-column: 1/12;
      grid-row: 1/2;
    }
    .container {
    }
    .searchcontainer {
      grid-column: 1/11;
      grid-row: 2/3;
      margin-bottom: 15px;
    }
    .homepage {
      font-size: 25px;
      grid-column: 1/11;
      margin-left: 0px;
      margin-bottom: 15px;
      grid-row: 3/4;
      :hover {
        border-radius: 5px;
        padding: 3px;
        background: white;
        color: black;
      }
    }
    .timeline {
      font-size: 25px;
      grid-column: 1/11;
      margin-left: 0px;
      grid-row: 4/5;
      margin-bottom: 15px;

      :hover {
        padding: 3px;
        border-radius: 5px;
        background: white;
        color: black;
      }
    }
    .usericons {
      grid-column: 1/11;
      grid-row: 1/2;
      display: flex;
      justify-content: flex-end;
      margin-right: 15px;
      margin-bottom: 15px;
      padding: 3px;
      :hover {
        background: white;
        border-radius: 5px;
        .badges {
          color: black;
        }
      }
    }
    .badges {
      margin-right: 35px;
    }
    .hamburgermenu {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      margin-right: 10px;
      cursor: pointer;
    }
    .hamburger {
      position: relative;
      width: 32px;
      height: 5px;
      background: white;
      border-radius: 8px;
    }
    .hamburger::after,
    .hamburger::before {
      content: "";
      position: absolute;
      width: 32px;
      height: 5px;
      border-radius: 8px;
      background: white;
    }
    .hamburger::before {
      transform: translateY(-10px);
    }
    .hamburger::after {
      transform: translateY(10px);
    }
    .hamburgermenu.active .hamburger {
      background: transparent;
      transition: all 0.5s ease;
      transform: rotate(360deg);
    }
    .hamburgermenu.active .hamburger::before {
      transform: translateY(0px) rotate(40deg);
    }
    .hamburgermenu.active .hamburger::after {
      transform: translateY(0px) rotate(-40deg);
    }
  }
  @media screen and (max-width: 466px) {
    .title {
      font-size: 30px;
      letter-spacing: 2.5px;
    }
    .homepage,
    .timeline {
      font-size: 20px;
    }
    .hamburgermenu {
      width: 40px;
      height: 40px;
    }
  }
`;

const Navbar = (props) => {
  const [state, setstate] = useState(true);
  console.log(state);

  props.changehamburger(state);

  return (
    <Container st={state}>
      <div className="titlecontainer">
        <a href="/" className="title">
          G.O.T
        </a>
        <div
          className={state ? "hamburgermenu" : "hamburgermenu active"}
          onClick={() => setstate(!state)}
        >
          <div className="hamburger"></div>
        </div>
      </div>
      <Mobilecontainer st={state}>
        <div className="searchcontainer">
          <div className="searchicon">
            <Search />
          </div>
          <div className="searchinput">
            <input type="text" placeholder="Search for friend,post or video" />
          </div>
        </div>
        <a href="/" className="homepage">
          Homepage
        </a>
        <div className="timeline">Timeline</div>
        <div className="usericons">
          <a href="/login" className="badges">
            <Badge className="badge" badgeContent={4} color="secondary">
              <Person />
            </Badge>
            <Badge className="badge" badgeContent={4} color="secondary">
              <Chat />
            </Badge>
            <Badge className="badge" badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
          </a>
          <a href="/profile" className="profile">
            <img src={person11} alt="person1" />
          </a>
        </div>
      </Mobilecontainer>
    </Container>
  );
};

export default Navbar;
