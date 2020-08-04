import React from "react";
import { useSpring, animated } from "react-spring";
import handleViewport from "react-in-viewport";

function About() {
  return (
    <>
      <div className="about">
        <About1 />
        <About2 />
        <ContactMe />
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
        <h2 className="fonttest">TEST test TEST</h2>
      </div>
    </>
  );
}

function About1() {
  return (
    <div className="container about-1">
      <p>Hi, i'm Chi.</p>
      <br />
      <p>
        {" "}
        I am a creative web developer from the North West of England.
        <br />
        <br /> I also like to do{" "}
        <span className="ph underline-hover">photography</span>, graphic design
        and art.
      </p>
    </div>
  );
}
const style2 = {
  backgroundImage: `url(https://res.cloudinary.com/drfbjbnqj/image/upload/v1595946319/4_ixd0x1.jpg)`,
};
const grain = {
  backgroundImage: `url(https://res.cloudinary.com/drfbjbnqj/image/upload/v1595946318/noise_bekfwu.png)`,
};

function About2() {
  return (
    <>
      <div className="about-2">
        <div className="plastic" style={style2}></div>
        <div className="grain" style={grain}></div>
        <div className="about-backtext">
          <div className="tickerContainer">
            <div className="ticker-2">
              <div>
                <span>peak lockdown hair</span>
                <span>peak lockdown hair</span>
              </div>
            </div>
          </div>

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
        </div>
        <div className="container about-content">
          <h5>So what have I been up to recently?</h5>
          <div className="grid">
            <p>
              Throughout lockdown I have been working at ASDA, fulfilling online
              orders as a picker until I find my dream job in Web Development.
            </p>
            <div></div>
            <img
              src="https://res.cloudinary.com/drfbjbnqj/image/upload/v1595947721/melckdwn_oukkgx.jpg"
              alt="monkey"
            ></img>
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

const Block = (props) => {
  const { children, inViewport, forwardedRef, delay } = props;
  const style = useSpring({
    from: {
      opacity: inViewport ? 0 : 1,
      transform: inViewport
        ? "translate3d(0, -30px, 0)"
        : "translate3d(0, 0px, 0)",
    },
    to: {
      opacity: inViewport ? 1 : 0,
      transform: inViewport
        ? "translate3d(0, 0px, 0)"
        : "translate3d(0, 30px, 0)",
    },
    delay,
    config: { mass: 10, tension: 550, friction: 140, duration: 800 },
  });
  return (
    <>
      <animated.div ref={forwardedRef} style={style}>
        {children}
      </animated.div>
    </>
  );
};

const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

function ContactMe() {
  return (
    <>
      <div className="container">
        <ViewportBlock
          onEnterViewport={() => console.log("enter")}
          onLeaveViewport={() => console.log("leave")}
          delay={250}
        >
          <p>email: </p>
          <p>resume on request</p>
          <p>phone on request</p>
        </ViewportBlock>
      </div>
    </>
  );
}

export default About;
