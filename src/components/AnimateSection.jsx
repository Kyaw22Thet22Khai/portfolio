import React from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const AnimateSection = ({ children, as = "div", ...rest }) => {
  const reduce = useReducedMotion();
  const MotionTag = Motion[as] || Motion.div;
  return (
    <MotionTag
      {...rest}
      variants={variants}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={reduce ? undefined : { once: true, margin: "-100px" }}
      transition={reduce ? undefined : { duration: 0.6, ease: "easeOut" }}>
      {children}
    </MotionTag>
  );
};

export default AnimateSection;
