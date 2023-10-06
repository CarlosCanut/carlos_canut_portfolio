import '../styles/globals.css'
import Head from 'next/head'
import Image from 'next/image'

import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layout'
// import Layout from '../components/layout'

function MyApp ({ Component, pageProps, router }) {
  return (
    <>
      <Layout>
        <AnimatePresence mode='wait' initial={false}>
          <Component
            {...pageProps}
            key={router.asPath}
          />
        </AnimatePresence>
      </Layout>
    </>
  )
}

export default MyApp
