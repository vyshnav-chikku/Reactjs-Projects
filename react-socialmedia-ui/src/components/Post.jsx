import styled from "styled-components";
import person12 from "/home/chikku/S7/react-socialmedia-ui/src/assets/person/12.jpg";
import post12 from "/home/chikku/S7/react-socialmedia-ui/src/assets/post/12.jpg";
import { Postitems } from "../data";
import { useEffect, useState } from "react";
import Postwrapper from "./Postwrapper";

const Container = styled.div``;

const Post = () => {
  const [Post, setPost] = useState(Postitems); //we need to store the array in new array to change the value
  return (
    <Container>
      {Post.map((item) => (
        <Postwrapper
          id={item.id}
          imgperson={item.imgperson}
          imgpost={item.imgpost}
          name={item.name}
          like={item.like}
          comments={item.comments}
          time={item.time}
          message={item.message}
        />
      ))}
    </Container>
  );
};

export default Post;
