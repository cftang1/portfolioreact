import React from "react";
import { NavLink } from "react-router-dom";

import handleViewport from "react-in-viewport";

// Animation components
import Block from "./viewportSprings/Block";
import Fade from "./viewportSprings/Fade";

function About() {
  return (
    <>
      <div className="about">
        <About1 />
        <MyWork />
        <About2 />
        <ContactMe />
        {/* //placeholder */}
        {/* <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2> */}
      </div>
    </>
  );
}

const ViewportAbout1 = handleViewport(Block /** options: {}, config: {} **/);
const ViewportAbout2 = handleViewport(Block /** options: {}, config: {} **/);
const ViewportAbout3 = handleViewport(Block /** options: {}, config: {} **/);

function About1() {
  return (
    <div className="container about-1">
      <ViewportAbout1 delay={0}>
        <p>Hi, i'm Chi.</p>
      </ViewportAbout1>
      <br />
      <ViewportAbout2 delay={200}>
        <p>I am a creative web developer from the North West of England.</p>
      </ViewportAbout2>
      <br />
      <br />
      <ViewportAbout3 delay={300}>
        <p>
          I also like to do{" "}
          <NavLink to="/photography">
            <span className="ph underline-hover">photography</span>
          </NavLink>
          , graphic design and art.
        </p>
      </ViewportAbout3>
    </div>
  );
}
const style2 = {
  backgroundImage: `url(https://res.cloudinary.com/drfbjbnqj/image/upload/v1595946319/4_ixd0x1.jpg)`,
};
const grain = {
  backgroundImage: `url(https://res.cloudinary.com/drfbjbnqj/image/upload/v1595946318/noise_bekfwu.png)`,
};
const ViewportText = handleViewport(Block /** options: {}, config: {} **/);
const ViewportImage = handleViewport(Block, {
  rootMargin: "10px",
  threshold: 0.7,
});
const ViewportTicker1 = handleViewport(Fade /** options: {}, config: {} **/);
const ViewportTicker2 = handleViewport(Fade /** options: {}, config: {} **/);

function About2() {
  return (
    <>
      <div className="about-2">
        <div className="plastic" style={style2}></div>
        <div className="grain" style={grain}></div>
        <div className="about-backtext">
          <ViewportTicker1 delay={400}>
            <div className="tickerContainer">
              <div className="ticker-2">
                <div>
                  <span>peak lockdown hair</span>
                  <span>peak lockdown hair</span>
                </div>
              </div>
            </div>
          </ViewportTicker1>
          <ViewportTicker2 delay={400}>
            <div className="about-backtext-bottom">
              <div className="tickerContainer">
                <div className="ticker-2">
                  <div>
                    <span>peak lockdown hair</span>
                    <span>peak lockdown hair</span>
                  </div>
                </div>
              </div>
            </div>
          </ViewportTicker2>
        </div>
        <div className="container2 about-content">
          <ViewportImage delay={850}>
            <h5>So what have I been up to recently?</h5>
          </ViewportImage>

          <div className="grid">
            <ViewportText delay={250}>
              <p>
                Throughout lockdown I have been working at ASDA, fulfilling
                online orders as a picker until I find my dream job in Web
                Development.
              </p>
            </ViewportText>

            <div></div>
            <ViewportImage delay={250}>
              <img
                src="https://res.cloudinary.com/drfbjbnqj/image/upload/v1595947721/melckdwn_oukkgx.jpg"
                alt="monkey"
              ></img>
            </ViewportImage>
          </div>
        </div>
      </div>
      {/* <div id="ticker-1">
    <div id="div1">&nbsp;peak lockdown hair</div>
    <div id="div2">&nbsp;peak lockdown hair</div>
  </div> */}
    </>
  );
}
//work
function MyWork() {
  return (
    <>
      <div className="mywork container">
        <h1>Work</h1>
        <p>DDouble Drawing</p>
        <p>tetris</p>
        <p>Sun Dragon Loyalty Cards</p>
      </div>
    </>
  );
}

//animation + contact

const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

function ContactMe() {
  return (
    <>
      <div className="contact container">
        <div>
          <ViewportBlock delay={550}>
            <h1>Contact </h1>
          </ViewportBlock>
          <ViewportBlock delay={800}>
            <h1>Email </h1>
          </ViewportBlock>
          <ViewportBlock delay={800}>
            <p>chhi@gmail.com</p>
          </ViewportBlock>
        </div>

        <ViewportBlock delay={1000}>
          <div className="details">
            <p>Resume on request</p>
            <p>Phone number on request</p>
          </div>
        </ViewportBlock>
      </div>
    </>
  );
}

export default About;
