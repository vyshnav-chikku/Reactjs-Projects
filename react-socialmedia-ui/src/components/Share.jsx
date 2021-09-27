import {
  EmojiEmotions,
  Label,
  LocationOn,
  PhotoLibrary,
} from "@material-ui/icons";
import styled from "styled-components";
import person11 from "/home/chikku/S7/react-socialmedia-ui/src/assets/person/11.jpg";

const Container = styled.div`
  box-shadow: 0px 1px 20px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 1px 20px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 20px -6px rgba(0, 0, 0, 0.75);
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 40px;
  .imagethings {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .image {
    width: 70px;
    height: 70px;
    margin-right: 20px;
  }
  .image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  .question {
    font-size: 18px;
    color: gray;
  }
  hr {
    margin: 0 25px 15px 25px;
  }
  .sharethings {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 25px 25px 25px;
  }
  .share {
    display: flex;
  }
  .shareicon {
    display: flex;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
  }

  .icon {
    width: 100%;
    height: 100%;
  }
  .item {
    font-size: 18px;
  }
  .btnshare {
    font-size: 18px;
    padding: 10px;
    background: green;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
  @media screen and (max-width: 1386px) {
    padding: 5px;
    .image {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    .question {
      font-size: 15px;
    }
    hr {
      margin: 0 10px 10px 10px;
    }
    .sharethings {
      margin: 0 10px 15px 10px;
    }
    .item {
      font-size: 11px;
    }
    .btnshare {
      font-size: 15px;
      padding: 8px;
    }
    .shareicon {
      margin-right: 5px;
    }
  }
  @media screen and (max-width: 390px) {
    .item {
      display: none;
    }
  }
`;
const Icons = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 2px;
  color: ${(props) => props.bg};
  @media screen and (max-width: 1386px) {
    width: 18px;
    height: 18px;
  }
  @media screen and (max-width: 390px) {
    width: 22px;
    height: 22px;
    margin-right: 10px;
  }
`;
const Share = (props) => {
  return (
    <Container>
      <div className="imagethings">
        <a href="/profile" className="image">
          <img src={person11} alt="" />
        </a>
        <div className="question">What`s in your mind Dani?</div>
      </div>
      <hr />
      <div className="sharethings">
        <div className="share">
          <div className="shareicon">
            <Icons className="icons icon1" bg="#FF6347">
              <PhotoLibrary className="icon" />
            </Icons>
            <div className="item">Photo or Video</div>
          </div>
          <div className="shareicon">
            <Icons className="icons icon2" bg="#2916F5">
              <Label className="icon" />
            </Icons>
            <div className="item">Tag</div>
          </div>
          <div className="shareicon">
            <Icons className="icons icon3" bg="#2916F5">
              <LocationOn className="icon" />
            </Icons>
            <div className="item">Location</div>
          </div>
          <div className="shareicon">
            <Icons className="icons icon4" bg="#F6BE00">
              <EmojiEmotions className="icon" />
            </Icons>
            <div className="item">Feelings</div>
          </div>
        </div>
        <a href="/login" className="btnshare">
          Share
        </a>
      </div>
    </Container>
  );
};

export default Share;
