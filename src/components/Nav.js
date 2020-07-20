import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/main.scss";

import DarkToggle from "../components/DarkToggle";

function Nav() {
  return (
    <nav className="theme">
      <ul>
        <NavLink exact to="/">
          <li className="name">Chi Fung</li>
        </NavLink>
        <div className="seperator">/</div>
        <NavLink to="/about">
          <li>about </li>
        </NavLink>
        <div className="seperator">/</div>
        <NavLink to="/photography">
          <li>photography </li>
        </NavLink>
      </ul>
      <DarkToggle />
    </nav>
  );
}
export default Nav;
