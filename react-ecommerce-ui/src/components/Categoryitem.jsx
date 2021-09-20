import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 75vh;
  .category-image {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .info {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .info h1 {
    font-weight: bolder;
    color: #fff;
    font-size: 50px;
    margin: 10px 0;
  }
  .info button {
    padding: 15px;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    margin: 10px 0;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    color: gray;
  }
  @media (max-width: 1484px) {
    .info h1 {
      font-size: 35px;
    }
    .info button {
      font-size: 10px;
    }
  }
  @media (max-width: 414px) {
    .category-image {
    }
  }
`;

const Categoryitem = ({ item }) => {
  return (
    <Container>
      <img className="category-image" src={item.img} alt="" />
      <div className="info">
        <h1>{item.title}</h1>
        <a
          href="/productlist"
          style={{ textDecoration: "none", color: "black" }}
        >
          <button>SHOP NOW</button>
        </a>
      </div>
    </Container>
  );
};

export default Categoryitem;
