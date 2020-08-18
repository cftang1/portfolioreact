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
          <div className='details-flex'>
            <ViewportBlock delay={800}>
              <p>Email: chifungtang8@gmail.com</p>
            </ViewportBlock>
            <div className='details'>
              {/* <ViewportBlock delay={1000}> */}
              <p>Resume {'&'} Phone on request</p>
              <a href='https://www.instagram.com/chisuschrist/'>
                <p>Instagram</p>
              </a>

              {/* </ViewportBlock> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
