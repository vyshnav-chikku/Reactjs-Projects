import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import person11 from "/home/chikku/S7/react-socialmedia-ui/src/assets/person/11.jpg";

const Container = styled.div`
  .homecontainer {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 20px;
  }
  .feed {
    grid-column: 3/7;
    padding: 8px;
    @media screen and (max-width: 896px) {
      grid-column: 4/10;
    }
    @media screen and (max-width: 512px) {
      grid-column: 1/10;
    }
  }
  .rightbar {
    grid-column: 7/10;
  }
  .sidebar {
    grid-column: 1/3;
    @media screen and (max-width: 896px) {
      grid-column: 1/4;
    }
  }
`;

const Home = () => {
  const [st, setst] = useState();
  const [name, setname] = useState();
  const [state, setstate] = useState(); //hamburgermenu

  return (
    <Container>
      <Navbar changehamburger={(stat) => setstate(stat)} />
      <div className="homecontainer">
        <div className="sidebar">
          <Sidebar
            stat={state}
            changestate={(state) => setst(state)}
            changename={(name) => setname(name)}
          />
        </div>
        <div className="feed">
          <Feed sta={st} nam={name} />
        </div>
        <div className="rightbar">
          <Rightbar />
        </div>
      </div>
    </Container>
  );
};

export default Home;
