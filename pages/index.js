import { Suspense, createContext, useContext, useEffect, useMemo, useState } from 'react'

import * as THREE from 'three'
import { Scroll, ScrollControls, Html, Environment, Instances, Instance, MeshTransmissionMaterial, Lightformer, Float, Points, PointMaterial, MeshDistortMaterial, Sphere, OrbitControls, Center, Text3D, Plane, Sparkles, SpotLight } from '@react-three/drei'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { motion, useScroll, useSpring } from 'framer-motion'
import path from 'path'
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
import AnimatedTitle from '../components/AnimatedTitle'
import { useRouter } from 'next/router'
import { ProjectCard } from '../components/ProjectCard'
import HeadMenuExtra from '../components/HeadMenuExtra'
import AnimatedText from '../components/AnimatedText'
import { Lighting } from '../components/threejs/Lighting'


const AnimatedMaterial = a(MeshDistortMaterial)

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

export default function Home ({ translations }) {
  const router = useRouter()
  
  const [menuOpened, setMenuOpened] = useState(false)
  const { range } = { value: 200, min: 150, max: 300, step: 10 }


  const scrollProgressY = useScroll()
  const scaleX = useSpring(scrollProgressY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
        <Canvas shadows orthographic  camera={{ position: [0, 0, 100], zoom: 100 }} className='-z-2'>
          <Suspense fallback={<></>}>
          <ScrollControls pages={6} damping={0.1}>
            {/* This elements won't scroll */}            
            <Scroll>
              <Lighting />
              <TitleText3d position={[0, -7, 0]}>
                {translations.section_projects_title}
              </TitleText3d>
            </Scroll>
            <Scroll html>
              <HeadMenuExtra />
              <section className='absolute flex flex-row w-[90dvw] h-screen justify-center items-center mx-[5dvw] gap-8'>
                <motion.div className='fixed top-0 left-0 right-0 h-2 bg-text [transform-origin: 0%]' style={{ scaleX }} />
                {/* <h1 className='font-ExconBold text-4xl sm:text-5xl md:text-9xl self-start font-bold'>SOFTWARE</h1> */}
                <motion.div
                  className='flex flex-col w-[65dvw] h-full mt-[100dvh] items-start justify-start font-ExconBold text-4xl sm:text-8xl md:text-8xl'
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
                >
                  <AnimatedTitle
                    text="SOFTWARE"
                    className="font-ExconBold self-start font-bold bg-gradient-to-r from-text via-secondary to-accent bg-clip-text text-transparent"
                    mainTitle={true}
                  />
                  <AnimatedTitle
                    text="DEVELOPER"
                    className="font-ExconBold self-end font-bold"
                  />
                </motion.div>
                <motion.div 
                  className='flex flex-col w-[25dvw] h-full mt-[100dvh] items-start justify-start text-2xl font-ExconMedium sm:text-2xl md:text-2xl'
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
                >
                  <motion.h3 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }} 
                    className="font-ExconMedium self-start cursor-pointer hover:underline hover:underline-offset-2"
                    onClick={() => window.open('https://www.linkedin.com/in/carlos-m%C2%AA-canut-dom%C3%ADnguez-06b322181/', '_blank')}
                  >
                    LinkedIn
                  </motion.h3>

                  <motion.h3 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }} 
                    className="font-ExconMedium self-start cursor-pointer hover:underline hover:underline-offset-2"
                    onClick={() => window.open('https://github.com/CarlosCanut', '_blank')}
                  >
                    Github
                  </motion.h3>
                  <motion.h3 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }} 
                    className="font-ExconMedium self-start cursor-pointer hover:underline hover:underline-offset-2"
                    onClick={() => window.open('https://read.cv/carloscanut', '_blank')}
                  >
                    Read.cv
                  </motion.h3>
                  <motion.h3 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }} 
                    className="font-ExconMedium self-start cursor-pointer hover:underline hover:underline-offset-2"
                    onClick={() => window.open('carloscanutdominguez@gmail.com', '_blank')}
                  >
                    Email
                  </motion.h3>
                </motion.div>
              </section>

              <section className='absolute flex flex-col top-[200dvh] w-[100dvw] h-[100dvh] items-center hover:ease-in'>
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }} 
                  className='w-full h-[80dvh] flex flex-row justify-start ml-[10dvw]'
                >
                  <ProjectCard title={'ENSO'} onClick={() => router.push('/projects/enso')} image_url={'/images/enso/enso.png'} github_link={'https://github.com/CarlosCanut'} />                  
                </motion.div>
              </section>

              <section className='absolute flex flex-col top-[300dvh] w-[100dvw] h-[100dvh] items-center'>
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }} 
                  className='w-full h-[80dvh] flex flex-row justify-end mr-[10dvw]'
                >
                  <ProjectCard title={'SCOUTEX'} onClick={() => router.push('/projects/scoutex')} image_url={'/images/scoutex/scoutex.png'} github_link={''} />
                </motion.div>
              </section>

              <section className='absolute flex flex-col top-[400dvh] w-[100dvw] h-[100dvh] items-center'>
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }} 
                  className='w-full h-[80dvh] flex flex-row justify-start ml-[10dvw]'
                >
                  <ProjectCard title={'LOLPICKS'} onClick={() => router.push('/projects/lolpicks')} image_url={'/images/lolpicks.png'} github_link={'https://github.com/CarlosCanut'} />
                </motion.div>
              </section>

              <section className='absolute flex flex-col top-[500dvh] w-[90dvw] h-[90dvh] items-start justify-start mx-[5dvw] my-[5dvh]'>
                <AboutSection />
              </section>
            </Scroll>
          </ScrollControls>
          </Suspense>
        </Canvas>
    </>
  )
}


