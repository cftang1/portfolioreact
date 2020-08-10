import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Burger() {
  const [clicked, setClicked] = useState({ status: false });

  const handleMenu = () => {
    setClicked((prevState) => ({ ...prevState, status: !clicked.status }));
    const button = document.querySelector(".menu-btn");
    button.classList.toggle("close");
    const menu = document.querySelector(".menu-container");
    menu.classList.toggle("close");
  };
  return (
    <>
      <div className="menu-btn burger-menu" onClick={handleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menu-container">
        <div className="menu-items">
          <ul>
            <ScrollToTop />

            <NavLink exact to="/" onClick={handleMenu}>
              <li className="underline-hover">Home</li>
            </NavLink>
            <NavLink to="/#about" onClick={handleMenu}>
              <li className="underline-hover">About</li>
            </NavLink>
            <NavLink to="/#work" onClick={handleMenu}>
              <li className="underline-hover">Work</li>
            </NavLink>
            <NavLink to="/photography" onClick={handleMenu}>
              <li className="underline-hover">Photo</li>
            </NavLink>
            {/* </ScrollToTop> */}
            <NavLink to="/#contact" onClick={handleMenu}>
              <li className="underline-hover">Contact</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export default Burger;
