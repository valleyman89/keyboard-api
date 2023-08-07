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
        <a href="google.com">
          <LogoSVG />
        </a>
      </div>
      <div className="font-toggle">
        <FontToggle />
      </div>
      <div className="theme-toggle">
        <ThemeToggle />
      </div>
      <hgroup>
        <SearchField />
      </hgroup>
    </header>
  );
};

export default Header;
