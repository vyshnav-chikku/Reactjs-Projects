import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 5px;
  .imagecontainer {
    grid-column: 1/2;
    width: 100%;
    height: 100%;
    z-index: 2;
    img {
      object-fit: fill;
      width: 100%;
      height: 100%;
    }
  }
  .productdetails {
    grid-column: 2/5;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 25px;
      margin-bottom: 25px;
    }
  }

  .moneycontainer {
    grid-column: 5/6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 45px;
    .itemscount,
    .money {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
    }
  }
  .icon {
    width: 50%;
    height: 40px;
  }
  .color {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: grey;
    margin-bottom: 20px;
  }
  @media (max-width: 830px) {
    .productdetails p {
      font-size: 15px;
      margin-bottom: 10px;
    }
    .moneycontainer {
      font-size: 25px;
      .itemscount,
      .money {
        margin-bottom: 10px;
      }
    }
    .icon {
      height: 30px;
    }
    .color {
      width: 15px;
      height: 15px;
      margin-bottom: 5px;
    }
  }
  @media (max-width: 394px) {
    .productdetails p {
      font-size: 12px;
    }
    .moneycontainer {
      font-size: 25px;
      .itemscount,
      .money {
        margin-bottom: 10px;
        font-size: 20px;
      }
    }
    .icon {
      height: 20px;
    }
  }
`;

const Cartsingleitems = () => {
  return (
    <Container>
      <div className="imagecontainer">
        <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
      </div>

      <div className="productdetails">
        <p>
          <b>Product:</b>HAKURA T-SHIRT
        </p>
        <p>
          <b>ID:</b>79213708123
        </p>
        <div className="color"></div>
        <p>
          <b>Size:</b>M
        </p>
      </div>
      <div className="moneycontainer">
        <div className="itemscount">
          <Add className="icon" />
          <p>1</p>
          <Remove className="icon" />
        </div>
        <div className="money">$ 30</div>
      </div>
    </Container>
  );
};

export default Cartsingleitems;
