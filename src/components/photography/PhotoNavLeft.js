import React from "react";
import Up from "../../svg/arrow-up.svg";
import GetPageTitle from "./GetPageTitle";

// Button to navigate to previous photo album

function PhotoNavLeft(props) {
  return (
    <>
      <div className="photo-nav back">
        <img src={Up} alt="arrow-left" />
        <h2>
          <GetPageTitle id={props.id} />
        </h2>
        <img src={Up} alt="arrow-left" />
      </div>
    </>
  );
}
export default PhotoNavLeft;
