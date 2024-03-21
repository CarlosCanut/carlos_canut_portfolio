import React from 'react';
import Link from 'next/link';
import AnimatedTitle from './AnimatedTitle';
import { motion, useSpring } from 'framer-motion';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const HeadMenu = () => {
  
  return (
    <>
      <nav className='z-50 absolute flex w-screen h-[5vh] top-[5vh] right-0 left-0 justify-center'>
        <ul className='flex flex-row items-start justify-between w-[90vw] font-ExconRegular'>
          <li>
            <Link className='order-1' href="/">
              <AnimatedTitle
                  text="Carlos Canut"
                  className=""
              />
            </Link>
          </li>
          <li>
            {/* <div className='order-2 flex-none'>
              <AnimatedTitle
                  text='Currently open'
                  className=""
              />
              <AnimatedTitle
                  text='to work'
                  className=""
              />
            </div> */}
          </li>
          <li>
            {/* <div className='order-3 flex-none' href="/">
              <AnimatedTitle
                  text='Based in'
                  className=""
              />
              <AnimatedTitle
                  text='Valencia, Spain'
                  className=""
              />
            </div> */}
          </li>
          <li>
            <Link className='order-4 font-bold' href="/about">
              <AnimatedTitle
                  text='About Me'
                  className=""
              />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeadMenu;
