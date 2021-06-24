import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <i class="fad fa-album-collection"></i> Entertainment Hub🎥
    </span>
  );
};

export default Header;
