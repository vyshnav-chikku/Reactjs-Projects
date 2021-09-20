import {
  Call,
  Email,
  EmailOutlined,
  LocationCity,
  Room,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .details {
    font-size: 20px;
    margin: 10px 0;
  }
  .address {
    display: flex;
    margin: 10px 0;
  }
  .phone {
    display: flex;
    margin: 20px 0;
  }
  .email {
    display: flex;
    margin: 20px 0;
  }
  p {
    margin: 0 10px;
  }
  @media (max-width: 1050px) {
    .details {
      font-size: 15px;
    }
  }
`;

const Footercontact = () => {
  return (
    <Container>
      <h2>Contact</h2>
      <div className="details">
        <div className="address">
          <Room />
          <p>622 Dixie Path,South Tobinchester 98336</p>
        </div>
        <div className="phone">
          <Call />
          <p>+1 234 56 78</p>
        </div>
        <div className="email">
          <EmailOutlined />
          <p>contact@lama.dev</p>
        </div>
        <div className="payment">
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Footercontact;
