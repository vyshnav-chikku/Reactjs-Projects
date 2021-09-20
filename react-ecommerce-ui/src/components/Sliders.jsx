import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

/*--- Styling----*/

const SlideContainer = styled.div`
  background: ${(props) => props.bg};
  display: grid;
  grid-template-areas: "imag info";
  z-index: -5;
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  .wrapper .slidecontainer .imagecontainer {
    grid-area: imag;
    position: relative;
  }
  .wrapper .slidecontainer .imagecontainer img {
    width: 100%;
    height: 90%;
  }
  .wrapper .slidecontainer .imagecontainer .gradient {
    position: absolute;
    top: 100px;
    margin: auto;
    height: 500px;
    width: 500px;
    border-radius: 50%;
    background: red;
    z-index: -1;
    @media (max-width: 1266px) {
      top: 20px;
      width: 300px;
      height: 300px;
    }

    @media (max-width: 844px) {
      width: 200px;
      height: 200px;
    }
  }
  .wrapper .slidecontainer .infocontainer {
    grid-area: info;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .title {
    font-size: 80px;
    font-weight: bolder;
  }
  .description {
    font-size: 25px;
    font-weight: 500;
    margin: 50px 0px;
    letter-spacing: 3px;
  }
  .shopnowbtn {
    font-size: 25px;
    font-weight: 300;
    background: transparent;
    width: 180px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 844px) {
    .title {
      font-size: 30px;
    }
    .description {
      font-size: 15px;
      margin: 15px 0;
    }
    .shopnowbtn {
      font-size: 15px;
      width: 100px;
    }
  }
`;
const Wrapper = styled.div`
  height: 100%;
  width: 300vw;
  display: flex;
  transform: translateX(${(props) => props.st * -100}vw);
  transition: all 1s ease;
`;
/* props work only in styled components */
const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  @media (max-width: 568px) {
    width: 30px;
    height: 30px;
  }
`;

/* styling end---*/

const Sliders = () => {
  const [state, setstate] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setstate(state > 0 ? state - 1 : 2);
    } else {
      setstate(state < 2 ? state + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      <Wrapper className="wrapper" st={state}>
        {sliderItems.map((item) => (
          <SlideContainer className="slidecontainer" bg={item.bg} key={item.id}>
            <div className="imagecontainer">
              <div className="gradient"></div>
              <img src={item.img} alt="shop girl1" />
            </div>
            <div className="infocontainer">
              <div className="title">{item.title}</div>
              <p className="description">{item.desc}</p>
              <a
                href="/productlist"
                style={{ textDecoration: "none", color: "black" }}
              >
                <button className="shopnowbtn">
                  Shop Now
                  <ArrowRight />
                </button>
              </a>
            </div>
          </SlideContainer>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Sliders;
