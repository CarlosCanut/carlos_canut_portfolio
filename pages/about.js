import { Suspense, createContext, useContext, useEffect, useMemo, useState } from 'react'

import * as THREE from 'three'
import { Scroll, ScrollControls, Html, Environment, Instances, Instance, MeshTransmissionMaterial, Lightformer, Float, Points, PointMaterial, MeshDistortMaterial, Sphere, OrbitControls, Center, Text3D, Plane, Sparkles, SpotLight } from '@react-three/drei'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { motion } from 'framer-motion'
import path from 'path'
import { promises as fs } from 'fs'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { LayerMaterial, Color, Depth, Displace, Fresnel } from 'lamina'
import { useRef } from 'react'
import { random } from 'maath'
import { a } from '@react-spring/three'

import Link from 'next/link'
// import Image from 'next/image'
import { BufferAttribute, MathUtils } from 'three'
import { SphereShaderMaterial } from '../components/Sphere'
import Image from 'next/image'
import { TitleText3d } from '../components/TitleText3d'
import { AboutSection } from '../components/AboutSection'

const LoaderContext = createContext()

function LoaderProvider ({ children }) {
  const [active, setActive] = useState(false)
  const value = useMemo(() => ({ active, setActive }), [active, setActive])
  return (
    <LoaderContext.Provider value={value}>
      {children}
    </LoaderContext.Provider>
  )
}

function Loader () {
  const { active } = useContext(LoaderContext)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setPercent(percent => (percent < 100 ? percent + 10 : 100))
    }, 200)
  })
  return active ? <Html><div className='text-6xl text-start text-white font-ExconMedium font-light'>{percent}</div></Html> : null
}

function LoaderFallback () {
  const { setActive } = useContext(LoaderContext)

  useEffect(() => {
    setActive(true)
    return () => setActive(false)
  })
  return null
}

export async function getStaticProps ({ locale }) {
  const jsonDirectory = path.join(process.cwd(), 'translations')
  const translationsRaw = await fs.readFile(jsonDirectory + `/${locale}.json`, 'utf8')
  const translations = JSON.parse(translationsRaw)

  return {
    props: {
      translations
    }
  }
}

export default function About ({ translations }) {
  const [menuOpened, setMenuOpened] = useState(false)
  const { range } = { value: 200, min: 150, max: 300, step: 10 }

  return (
    <>
      <LoaderProvider>
        <Suspense fallback={<LoaderFallback />}>
          <Canvas shadows orthographic  camera={{ position: [0, 0, 100], zoom: 100 }} className='-z-2'>
          <Loader />
          <ScrollControls pages={4} damping={0.1}>
            {/* This elements won't scroll */}            
            <Scroll>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 10]} castShadow />
              <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_workshop_foundry_1k.hdr' />
              
              <TitleText3d position={[0, 0, 0]} >
                ABOUT
              </TitleText3d>
              <EffectComposer>
                <Bloom luminanceThreshold={1} intensity={10} levels={9} mipmapBlur />
              </EffectComposer>
            </Scroll>
            <Scroll html>
              <section className='absolute flex flex-col top-[100vh] w-[90vw] h-[200vh] items-start mx-[5vw] '>
                <div className='w-full border-t-2 flex flex-row pt-4 pb-20'>
                    <h2 className='h-full w-1/3'>ABOUT ME</h2>
                    <div className='h-full w-2/3 lg:text-5xl pt-4'>
                        Hello, my name is Carlos Canut, I’m a Esports Data Analyst who loves to design and deliver beautiful websites.
                        <br/>
                        <br/>
                        My main hobbies are weightlifting and travelling.
                    </div>
                </div>

                <div className='w-full border-t-2 flex flex-row pt-4 pb-20'>
                    <h2 className='h-full w-1/3'>ESPORTS</h2>
                    <div className='h-full w-2/3 pt-4'>
                        {/* esports team list */}
                        <ul className='flex flex-col gap-24'>
                            <li className='flex flex-row'>
                                <h3 className='lg:text-5xl w-1/2'>Zero Tenacity</h3>
                                <h4 className='lg:text-lg w-1/2'>EBL Season 7 - 5º Place</h4>
                            </li>
                            <li className='flex flex-row'>
                                <h3 className='lg:text-5xl w-1/2'>UCAM Tokiers</h3>
                                <h4 className='lg:text-lg w-1/2'>Iberian Cup 2022 - 1º Place</h4>
                            </li>
                            <li className='flex flex-row'>
                                <h3 className='lg:text-5xl w-1/2'>INFINITY Esports</h3>
                                <h4 className='lg:text-lg w-1/2'>LLA 2022 Opening - 3º Place</h4>
                            </li>
                            <li className='flex flex-row'>
                                <h3 className='lg:text-5xl w-1/2'>Dignitas</h3>
                                <h4 className='lg:text-lg w-1/2'>LCS 2022 Lock In - 3º Place</h4>
                            </li>
                            <li className='flex flex-row'>
                                <h3 className='lg:text-5xl w-1/2'>SK Gaming</h3>
                                <ul className='flex flex-col lg:text-lg w-1/2'>
                                    <li>LEC 2023 Winter Season - 3º Place</li>
                                    <li>LEC 2023 Spring Season - 5º Place</li>
                                    <li>LEC 2023 Summer Season - 6º Place</li>
                                    <li>LEC 2023 Season Finals - 6º Place</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-full border-t-2 flex flex-row pt-4 pb-20'>
                    <h2 className='h-full w-1/3'>SALES EXPERIENCE</h2>
                    <div className='h-full w-2/3 pt-4'>
                        {/* esports team list */}
                        <ul className='flex flex-col gap-24'>
                            <li className='flex flex-row'>
                                <h3 className='lg:text-5xl w-full'>Disney World</h3>
                            </li>
                            <li className='flex flex-row'>
                                <h3 className='lg:text-5xl w-full'>Swarovski</h3>
                            </li>
                        </ul>
                    </div>
                </div>
              </section>

              <section className='absolute flex flex-col top-[300vh] w-[90vw] h-[90vh] items-start mx-[5vw] my-[5vh] border-2 rounded-xl p-2'>
                <AboutSection />
              </section>
            </Scroll>
          </ScrollControls>
          </Canvas>
        </Suspense>
      </LoaderProvider>
    </>
  )
}
