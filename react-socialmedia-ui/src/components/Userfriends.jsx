import styled from "styled-components";
import freind1 from "/home/chikku/S7/react-socialmedia-ui/src/assets/person/20.jpg";
import freind2 from "/home/chikku/S7/react-socialmedia-ui/src/assets/person/12.jpg";
import freind3 from "/home/chikku/S7/react-socialmedia-ui/src/assets/person/16.jpg";
import freind4 from "/home/chikku/S7/react-socialmedia-ui/src/assets/person/13.jpg";
import freind5 from "/home/chikku/S7/react-socialmedia-ui/src/assets/person/19.jpg";
import freind6 from "/home/chikku/S7/react-socialmedia-ui/src/assets/person/17.jpg";

const Container = styled.div`
  padding: 20px;
  .infocontainer ul {
    list-style: none;
  }
  .infocontainer {
    margin-bottom: 30px;
  }
  .infocontainer ul li {
    margin-bottom: 10px;
  }
  .infotext {
    color: grey;
  }
  .infotext span {
    font-weight: bold;
  }
  .infotitle {
    font-size: 20px;
    font-weight: bold;
  }
  .friendtitle {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .friendsimagecontainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .imagecontainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .singleimagecontainer {
    width: 120px;
    height: 120px;
    margin-bottom: 5px;
  }
  .singleimagecontainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .name {
    font-size: 20px;
  }
  @media screen and (max-width: 1100px) {
    .singleimagecontainer {
      width: 90px;
      height: 90px;
    }
  }
`;

const Userfriends = () => {
  return (
    <Container>
      <div className="infocontainer">
        <ul>
          <li className="infotitle">User Information</li>
          <li className="infotext">
            <span>City</span>: New York
          </li>
          <li className="infotext">
            <span>From</span>: Madrid
          </li>
          <li className="infotext">
            <span>Relationship</span>: Single
          </li>
        </ul>
      </div>
      <div className="friendscontainer">
        <div className="friendtitle">User friends</div>
        <div className="friendsimagecontainer">
          <div className="imagecontainer">
            <div className="singleimagecontainer">
              <img src={freind1} alt="" />
            </div>
            <div className="name">Khal Drogo</div>
          </div>
          <div className="imagecontainer">
            <div className="singleimagecontainer">
              <img src={freind2} alt="" />
            </div>
            <div className="name">Jon Snow</div>
          </div>
          <div className="imagecontainer">
            <div className="singleimagecontainer">
              <img src={freind3} alt="" />
            </div>
            <div className="name">Half Man</div>
          </div>
          <div className="imagecontainer">
            <div className="singleimagecontainer">
              <img src={freind4} alt="" />
            </div>
            <div className="name">Dragon</div>
          </div>
          <div className="imagecontainer">
            <div className="singleimagecontainer">
              <img src={freind5} alt="" />
            </div>
            <div className="name">Ygritte</div>
          </div>
          <div className="imagecontainer">
            <div className="singleimagecontainer">
              <img src={freind6} alt="" />
            </div>
            <div className="name">Kingslayer</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Userfriends;
