import React from 'react';
import Link from 'next/link';

const HeadMenu = () => {
  return (
    <nav className='z-50 absolute flex w-screen h-[5vh] top-[5vh] right-0 left-0 justify-center'>
      <ul className='flex flex-row items-start justify-between w-[90vw]'>
        <li>
          <Link className='order-1' href="/">Carlos Canut</Link>
        </li>
        {/* <li>
          <Link className='order-2 flex-none fixed' href="/">Currently Working<br/> at SK Gaming</Link>
        </li>
        <li>
          <Link className='order-3 flex-none fixed' href="/">Based in<br/> Valencia, Spain</Link>
        </li> */}
        <li>
          <Link className='order-4' href="/about">About Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeadMenu;
