import React from "react";
import FontToggle from "./../FontToggle/index";
import ThemeToggle from "./../ThemeToggle/index";
import SearchField from "./../SearchField/index";
import { ReactComponent as LogoSVG } from "./logo.svg";

import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <button>
          <LogoSVG />
        </button>
      </div>
      <div className="font-toggle">
        <FontToggle />
      </div>
      <div className="theme-toggle">
        <ThemeToggle />
      </div>
      <div className="search-field">
        <SearchField />
      </div>
    </header>
  );
};

export default Header;
