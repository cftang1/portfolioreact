import React from "react";

import { NavLink } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";

function Menu() {
  return (
    <>
      <div className="menu-container">
        <div className="menu-items">
          <NavLink exact to="/">
            <p>home</p>
          </NavLink>
          <NavLink to="/#about">
            <p>aboutgg</p>
          </NavLink>
          <NavLink to="/#work">
            <p>work</p>
          </NavLink>
          <NavLink to="/photography">
            <p>photo</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default Menu;
