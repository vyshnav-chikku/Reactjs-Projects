import { useState } from "react";
import "./App.css";

console.log(window.innerWidth);

function App() {
  const [state, setstate] = useState(false);

  const handleClick = () => {
    if (state) {
      setstate(false);
    } else {
      setstate(true);
    }
  };

  return (
    <>
      <div className="container">
        <nav className={state ? "active" : "not-active"}>
          <ul className="menu">
            <div className="hamburger-menu" onClick={handleClick}>
              <div className="bar"></div>
            </div>
            <div className="links">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Signup</a>
                </li>
              </ul>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
