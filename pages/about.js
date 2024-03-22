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
import { promises as fs } from 'fs'

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
import { LogoContainer } from '../components/threejs/logoContainer'


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
        <Canvas 
          shadows 
          orthographic 
          camera={{ position: [0, 0, 100], zoom: 100 }}
          className='-z-2'
        >
            <Suspense fallback={<></>}>
          <ScrollControls pages={7} damping={0.1}>
            {/* This elements won't scroll */}            
            <Scroll>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 10]} castShadow />
              <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_workshop_foundry_1k.hdr' />
              
              <TitleText3d position={[0, 1, 0]} >
                {translations.section_about_title}
              </TitleText3d>
              <LogoContainer>
                <Logo src={""} />
                <Logo src={"/svg/disney.svg"} />
                <Logo src={"/svg/swarovski.svg"} />
                <Logo src={"/svg/zero_tenacity.svg"} />
                <Logo src={"/svg/dignitas.svg"} />
                <Logo src={"/svg/infinity.svg"} />
                <Logo src={"/svg/ucam.svg"} />
                <Logo src={"/svg/sk_gaming.svg"} />
                <Logo src={""} />
              </LogoContainer>
              <EffectComposer>
                <Bloom luminanceThreshold={1} intensity={10} levels={9} mipmapBlur />
              </EffectComposer>
            </Scroll>
            <Scroll html>
              <HeadMenuExtra translations={translations} />
              <section className='absolute flex flex-col top-[100dvh] w-[90dvw] h-[200dvh] items-start mx-[5dvw]'>
                <div className='w-full border-t-2 flex flex-col sm:flex-row pt-4 pb-20'>
                    {/* <h2 className='h-full w-1/3'>ABOUT ME</h2> */}
                    <AnimatedTitle
                      text={translations.about_title}
                      className={'h-full w-1/3 font-ExconMedium'}
                    />
                    <div className='h-full w-full sm:w-2/3 text-2xl md:text-4xl xl:text-5xl pt-4 px-2 sm:px-0'>
                      <AnimatedText
                        text={translations.about_me_description_1}
                      />
                      <br/>
                      <AnimatedText
                        text={translations.about_me_description_2}
                      />
                      <br/>
                      <AnimatedText
                        text={translations.about_me_description_3}
                      />
                    </div>
                </div>
              </section>

              <section className='absolute flex flex-col top-[175dvh] w-[90dvw] h-[150dvh] items-start mx-[5dvw] '>

                <div className='w-full border-t-2 flex flex-col pt-4 pb-20'>
                    <AnimatedTitle
                      text={translations.experience_title}
                      className={'h-full w-1/3 font-ExconMedium'}
                    />
                    <div className='h-full w-full flex flex-row items-start pt-4'>
                        {/* esports team list */}
                        <Timeline />
                        <ul className='w-10/12 flex flex-col gap-12 sm:gap-24 mt-12'>
                        {translations.experience.map((item, index) => {
                          return (
                            <ExperienceCard key={index} position={item.role} company={item.company} duration={item.duration} description={item.description} />
                          )
                        })}
                            {/* <ExperienceCard position={"Data Analyst"} company={"SK Gaming"} duration={"1 year"} description={"League of Legends data analysis reports on demand and match scoutings."} />
                            <ExperienceCard position={"Software developer & CoFounder"} company={"NexTep"} duration={"2 years"} description={"Built a SAAS product to help League of Legends teams get insights from the game."} />
                            <ExperienceCard position={"Data Analyst"} company={"Dignitas"} duration={"1 year"} description={"League of Legends data analysis reports on demand and match scoutings."} />
                            <ExperienceCard position={"Data Analyst"} company={"INFINITY ESPORTS"} duration={"6 months"} description={"League of Legends data analysis reports on demand and match scoutings."} />
                            <ExperienceCard position={"Data Analyst"} company={"UCAM ESPORTS"} duration={"1 year"} description={"League of Legends data analysis reports on demand and match scoutings."} />
                            <ExperienceCard position={"Internship"} company={"AI2 Institute"} duration={"1 year"} description={"Research in Augmented Reality systems for theme parks and museums."} />
                            <ExperienceCard position={"Data Scientist"} company={"GBeasts"} duration={"9 months"} description={"Helped develop a website based on a scoring model for League of Legends."} />
                            <ExperienceCard position={"Data Analyst"} company={"Zero Tenacity"} duration={"4 months"} description={"League of Legends data analysis reports on demand and match scoutings."} />
                            <ExperienceCard position={"Sales Attendant"} company={"Disney World"} duration={"3 months"} description={"Deliver the best experience to guests of the Disney World parks and spread the magic."} />
                            <ExperienceCard position={"Sales Attendant"} company={"Swarovski"} duration={"9 months"} description={"Deliver the best experience to clients."} /> */}

                        </ul>
                    </div>
                </div>
              </section>

              <section className='absolute flex flex-col top-[500dvh] w-[90dvw] h-[90dvh] items-start mx-[5dvw] my-[5dvh] py-2'>
                <div className='w-full border-t-2 flex flex-col pt-4 pb-20 font-ExconMedium'>
                    {/* <h2 className='h-full w-1/3'>SKILLSET</h2> */}
                    <AnimatedTitle
                      text={translations.skillset_title}
                      className={'h-full w-1/3'}
                    />
                    <div className='h-full w-full flex flex-col px-2 sm:px-8 py-12 font-medium text-md sm:text-2xl'>
                    {translations.skillset.map((item, index) => {
                      return (
                        <div className='flex flex-row px-2 py-8 border-t-2 border-b-2 border-text gap-12'>
                          <h3>
                            <AnimatedText
                              text={"0" + (index + 1)}
                            />
                          </h3>
                          <span>
                            <AnimatedText
                              text={item.title}
                            />
                            <br/>
                            <br/>
                            <AnimatedText
                              text={item.description}
                            />
                          </span>
                        </div>
                      )
                    })}
                      
                      {/* <div className='flex flex-row px-2 py-8 border-t-2 border-b-2 border-text gap-12'>
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
                      </div> */}
                    </div>
                </div>
              </section>

              <section className='absolute flex flex-col top-[600dvh] w-[90dvw] h-[90dvh] items-start mx-[5dvw] my-[5dvh]'>
                <AboutSection translations={translations} />
              </section>
            </Scroll>
          </ScrollControls>
            </Suspense>
        </Canvas>
    </>
  )
}