function Blob ({ x = 4, y = 0, ...props }) {
  const { size } = useThree()
  var ref = useRef(null);
  var rand = useMemo(function () { return Math.random(); }, []);
  var strength = useRef(0);
  var displaceRef = useRef(null);
  useFrame(function (_a, dt) {
      var clock = _a.clock;
      // ref.current.position.y = Math.sin(clock.elapsedTime + rand * 100) * 0.1 - 0.2;
      if (displaceRef.current.strength !== strength.current) {
          displaceRef.current.strength = MathUtils.lerp(displaceRef.current.strength, //
          strength.current, 0.1);
      }
      if (strength.current > 0) {
          displaceRef.current.offset.x += 0.5 * dt;
      }
  });
  
  return (
    <group position={[(size.width/100)/x, y, 0]}>
      <Sphere
        castShadow={false}
        args={[Math.max(((size.width/100)/12),1.25), 500, 500]}
        onPointerEnter={() => (strength.current = 0.2)}
        onPointerLeave={() => (strength.current = 0)}
        onPointerDown={() => (strength.current = 0.2)}
        onPointerMissed={() => (strength.current = 0)}
        ref={ref}
      >
        <LayerMaterial
          color={"#ffffff"}
          lighting={'physical'}
          tramsmision={1}
          roughness={1}
          thickness={2}
        >
          <Depth
            near={0.4854}
            far={0.7661999999999932}
            origin={[-0.4920000000000004, 0.4250000000000003, 0]}
            colorA={'#58858D'}
            colorB={'#58858D'}
          />
          <Displace ref={displaceRef} strength={0} scale={5} offset={[0.09189000000357626, 0, 0]} />
          <Fresnel
            color={'#58858D'}
            bias={-0.3430000000000002}
            intensity={3.8999999999999946}
            power={3.3699999999999903}
            factor={1.119999999999999}
            mode={'screen'}
          />

        </LayerMaterial>
      </Sphere>
    </group>
  )
}

function Ball () {
  const { size } = useThree()
  var ref = useRef(null);
  var rand = useMemo(function () { return Math.random(); }, []);
  var strength = useRef(0);
  var displaceRef = useRef(null);

  return (
    <group position={[(size.width/100)/4, 0, 0]}>
      <sphereBufferGeometry 
        args={[Math.max(((size.width/100)/6),1.25), 500, 500]}
        castShadow={false} 
      />
      <AnimatedMaterial color='#181818' envMapIntensity={0.4} clearcoat={0.04} clearcoatRoughness={0} metalness={0.1} />
    </group>
  )
}