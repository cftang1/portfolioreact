import React, { useState } from 'react';
import LCard from './LCard';

function MyWork() {
  return (
    <>
      <div className='mywork container' id='work'>
        <h1>Work</h1>
        {/* <p>DDouble Drawing</p>
        <p>tetris</p>
        <p>Sun Dragon Loyalty Cards</p> */}
        <div className='work-container'>
          <div className='item 1'>
            <h2 className='info'>Sun Dragon Loyalty Cards</h2>
            <LCard />
          </div>
          <div className='desc'>
            <p>
              My parent's restaurant needed loyalty cards for a new takeaway
              item which quickly gained popularity. I created the design using
              InDesign and got them printed with a local printing company. In
              combination with a great product, the cards were succesful in
              keeping customer retention.
            </p>
          </div>
        </div>
        <div className='work-container-alt'>
          <WorkToggle name={'DDouble E Interactive Drawing'}>
            <div className='work-grid'>
              <div className='text-area'>
                <p className='text'>
                  An interactive p5js sketch of a drawing I drew.
                </p>
                <div className='buttons'>
                  <a href='https://www.instagram.com/p/B81aGxZBRnW/?utm_source=ig_web_copy_link'>
                    <p>Instagram Post</p>
                  </a>
                </div>
              </div>
              <div>
                <img
                  src='https://res.cloudinary.com/drfbjbnqj/image/upload/v1597758157/ddouble_p2udgp.jpg'
                  alt='ddouble drawing'
                ></img>
              </div>
            </div>
          </WorkToggle>
        </div>
        <div className='work-container-alt'>
          <WorkToggle name={'Tetris Clone'}>
            <div className='work-grid'>
              <div className='text-area'>
                <p className='text'>
                  Teaching myself the fundamentals of javascript, I remade my
                  favourite game using html5.
                </p>
                <div className='buttons'>
                  <a href='https://keen-bhaskara-31058f.netlify.app/'>
                    <p>Live</p>
                  </a>
                  <a href='https://github.com/cftang1/block-game'>
                    <p>Github</p>
                  </a>
                </div>
              </div>
              <div>
                <a
                  className='img'
                  href='https://keen-bhaskara-31058f.netlify.app/'
                >
                  <img
                    src='https://res.cloudinary.com/drfbjbnqj/image/upload/v1597260402/blockscreenshot_pjzz60.png'
                    alt='blocks'
                  ></img>
                </a>
              </div>
            </div>
          </WorkToggle>
          <div className='line'></div>
        </div>
      </div>
    </>
  );
}

function WorkToggle(props) {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      <button
        className='work-button'
        onClick={() => setVisibility(!visibility)}
      >
        <h2>{props.name}</h2>
      </button>
      <div style={{ display: visibility ? 'block' : 'none' }}>
        {props.children}
      </div>
    </>
  );
}
export default MyWork;
