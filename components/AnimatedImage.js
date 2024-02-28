/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const AnimatedImage = ({ image_url, onClick }) => {
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

    <motion.img 
        onClick={onClick}
        ref={ref}
        initial="hidden"
        animate={ctrls}
        variants={imageAnimation}
        whileHover={{ scale: 0.9 }} 
        transition={{ duration: 0.3 }} 
        src={image_url} 
        alt='gallery image placeholder' 
        className='w-full h-[80vh] rounded-3xl opacity-90 cursor-pointer'
    />
  );
};

export default AnimatedImage;
