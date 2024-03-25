import React from 'react';
import Head from 'next/head';
import HeadMenu from './HeadMenu';
import AnimatedTitle from './AnimatedTitle';

const Layout = ({ children }) => {
  return (
    <div className='w-screen h-screen bg-background text-text'>
      <Head>
        <title>Carlos Canut</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300&family=Spinnaker&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300&family=PT+Sans+Caption&family=Spinnaker&display=swap" rel="stylesheet" />
      </Head>
      <main className='w-screen h-screen'>
        {children}
      </main>
      <footer>
        {/* Add your footer content here */}
      </footer>
    </div>
  );
};

export default Layout;
