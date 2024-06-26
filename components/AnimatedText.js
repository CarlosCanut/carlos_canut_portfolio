/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({ text, className }) => {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <div className={className} aria-label={text} role="heading">
      {text.split(" ").map((character, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1 whitespace-no-wrap"
          ref={ref}
          aria-hidden="true"
          initial="hidden"
          animate={ctrls}
          variants={characterAnimation}
          exit="hidden"
          transition={{
            delayChildren: index * 0.25,
            staggerChildren: 0.05,
          }}

        >
          {character}
          {index < text.split(" ").length - 1 && "\u00A0"} {/* Add non-breaking space after each word except the last one */}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
