import React from 'react';
import Link from 'next/link';
import AnimatedTitle from './AnimatedTitle';
import { motion, useSpring } from 'framer-motion';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const HeadMenuExtra = () => {
  
  return (
    <>
      <nav className='z-50 absolute w-screen h-[5dvh] top-[5dvh] right-0 left-[25dvw] justify-start hidden sm:flex'>
        <ul className='flex flex-row items-start justify-between w-[40dvw] font-ExconRegular'>
          <li>
            <div className='order-2 flex-none'>
              <AnimatedTitle
                  text='Currently open'
                  className=""
              />
              <AnimatedTitle
                  text='to work'
                  className=""
              />
            </div>
          </li>
          <li>
            <div className='order-3 flex-none' href="/">
              <AnimatedTitle
                  text='Based in'
                  className=""
              />
              <AnimatedTitle
                  text='Valencia, Spain'
                  className=""
              />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeadMenuExtra;
