import React from "react";
import LCard from "./LCard";
function MyWork() {
  return (
    <>
      <div className="mywork container" id="work">
        <h1>Work</h1>
        {/* <p>DDouble Drawing</p>
        <p>tetris</p>
        <p>Sun Dragon Loyalty Cards</p> */}
        <div className="work-grid">
          <div className="item 1">
            <h2 className="info">Sun Dragon Loyalty Cards</h2>
            <LCard />
          </div>
          <div className="desc">
            <p>
              My parent's restaurant needed loyalty cards for a new takeaway
              item which quickly gained popularity. I created the design using
              InDesign and got them printed by a local printing company. The
              cards were succesful in keeping customer retention.
            </p>
          </div>
          <div className="item">
            <h2>Tetris Clone</h2>
            <a href="https://keen-bhaskara-31058f.netlify.app/">
              <img
                src="https://res.cloudinary.com/drfbjbnqj/image/upload/v1597260402/blockscreenshot_pjzz60.png"
                alt="blocks"
              ></img>
            </a>
            <p>Teaching myself the fundamentals of javascript</p>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyWork;
