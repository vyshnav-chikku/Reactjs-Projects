import styled from "styled-components";
import Post from "./Post";
import Share from "./Share";

const Container = styled.div``;

const Feed = (props) => {
  return (
    <Container>
      <div className="share">
        <Share sta={props.sta} name={props.nam} />
      </div>
      <div className="posts">
        <Post />
      </div>
    </Container>
  );
};

export default Feed;
