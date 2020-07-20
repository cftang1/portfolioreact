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
    theme.classList.toggle("dark");
  };

  return (
    <>
      <button className="addDarkMode" type="button" onClick={handleDarkMode}>
        {/* Switch to {clicked.status ? "Light mode" : "Dark mode"} */}
      </button>
    </>
  );
}
export default DarkToggle;
