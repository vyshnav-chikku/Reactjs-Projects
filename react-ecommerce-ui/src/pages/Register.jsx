import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: fill;
  padding: 30px;

  .registerContainer {
    background: white;
    display: grid;
    grid-template-areas:
      "title"
      "input"
      "agreement"
      "button";
    width: 800px;
    padding: 20px;
    .title {
      grid-area: title;
      font-size: 40px;
      font-weight: 200;
    }
    .inputs {
      grid-area: input;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      input {
        width: 350px;
        margin: 10px 0px;
        padding: 10px;
        font-size: 20px;
      }
    }

    .agreement {
      grid-area: agreement;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .button {
      grid-area: button;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 50px;
      padding: 18px;
      font-size: 18px;
      background: #008080;
      cursor: pointer;
      outline: none;
      border: none;
      color: #fff;
      transition: all 0.15s ease-in;
      :hover {
        background: #43bfc7;
        color: black;
      }
    }
  }
  @media (max-width: 508px) {
    .registerContainer {
      transform: scale(0.8);
      .title {
        font-size: 20px;
      }
    }
  }
  @media (max-width: 320px) {
    .registerContainer {
      transform: scale(0.7);
    }
  }
`;

const Register = () => {
  return (
    <Container>
      <div className="registerContainer">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <div className="inputs">
          <input type="text" placeholder="FirstName" />
          <input type="text" placeholder="LastName" />
          <input type="text" placeholder="Userame" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
        </div>
        <p className="agreement">
          By creating an account,I consent to the processing of my personal data
          in accordance with the{" "}
          <span style={{ fontWeight: "bold" }}>Privacy Policy</span>
        </p>
        <a href="/" style={{ textDecoration: "none" }}>
          <button className="button">CREATE</button>
        </a>
      </div>
    </Container>
  );
};

export default Register;
