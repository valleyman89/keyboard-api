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
        <LogoSVG />
      </div>
      <div className="font-toggle">
        <FontToggle />
      </div>
      <div className="theme-toggle">
        <ThemeToggle />
      </div>
      <nav>
        <SearchField />
      </nav>
    </header>
  );
};

export default Header;
