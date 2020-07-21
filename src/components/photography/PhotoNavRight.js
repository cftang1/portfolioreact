import React from "react";
import Up from "../../svg/arrow-up.svg";
import GetPageTitle from "./GetPageTitle";
// Button to navigate to next photo album

function PhotoNavRight(props) {
  return (
    <>
      <div className="photo-nav forward">
        <img src={Up} alt="arrow-right" />
        <h2>
          <GetPageTitle id={props.id} />
        </h2>
        <img src={Up} alt="arrow-right" />
      </div>
    </>
  );
}
export default PhotoNavRight;
