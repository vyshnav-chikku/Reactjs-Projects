import React from "react";
import { Favorite, MoreVert, ThumbUpAlt } from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
const Container = styled.div`
  .postwrapper {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 1px 20px -6px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 1px 20px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 20px -6px rgba(0, 0, 0, 0.75);
    margin-bottom: 40px;
  }
  .titlecontainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .imagetitle {
    display: flex;
    align-items: center;
  }
  .image {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .name {
    margin-right: 15px;
    font-size: 20px;
  }
  .time {
    color: gray;
  }
  .postword {
    margin-bottom: 20px;
    font-size: 20px;
  }
  .postimagecontainer {
    margin-bottom: 20px;
  }
  .postimage {
    width: 100%;
  }
  .postimage img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .moreverticon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
      background: lightgray;
    }
  }

  .likecontainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .iconlikecontainer {
    display: flex;
    align-items: center;
  }
  .icons {
    display: flex;
  }
  .likecount {
    font-size: 17px;
  }
  .comments {
    background-image: linear-gradient(to right, lightgrey 50%, transparent 50%);
    background-position: 0 1.1em;
    background-repeat: repeat-x;
    background-size: 4px 3px;
    font-size: 17px;
  }
  @media screen and (max-width: 896px) {
    .postwrapper {
      padding: 10px;
      margin-bottom: 20px;
    }
    .titlecontainer {
      margin-bottom: 10px;
    }
    .image {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    .name {
      margin-right: 10px;
      font-size: 15px;
    }
    .postword {
      margin-bottom: 10px;
      font-size: 15px;
    }
    .postimagecontainer {
      margin-bottom: 10px;
    }
    .moreverticon {
      width: 30px;
      height: 30px;
    }
    .likecount {
      font-size: 14px;
    }
    .comments {
      font-size: 14px;
    }
  }
`;
const Icon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: white;
  cursor: pointer;
  :hover {
    background: white;
    color: ${(props) => props.bg};
  }
  @media screen and (max-width: 896px) {
    width: 20px;
    height: 20px;
    .icon {
      width: 80%;
    }
  }
`;
const Postwrapper = (props) => {
  const [like, setlike] = useState(props.like);

  const incrementlike = () => {
    if (like === props.like) {
      setlike(like + 1); //like++ is not working becoz like is a const variable
    }
  };
  return (
    <Container>
      <div className="postwrapper">
        <div className="titlecontainer">
          <div className="imagetitle">
            <a href="/profile" className="image">
              <img key={props.id} src={props.imgperson} alt="" />
            </a>
            <div className="name">{props.name}</div>
            <div className="time">{props.time}</div>
          </div>
          <div className="moreverticon">
            <MoreVert />
          </div>
        </div>
        <div className="postword">{props.message}</div>
        <div className="postimagecontainer">
          <div className="postimage">
            <img key={props.id} src={props.imgpost} alt="" />
          </div>
        </div>
        <div className="likecontainer">
          <div className="iconlikecontainer">
            <div className="icons">
              <Icon className="like" bg="#38acec" onClick={incrementlike}>
                <ThumbUpAlt className="icon" />
              </Icon>
              <Icon className="hearticon" bg="#E55451">
                <Favorite className="icon" />
              </Icon>
            </div>
            <div className="likecount">{like} peoples like it</div>
          </div>
          <div className="comments">{props.comments}</div>
        </div>
      </div>
    </Container>
  );
};

export default Postwrapper;
