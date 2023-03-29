import React from "react";
import FontToggle from "./../FontToggle/index";
import ThemeToggle from "./../ThemeToggle/index";
import SearchField from "./../SearchField/index";

import { ReactComponent as LogoSVG } from "./logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <LogoSVG />
        <FontToggle /> <ThemeToggle />
      </div>
      <div>
        <SearchField />
      </div>
    </>
  );
};

export default Header;
