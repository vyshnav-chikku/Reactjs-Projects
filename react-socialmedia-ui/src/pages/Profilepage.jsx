import { useState } from "react";
import styled from "styled-components";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import Profileuser from "../components/Profileuser";
import Sidebar from "../components/Sidebar";
import Userfriends from "../components/Userfriends";

const Container = styled.div`
  .profilecontainer {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 20px;
  }
  .notincludesidebar {
    grid-column: 3/10;
    display: flex;
    flex-direction: column;
  }

  .feedandprofile {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    padding: 10px;
  }
  .feed {
    grid-column: 1/8;
  }
  .userinfo {
    grid-column: 8/12;
  }
  .sidebar {
    grid-column: 1/3;
  }
  @media screen and (max-width: 896px) {
    .feed {
      grid-column: 1/12;
    }
    .userinfo {
      grid-column: 1/12;
      grid-row: 1/2;
    }
  }
  @media screen and (max-width: 896px) {
    .sidebar {
      display: none;
    }
    .notincludesidebar {
      grid-column: 1/10;
    }
  }
`;
const Profilepage = () => {
  const [state1, setstate1] = useState();
  const [state2, setstate2] = useState();
  const [name, setname] = useState();
  return (
    <Container>
      <Navbar changehamburger={(sta) => setstate1(sta)} />
      <div className="profilecontainer">
        <div className="sidebar">
          <Sidebar
            stat={state2}
            changestate={(state) => setstate2(state)}
            changename={(name) => setname(name)}
          />
        </div>
        <div className="notincludesidebar">
          <Profileuser />
          <div className="feedandprofile">
            <div className="feed">
              <Feed />
            </div>
            <div className="userinfo">
              <Userfriends />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profilepage;
