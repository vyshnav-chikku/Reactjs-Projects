import { useEffect, useState } from "react";
import "./App.css";
console.log(window.innerWidth);
console.log(window.innerHeight);

function App() {
  // const hamburgermenu = document.querySelector(".hamburger_menu");
  // const container = document.querySelector(".container");

  const [state, setstate] = useState(false);
  const [i, seti] = useState("0.05s");

  // function activated() {
  //   container.target.classList.toggle("active");
  // }

  // hamburgermenu.addEventListener("click", () => {
  //   container.target.classList.toggle("active");
  // });

  // let i = ["0.05s", "0.1s", "0.15s", "0.2s", "0.25s"];

  useEffect(() => {
    if (state) {
      setstate(false);
    } else {
      setstate(true);
    }
  }, state);

  return (
    <>
      <div className={state ? "container" : "container active"}>
        <div className="navbar">
          <div className="menu">
            <h3 className="logo">
              Brand<span>Name</span>
            </h3>
            <div
              onClick={() => (state ? setstate(false) : setstate(true))}
              className="hamburger_menu"
            >
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div className="main_container">
          <div className="main">
            <header>
              <div className="overlay">
                <div className="inner">
                  <h2 className="title">CHIKKU IS HERE</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Fuga, doloremque nihil? Amet, nulla!
                  </p>
                  <a className="btn" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </header>
          </div>
          <div className="shadow one"></div>
          <div className="shadow two"></div>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#" className="i">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="j">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="k">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="l">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#" className="m">
                About
              </a>
            </li>
            <li>
              <a href="#" className="n">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
