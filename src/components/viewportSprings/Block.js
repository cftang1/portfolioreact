import React from "react";
import { useSpring, animated } from "react-spring";

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
export default Block;
