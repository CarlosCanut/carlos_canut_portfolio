/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const AnimatedImages = () => {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const imageAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (

    <motion.div 
        className="w-full h-full"
        ref={ref}
        initial="hidden"
        exit="hidden"
        animate={ctrls}
        variants={imageAnimation}
    >
        <Image
            src={'/images/enso.png'}
            alt='enso landing page'
            width={700}
            height={300}
            className="translate-x-96 rounded-xl drop-shadow-xl"
        />
        <Image
            src={'/images/scoutex.png'}
            alt='enso landing page'
            width={700}
            height={300}
            className="-translate-y-64 rounded-xl drop-shadow-xl"
        />
    </motion.div>
  );
};

export default AnimatedImages;
