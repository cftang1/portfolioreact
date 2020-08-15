import React from 'react';
import { NavLink } from 'react-router-dom';

import handleViewport from 'react-in-viewport';

// Animation components
import Block from '../viewportSprings/Block';

const ViewportAbout1 = handleViewport(Block /** options: {}, config: {} **/);
const ViewportAbout2 = handleViewport(Block /** options: {}, config: {} **/);
const ViewportAbout3 = handleViewport(Block /** options: {}, config: {} **/);

function Hero() {
  return (
    <div className='container hero'>
      <ViewportAbout1 delay={0}>
        <p className='title'>Hi, i'm Chi.</p>
      </ViewportAbout1>
      <br />
      <ViewportAbout2 delay={200}>
        <p className='secondary'>
          I am a creative web developer from the North West of England.
        </p>
      </ViewportAbout2>
      <br />
      <ViewportAbout3 delay={300}>
        <p className='secondary'>
          I also like to do{' '}
          <NavLink to='/photography'>
            <span className='ph underline-hover'>photography</span>
          </NavLink>
          , graphic design and art.
        </p>
      </ViewportAbout3>
    </div>
  );
}

export default Hero;
