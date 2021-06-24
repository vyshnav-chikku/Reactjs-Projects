import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const [menu, setmenu] = useState(false);
  const [button, setbutton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setbutton(false);
    } else {
      setbutton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const handleClick = () => setmenu(!menu);

  const closeMobilemenu = () => setmenu(false);

  const navstyle = {
    color: "white",
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          className="navbar-logo"
          style={navstyle}
          to="/"
          onClick={closeMobilemenu}
        >
          <h2>
            Cнιĸĸυ <i class="fas fa-feather-alt"></i>
          </h2>
        </Link>
        <div className="menu-icon">
          <h2>
            <i
              className={menu ? "fa fa-times" : "fa fa-bars"}
              onClick={handleClick}
            />
          </h2>
        </div>
        <ul className={menu ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link className="nav-links" to="/" onClick={closeMobilemenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-links"
              to="/services"
              onClick={closeMobilemenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-links"
              to="/products"
              onClick={closeMobilemenu}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className="nav-links-mobile"
              to="/signup"
              onClick={closeMobilemenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">Sign up</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
