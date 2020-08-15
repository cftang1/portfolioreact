import React, { useState } from "react";

function DarkToggle() {
  const [clicked, setClicked] = useState({ status: false });

  const handleDarkMode = () => {
    setClicked((prevState) => ({ ...prevState, status: !clicked.status }));

    //get element to update
    const button = document.querySelector(".addDarkMode");
    const theme = document.querySelector(".body");
    //add dark class
    button.classList.toggle("dark");
    theme.classList.toggle("theme--dark");
    theme.classList.toggle("theme--default");
  };

  return (
    <>
      <button
        className="addDarkMode"
        type="button"
        onClick={handleDarkMode}
      ></button>
    </>
  );
}
export default DarkToggle;
