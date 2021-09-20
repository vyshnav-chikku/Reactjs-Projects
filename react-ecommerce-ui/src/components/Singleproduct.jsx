import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 50px;

  .imagecontainer {
    width: 100%;
  }
  .detailscontainer {
    display: flex;
    flex-direction: column;
    .title {
      font-size: 50px;
      font-weight: 300;
      margin-bottom: 30px;
    }
    p {
      font-size: 25px;
      font-weight: 200;
      margin-bottom: 30px;
    }
    .money {
      display: flex;
      font-size: 65px;
      font-weight: 300;
      color: gray;
      margin-bottom: 30px;
    }
    .sizecolor {
      display: flex;
      font-size: 40px;
      font-weight: 150;
      align-items: center;
      justify-content: space-between;
      width: 50%;
      margin-bottom: 30px;
      .colorcontainer {
        display: flex;
        align-items: center;
      }
      .sizecontainer {
        display: flex;
        align-items: center;
      }
    }
    .cartdetails {
      display: flex;
      margin: 10px 0;
      align-items: center;
      .num {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      button {
        background: white;
        padding: 15px;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        outline: none;
        border: 2px solid lightblue;
        margin: 0 50px;
        :hover {
          background: rgba(0, 0, 0, 0.04);
        }
      }
    }
    @media (max-width: 1178px) {
      .title {
        font-size: 40px;
        margin-bottom: 10px;
      }
      p {
        font-size: 15px;
        margin-bottom: 10px;
      }
      .money {
        font-size: 40px;
        margin-bottom: 10px;
      }
      .sizecolor {
        font-size: 20px;
        margin-bottom: 10px;
      }
      .cartdetails {
        font-size: 10px;
        button {
          padding: 5px;
          font-size: 15px;
        }
      }
    }
  }
  @media (max-width: 1178px) {
    padding: 5px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    .detailscontainer .title {
      font-size: 20px;
    }
  }
`;
const Colors = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 5px;
  background: ${(props) => props.color};
  cursor: pointer;
  @media (max-width: 1178px) {
    width: 15px;
    height: 15px;
  }
`;

const Singleproduct = () => {
  return (
    <Container>
      <div className="imagecontainer">
        <img
          src="https://i.ibb.co/S6qMxwr/jean.jpg"
          alt="product"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div className="detailscontainer">
        <h1 className="title">Denim Jumpsuit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          consequatur cum veritatis corrupti aliquid nesciunt nihil, at ex
          ipsum? Dolore consequatur expedita eveniet aperiam saepe, dignissimos
          nobis ipsam nostrum accusamus. Exercitationem, dolores pariatur. Eius
          recusandae earum nihil, quos nulla minima.
        </p>
        <div className="money">$ 20.00</div>
        <div className="sizecolor">
          <div className="colorcontainer">
            Color <Colors color="black"></Colors>
            <Colors color="blue"></Colors>
            <Colors color="grey"></Colors>
          </div>
          <div className="sizecontainer">
            Size:
            <select
              style={{
                width: "80px",
                height: "40px",
                marginLeft: "10px",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </div>
        </div>
        <div className="cartdetails">
          <Remove style={{ cursor: "pointer" }} />
          <div
            className="num"
            style={{
              border: "2px solid lightblue",
              width: "42px",
              height: "42px",
              borderRadius: "13px",
              fontSize: "20px",
              fontWeight: "bold",
              margin: "0 10px",
            }}
          >
            1
          </div>
          <Add style={{ cursor: "pointer" }} />
          <button>ADD TO CART</button>
        </div>
      </div>
    </Container>
  );
};

export default Singleproduct;
