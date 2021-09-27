import styled from "styled-components";
import gift from "/home/chikku/S7/react-socialmedia-ui/src/assets/gift.png";
import ad from "/home/chikku/S7/react-socialmedia-ui/src/assets/post/adgot.jpg";
import { sidebaritems } from "../data";

const Container = styled.div`
  padding: 10px;
  .titlecontainer {
    display: flex;
    align-items: center;
    margin: 16px 0 25px 0;
  }
  .imagecontainer {
    width: 55px;
    height: 55px;
    margin-right: 10px;
  }
  .imagecontainer img {
    width: 100%;
    height: 100%;
  }
  .title {
    font-size: 18px;
  }
  .title span {
    font-weight: bolder;
  }
  .adcontainer {
    width: 95%;
    margin: 20px 0;
  }
  .adcontainer img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  .text {
    font-size: 20px;
    font-weight: 500;
    margin: 40px 0 10px 0;
  }
  .friendscontainer {
    list-style: none;
    font-size: 18px;
    font-weight: 500;
  }
  .friends {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    cursor: pointer;
    text-decoration: none;
    color: black;
  }

  .friendsimagecontainer {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    position: relative;
    z-index: -1;
  }
  .friendsimagecontainer img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  .friendsimagecontainer .green {
    position: absolute;
    width: 18px;
    height: 18px;
    border: 2px solid white;
    border-radius: 50%;
    background: #41a317;
    top: 0px;
    right: 0px;
  }
  @media screen and (max-width: 896px) {
    display: none;
  }
`;

const Rightbar = () => {
  return (
    <Container>
      <div className="titlecontainer">
        <div className="imagecontainer">
          <img src={gift} alt="" />
        </div>
        <div className="title">
          <span>Daario Naharis</span> and <span>3 other friends</span> have a
          birthday today
        </div>
      </div>
      <div className="adcontainer">
        <img src={ad} alt="" />
      </div>
      <div className="onlinefriendscontainer">
        <div className="text">Online Friends</div>
        <div className="friendscontainer">
          {sidebaritems.map((item) => (
            <li>
              <a className="friends" href="/profile">
                <div className="friendsimagecontainer">
                  <img key={item.id} src={item.img} alt="" />
                  <div className="green"></div>
                </div>
                <span className="name">{item.name}</span>
              </a>
            </li>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Rightbar;
