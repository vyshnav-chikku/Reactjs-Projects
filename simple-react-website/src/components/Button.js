import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Styles = ["btn--primary", "btn--outline", "btn--test"];
const Sizes = ["btn--large", "btn--medium"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = Styles.includes(buttonStyle)
    ? buttonStyle
    : Styles[0];

  const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[1];
  return (
    <Link to="/signup" className="btn-link">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
