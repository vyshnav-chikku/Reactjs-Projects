import styled from "styled-components";
import profiledani from "/home/chikku/S7/react-socialmedia-ui/src/assets/post/backgrounddani.jpg";
import profiledani2 from "/home/chikku/S7/react-socialmedia-ui/src/assets/post/11.jpg";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .backgroundimagecontainer {
    width: 100%;
    height: 320px;
    margin-bottom: 100px;
  }
  .backgroundimagecontainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .username {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .profileimagecontainer {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border: 5px solid white;
    border-radius: 50%;
  }
  .profileimagecontainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  @media screen and (max-width: 466px) {
    .backgroundimagecontainer {
      height: 220px;
      margin-bottom: 50px;
    }
    .username {
      font-size: 20px;
    }
    .profileimagecontainer {
      width: 120px;
      height: 120px;
      top: 65%;
    }
  }
`;

const Profileuser = () => {
  return (
    <Container>
      <div className="backgroundimagecontainer">
        <img src={profiledani} alt="" />
      </div>
      <div className="username">Danearys Targaryen</div>
      <p>Helo my friends</p>
      <div className="profileimagecontainer">
        <img src={profiledani2} alt="" />
      </div>
    </Container>
  );
};

export default Profileuser;
