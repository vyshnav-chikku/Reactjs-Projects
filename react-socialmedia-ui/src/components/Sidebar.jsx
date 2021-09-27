import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilled,
  RssFeed,
  School,
  WorkOutline,
} from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sidebaritems } from "../data";
import person11 from "/home/chikku/S7/react-socialmedia-ui/src/assets/person/11.jpg";

const Container = styled.div`
  padding: 15px;
  overflow-y: scroll;
  height: 92vh;
  scroll-behavior: smooth;
  position: sticky;
  top: 70px;
  .items li {
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .iconsitems {
    margin-right: 20px;
  }
  .btnshow {
    padding: 15px 35px;
    font-size: 16px;
    margin-bottom: 20px;
    outline: none;
    border: none;
    cursor: pointer;
  }
  hr {
    margin-bottom: 20px;
  }
  .profileitems li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    list-style: none;
    cursor: pointer;
    width: 100%;
  }
  .profile li li {
    width: 100%;
  }
  .imagecontainer {
    width: 45px;
    height: 45px;
    margin-right: 20px;
  }

  .imagecontainer img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  .name {
    text-decoration: none;
    color: black;
  }
  @media screen and (max-width: 896px) {
    grid-column: 1/4;
    top: ${(props) => (props.ham ? 65 : 330)}px;
    height: ${(props) => (props.ham ? 92 : 58)}vh;

    .items li {
      margin-bottom: 10px;
      font-size: 12px;
    }
    .iconsitems {
      margin-right: 10px;
    }
    .btnshow {
      padding: 10px 25px;
      font-size: 12px;
      margin-bottom: 10px;
    }
    .profileitems li {
      margin-bottom: 10px;
    }
    .imagecontainer {
      width: 40px;
      height: 40px;
      margin-right: 15px;
    }
    .name {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 512px) {
    display: none;
  }
`;
const Sidebar = (props) => {
  const [image, setimage] = useState(person11);
  const [name, setname] = useState("Dani");

  console.log(props.stat);

  props.changestate(image);
  props.changename(name);
  return (
    <Container ham={props.stat}>
      <div className="sidebarwrapper">
        <ul className="items">
          <li>
            <div className="iconsitems">
              <RssFeed />
            </div>
            <span className="feed">Feed</span>
          </li>
          <li>
            <div className="iconsitems">
              <Chat />
            </div>
            <span className="chat">Chats</span>
          </li>
          <li>
            <div className="iconsitems">
              <PlayCircleFilled />
            </div>
            <span className="video">Videos</span>
          </li>
          <li>
            <div className="iconsitems">
              <Group />
            </div>
            <span className="group">Groups</span>
          </li>
          <li>
            <div className="iconsitems">
              <Bookmark />
            </div>
            <span className="bookmark">Bookmarks</span>
          </li>
          <li>
            <div className="iconsitems">
              <HelpOutline />
            </div>
            <span className="questions">Questions</span>
          </li>
          <li>
            <div className="iconsitems">
              <WorkOutline />
            </div>
            <span className="jobs">Jobs</span>
          </li>
          <li>
            <div className="iconsitems">
              <Event />
            </div>
            <span className="event">Events</span>
          </li>
          <li>
            <div className="iconsitems">
              <School />
            </div>
            <span className="courses">Courses</span>
          </li>
        </ul>
        <button className="btnshow">Show More</button>
        <hr />
        <ul className="profileitems">
          {sidebaritems.map((item) => (
            <li onClick={() => setname(item.nickname)}>
              <li onClick={() => setimage(item.img)}>
                <a href="/profile" className="imagecontainer">
                  <img key={item.id} src={item.img} alt="" />
                </a>
                <a href="/profile" className="name">
                  {item.name}
                </a>
              </li>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Sidebar;
