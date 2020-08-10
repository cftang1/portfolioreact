import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/main.scss";

import DarkToggle from "../components/DarkToggle";
import Burger from "./Burger";

function Nav() {
  return (
    <>
      <nav className="theme" id="home">
        <ul>
          <NavLink exact to="/">
            <li className="name underline-hover">Chi Fung</li>
          </NavLink>
        </ul>
        <Burger />
        <DarkToggle />
      </nav>
    </>
  );
}
export default Nav;
