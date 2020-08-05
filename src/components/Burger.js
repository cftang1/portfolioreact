import React, { useState } from "react";

function Burger() {
  const [clicked, setClicked] = useState({ status: false });

  const handleMenu = () => {
    setClicked((prevState) => ({ ...prevState, status: !clicked.status }));
    const button = document.querySelector(".menu-btn");
    button.classList.toggle("close");
  };
  return (
    <>
      <div className="menu-btn burger-menu" onClick={handleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
export default Burger;
