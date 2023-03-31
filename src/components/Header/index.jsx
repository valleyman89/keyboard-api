import React from "react";
import FontToggle from "./../FontToggle/index";
import ThemeToggle from "./../ThemeToggle/index";
import SearchField from "./../SearchField/index";

import { ReactComponent as LogoSVG } from "./logo.svg";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <LogoSVG />
      <FontToggle /> <ThemeToggle />
      <nav>
        <SearchField />
      </nav>
    </header>
  );
};

export default Header;
