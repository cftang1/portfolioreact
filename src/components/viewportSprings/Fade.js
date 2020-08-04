import React from "react";
import { useSpring, animated } from "react-spring";

const Fade = (props) => {
  const { children, inViewport, forwardedRef, delay } = props;
  const style = useSpring({
    from: {
      opacity: inViewport ? 0 : 1,
      transform: inViewport ? "opacity: 0" : "opacity: 1",
    },
    to: {
      opacity: inViewport ? 1 : 0,
      transform: inViewport ? "opacity: 1" : "opacity: 0",
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
export default Fade;
