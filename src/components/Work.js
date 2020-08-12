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
          <div className="item">
            <div className="info">Sun Dragon Loyalty Cards</div>

            <LCard />
          </div>
          <div className="item">2</div>
          <div className="item">3</div>
        </div>
      </div>
    </>
  );
}

export default MyWork;
