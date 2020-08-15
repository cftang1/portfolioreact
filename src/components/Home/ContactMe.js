import React from 'react';

import handleViewport from 'react-in-viewport';

// Animation components
import Block from '../viewportSprings/Block';

const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

function ContactMe() {
  return (
    <>
      <div className='contact container' id='contact'>
        <div>
          <ViewportBlock delay={550}>
            <h1>Contact </h1>
          </ViewportBlock>
          <ViewportBlock delay={800}>
            <p>chifungtang8@gmail.com</p>
          </ViewportBlock>
        </div>
        <div className='details'>
          <ViewportBlock delay={1000}>
            <p>Resume on request</p>
            <p>Phone number on request</p>
          </ViewportBlock>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
