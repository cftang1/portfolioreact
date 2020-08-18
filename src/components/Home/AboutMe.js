import React from 'react';
import handleViewport from 'react-in-viewport';

// Animation components
import Block from '../viewportSprings/Block';
import Fade from '../viewportSprings/Fade';

const style2 = {
  backgroundImage: `url(https://res.cloudinary.com/drfbjbnqj/image/upload/v1595946319/4_ixd0x1.jpg)`,
};
const grain = {
  backgroundImage: `url(https://res.cloudinary.com/drfbjbnqj/image/upload/v1595946318/noise_bekfwu.png)`,
};

const ViewportText = handleViewport(Block /** options: {}, config: {} **/);
const ViewportImage = handleViewport(Block, {
  // rootMargin: "10px",
  threshold: 0.5,
});

const ViewportTicker1 = handleViewport(Fade /** options: {}, config: {} **/);
const ViewportTicker2 = handleViewport(Fade /** options: {}, config: {} **/);

function AboutMe() {
  return (
    <>
      <div className='about-me' id='about'>
        <div className='plastic' style={style2}></div>
        <div className='grain' style={grain}></div>
        <div className='about-backtext'>
          <ViewportTicker1 delay={400}>
            <div className='tickerContainer tctop'>
              <div className='ticker-2'>
                <div>
                  <span>peak lockdown hair</span>
                  <span>peak lockdown hair</span>
                </div>
              </div>
            </div>
          </ViewportTicker1>
          <ViewportTicker2 delay={400}>
            <div className='about-backtext-bottom'>
              <div className='tickerContainer'>
                <div className='ticker-2'>
                  <div>
                    <span>peak lockdown hair</span>
                    <span>peak lockdown hair</span>
                  </div>
                </div>
              </div>
            </div>
          </ViewportTicker2>
        </div>
        <div className='container2 about-content'>
          <ViewportImage delay={250}>
            <h1>So what have I been up to recently?</h1>
          </ViewportImage>
          <div className='grid'>
            <ViewportText delay={750}>
              <p className='secondary'>
                Throughout lockdown I have been working at ASDA, fulfilling
                online orders as a picker. On my days off, I have also been
                learning React, making this portfolio to showcase my creative
                talents and coding skills.
              </p>
            </ViewportText>
            <div></div>
            <ViewportText delay={850}>
              <img
                src='https://res.cloudinary.com/drfbjbnqj/image/upload/v1595947721/melckdwn_oukkgx.jpg'
                alt='monkey'
              ></img>
            </ViewportText>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
