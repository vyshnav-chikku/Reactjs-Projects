import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 500px;
  min-width: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* background: #ebf4fa; */
  /* background: #ebf4facc; */
  background: #ebf4fa99;
  border-radius: 5px;
  margin: 5px 0px;
  @media (max-width: 430px) {
    height: 350px;
    min-width: 230px;
  }
  :hover {
    background: rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
    .circle {
      opacity: 0.15;
    }
    .infocontainer {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .infocontainer .icon {
      width: 60px;
      height: 60px;
      display: flex;
      margin: 0 10px;
      justify-content: center;
      align-items: center;
      background: white;
      color: black;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.1s ease;
      :hover {
        transform: scale(1.1);
      }
    }
  }
  .imageproduct {
    height: 75%;
    width: 100%;
    z-index: 1;
  }
  .circle {
    position: absolute;
    width: 70%;
    height: 60%;
    background: white;
    border-radius: 50%;
  }
  .infocontainer {
    display: none;
  }
`;

const Productitem = ({ item }) => {
  return (
    <a href="/product" style={{ textDecoration: "none", color: "black" }}>
      <Container>
        <img src={item.img} className="imageproduct" alt="" />
        <div className="circle"></div>
        <div className="infocontainer">
          <a href="/cart" style={{ textDecoration: "none", color: "black" }}>
            <div className="icon cart">
              <ShoppingCartOutlined style={{ width: "55%", height: "55%" }} />
            </div>
          </a>
          <div className="icon search">
            <SearchOutlined style={{ width: "55%", height: "55%" }} />
          </div>
          <div className="icon like">
            <FavoriteBorderOutlined style={{ width: "55%", height: "55%" }} />
          </div>
        </div>
      </Container>
    </a>
  );
};

export default Productitem;
