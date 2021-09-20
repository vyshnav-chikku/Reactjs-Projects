import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  margin-right: 20px;
  .ordercontainer {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid gray;
    height: 100%;
    width: 100%;
  }
  .title {
    font-size: 50px;
    margin-bottom: 40px;
    font-weight: 200;
  }
  .subtotal {
    display: flex;
    justify-content: space-between;
  }
  .shipping {
    display: flex;
    justify-content: space-between;
  }
  .discount {
    display: flex;
    justify-content: space-between;
  }
  p {
    font-size: 25px;
    margin-bottom: 35px;
  }
  .money {
    font-size: 25px;
    margin-right: 20px;
  }
  .total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  .button {
    font-size: 20px;
    padding: 8px;
    background: black;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  @media (max-width: 1400px) {
    .title {
      font-size: 30px;
    }
    p {
      font-size: 20px;
    }
    .money {
      font-size: 20px;
    }
    .total {
      font-size: 15px;
    }
    .button {
      font-size: 15px;
    }
  }
  @media (max-width: 992px) {
    margin-right: 0;
  }
`;

const Cartorder = () => {
  return (
    <Container>
      <div className="ordercontainer">
        <div className="title">ORDER SUMMARY</div>
        <div className="subtotal">
          <p>Subtotal</p>
          <div className="money">$ 80.0</div>
        </div>
        <div className="shipping">
          <p>Estimated Shipping</p>
          <div className="money">$ 5.90</div>
        </div>
        <div className="discount">
          <p>Shipping Discount</p>
          <div className="money">-$ 5.90</div>
        </div>
        <div className="total">
          <h1>Total</h1>
          <h1>$ 80.0</h1>
        </div>
        <a href="/" type="button" className="button">
          CHECKOUT NOW
        </a>
      </div>
    </Container>
  );
};

export default Cartorder;
