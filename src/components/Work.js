import React from "react";
import LCard from "./Work/LCard";
function MyWork() {
  return (
    <>
      <div className="mywork container" id="work">
        <h1>Work</h1>
        {/* <p>DDouble Drawing</p>
        <p>tetris</p>
        <p>Sun Dragon Loyalty Cards</p> */}
        <div className="work-grid">
          <div>
            1<br />
            <LCard />
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </>
  );
}

export default MyWork;
