import { Suspense, createContext, useContext, useEffect, useMemo, useState } from 'react'

import * as THREE from 'three'
import { Scroll, ScrollControls, Html, Environment, Instances, Instance, MeshTransmissionMaterial, Lightformer, Float, Points, PointMaterial, MeshDistortMaterial, Sphere, OrbitControls, Center, Text3D, Plane, Sparkles, SpotLight, Svg, CameraControls } from '@react-three/drei'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import path from 'path'
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
import { Logo } from '../components/Logo'
import AnimatedText from '../components/AnimatedText'
import AnimatedTitle from '../components/AnimatedTitle'
import HeadMenuExtra from '../components/HeadMenuExtra'
import ExperienceCard from '../components/ExperienceCard'
import Timeline from '../components/Timeline'


export default function About () {
  const [menuOpened, setMenuOpened] = useState(false)
  const { range } = { value: 200, min: 150, max: 300, step: 10 }



  return (
    <>
        <Canvas 
          shadows 
          orthographic 
          camera={{ position: [0, 0, 100], zoom: 100 }}
          className='-z-2'
        >
            <Suspense fallback={<></>}>
          <ScrollControls pages={8} damping={0.1}>
            {/* This elements won't scroll */}            
            <Scroll>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 10]} castShadow />
              <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_workshop_foundry_1k.hdr' />
              
              <TitleText3d position={[0, 1, 0]} >
                ABOUT
              </TitleText3d>
              <Logo src={"/svg/disney.svg"} position={[-6, -2, 0]} />
              <Logo src={"/svg/swarovski.svg"} position={[-4, -2, 0]} />
              <Logo src={"/svg/zero_tenacity.svg"} position={[-2, -2, 0]} />
              <Logo src={"/svg/dignitas.svg"} position={[0, -2, 0]} />
              <Logo src={"/svg/infinity.svg"} position={[2, -2, 0]} />
              <Logo src={"/svg/ucam.svg"} position={[4, -2, 0]} />
              <Logo src={"/svg/sk_gaming.svg"} position={[6, -2, 0]} />
              <EffectComposer>
                <Bloom luminanceThreshold={1} intensity={10} levels={9} mipmapBlur />
              </EffectComposer>
            </Scroll>
            <Scroll html>
              <HeadMenuExtra />
              <section className='absolute flex flex-col top-[100vh] w-[90vw] h-[200vh] items-start mx-[5vw]'>
                <div className='w-full border-t-2 flex flex-row pt-4 pb-20'>
                    {/* <h2 className='h-full w-1/3'>ABOUT ME</h2> */}
                    <AnimatedTitle
                      text={"ABOUT ME"}
                      className={'h-full w-1/3'}
                    />
                    <div className='h-full w-2/3 lg:text-5xl pt-4'>
                      <AnimatedText
                        text={"Hello, Carlos Canut here, I love creating websites that help and people want to use."}
                      />
                      <br/>
                      <AnimatedText
                        text={"My hobbies are weightlifting and bouldering."}
                      />
                      <br/>
                      <AnimatedText
                        text={"The thing I love the most are coffee shops and travelling everytime I can."}
                      />
                    </div>
                </div>
              </section>

              <section className='absolute flex flex-col top-[175vh] w-[90vw] h-[200vh] items-start mx-[5vw] '>

                <div className='w-full border-t-2 flex flex-col pt-4 pb-20'>
                    <AnimatedTitle
                      text={"EXPERIENCE"}
                      className={'h-full w-1/3'}
                    />
                    <div className='h-full w-2/3 flex flex-row pt-4'>
                        {/* esports team list */}
                        <Timeline />
                        <ul className='w-2/3 flex flex-col gap-24 mt-12'>
                            <ExperienceCard position={"Data Analyst"} company={"SK Gaming"} duration={"1 year"} description={"Help the League of Legends team get insights from oficial matches and training. Provided data analysis on demand for understanding the League of Legends meta."} />
                            <ExperienceCard position={"Software developer & CoFounder"} company={"NexTep"} duration={"2 years"} description={"Built a SAAS product to help League of Legends teams get insights from the game. This SAAS was used by Dignitas playing in North America first league LCS & SK Gaming playing in Europe first league LEC."} />
                            <ExperienceCard position={"Data Analyst"} company={"Dignitas"} duration={"1 year"} description={"Help the League of Legends team get insights from oficial matches and training. Provided data analysis on demand for understanding the League of Legends meta."} />
                            <ExperienceCard position={"Data Analyst"} company={"INFINITY ESPORTS"} duration={"6 months"} description={"Help the League of Legends team get insights from oficial matches and training. Provided data analysis on demand for understanding the League of Legends meta."} />
                            <ExperienceCard position={"Data Analyst"} company={"UCAM ESPORTS"} duration={"1 year"} description={"Help the League of Legends team get insights from oficial matches and training. Provided data analysis on demand for understanding the League of Legends meta."} />
                            <ExperienceCard position={"Internship"} company={"AI2 Institute"} duration={"1 year"} description={"Research in Augmented Reality systems for theme parks and museums."} />
                            <ExperienceCard position={"Data Scientist"} company={"GBeasts"} duration={"9 months"} description={"Developed a website to help players get better at League of Legends. Worked on a scoring system to classify players by skill in the game League of Legends."} />
                            <ExperienceCard position={"Data Analyst"} company={"Zero Tenacity"} duration={"4 months"} description={"Help the League of Legends team get insights from oficial matches and training. Provided data analysis on demand for understanding the League of Legends meta."} />
                            <ExperienceCard position={"Sales Attendant"} company={"Disney World"} duration={"3 months"} description={"Deliver the best experience to guests of the Disney World parks and spread the magic."} />
                            <ExperienceCard position={"Sales Attendant"} company={"Swarovski"} duration={"9 months"} description={"Deliver the best experience to clients."} />

                        </ul>
                    </div>
                </div>
              </section>

              <section className='absolute flex flex-col top-[600vh] w-[90vw] h-[90vh] items-start mx-[5vw] my-[5vh] py-2'>
                <div className='w-full border-t-2 flex flex-col pt-4 pb-20'>
                    {/* <h2 className='h-full w-1/3'>SKILLSET</h2> */}
                    <AnimatedTitle
                      text={"SKILLSET"}
                      className={'h-full w-1/3'}
                    />
                    <div className='h-full w-full flex flex-col px-8 py-12 font-medium text-2xl'>
                      <div className='flex flex-row px-2 py-8 border-t-2 border-b-2 border-text gap-12'>
                        <h3>
                          <AnimatedText
                            text={"01"}
                          />
                        </h3>
                        <span>
                          <AnimatedText
                            text={"Web development"}
                          />
                          <br/>
                          <br/>
                          <AnimatedText
                            text={"I plan, design and build scalable web applications."}
                          />
                        </span>
                      </div>
                      <div className='flex flex-row px-2 py-8 border-b-2 border-text gap-12'>
                        <h3>
                          <AnimatedText
                            text={"02"}
                          />
                        </h3>
                        <span>
                          <AnimatedText
                            text={"Data Analysis"}
                          />
                          <br/>
                          <br/>
                          <AnimatedText
                            text={"With experience in analysing data towards esports in the highest level, I can analyse and extract data insights."}
                          />
                        </span>
                      </div>
                    </div>
                </div>
              </section>

              <section className='absolute flex flex-col top-[700vh] w-[90vw] h-[90vh] items-start mx-[5vw] my-[5vh]'>
                <AboutSection />
              </section>
            </Scroll>
          </ScrollControls>
            </Suspense>
        </Canvas>
    </>
  )
}
