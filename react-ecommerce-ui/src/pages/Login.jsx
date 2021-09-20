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
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: fill;
  padding: 10px;
  .loginContainer {
    width: 500px;
    display: grid;
    grid-template-areas:
      "signin"
      "username"
      "password"
      "button"
      "p1"
      "p2";
    background: #fff;
    padding: 20px;
    .title {
      grid-area: signin;
      font-size: 50px;
      font-weight: 200;
      margin-bottom: 20px;
    }
    input {
      width: 90%;
      padding: 10px;
      height: 40px;
      margin-bottom: 20px;
      font-size: 20px;
    }
    button {
      grid-area: button;
      width: 100px;
      height: 40px;
      background: #008080;
      color: white;
      cursor: pointer;
      margin-bottom: 20px;
      outline: none;
      border: none;
    }
    .username {
      grid-area: username;
    }
    .password {
      grid-area: password;
    }
    a {
      font-size: 16px;
      text-transform: uppercase;
      text-decoration: underline;
      cursor: pointer;
      margin-bottom: 10px;
      letter-spacing: 1px;
    }
    .p1 {
      grid-area: p1;
    }
    .p2 {
      grid-area: p2;
    }
  }
`;

const Login = () => {
  return (
    <Container>
      <div className="loginContainer">
        <h1 className="title">SIGN IN</h1>
        <input className="username" type="text" placeholder="username" />
        <input className="password" type="text" placeholder="password" />
        <a href="/" style={{ textDecoration: "none" }}>
          <button className="button">LOGIN</button>
        </a>
        <a className="p1">Donot remember the password?</a>
        <a className="p2">Create new account</a>
      </div>
    </Container>
  );
};

export default Login;
