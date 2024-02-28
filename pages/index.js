import { Suspense, createContext, useContext, useEffect, useMemo, useState } from 'react'

import * as THREE from 'three'
import { Scroll, ScrollControls, Html, Environment, Instances, Instance, MeshTransmissionMaterial, Lightformer, Float, Points, PointMaterial, MeshDistortMaterial, Sphere, OrbitControls, Center, Text3D, Plane, Sparkles, SpotLight } from '@react-three/drei'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { motion, useScroll, useSpring } from 'framer-motion'
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
import AnimatedTitle from '../components/AnimatedTitle'
import { useRouter } from 'next/router'
import { ProjectCard } from '../components/ProjectCard'
import HeadMenuExtra from '../components/HeadMenuExtra'


const AnimatedMaterial = a(MeshDistortMaterial)

export default function Home () {
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
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 10]} castShadow />
              <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_workshop_foundry_1k.hdr' />
              
              {/* <Blob x={4} y={1.5} />
              <Blob x={-4} y={-1.5} /> */}
              {/* <Ball /> */}
              <TitleText3d position={[0.4, -7, 0]} >
                PROJECTS
              </TitleText3d>
              {/* <TitleText3d position={[0, -24, 0]} >
                EXPERIENCE
              </TitleText3d> */}
              <EffectComposer>
                <Bloom luminanceThreshold={1} intensity={10} levels={9} mipmapBlur />
              </EffectComposer>
            </Scroll>
            <Scroll html>
              <HeadMenuExtra />
              <section className='absolute flex flex-col w-[90vw] h-screen justify-center items-center mx-[5vw]'>
                <motion.div className='fixed top-0 left-0 right-0 h-2 bg-text [transform-origin: 0%]' style={{ scaleX }} />
                {/* <h1 className='font-ExconBold text-4xl sm:text-5xl md:text-9xl self-start font-bold'>SOFTWARE</h1> */}
                <motion.div
                  className='flex flex-col w-full h-full items-center justify-center'
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
                >
                  <AnimatedTitle
                    text="SOFTWARE"
                    className="font-ExconBold text-4xl sm:text-9xl md:text-9xl self-start font-bold bg-gradient-to-r from-text via-secondary to-accent bg-clip-text text-transparent"
                  />
                  {/* <h1 className='font-ExconBold text-4xl sm:text-5xl md:text-9xl self-end font-bold'>DEVELOPER</h1> */}
                  <AnimatedTitle
                    text="DEVELOPER"
                    className="font-ExconBold text-4xl sm:text-9xl md:text-9xl self-end font-bold"
                  />
                </motion.div>
              </section>

              <section className='absolute flex flex-col top-[200vh] w-[100vw] h-[100vh] items-center hover:ease-in'>
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }} 
                  className='w-full h-[80vh] flex flex-row justify-start ml-[10vw]'
                >
                  <ProjectCard title={'ENSO'} onClick={() => router.push('/projects/enso')} image_url={'/images/enso.png'} />                  
                </motion.div>
              </section>

              <section className='absolute flex flex-col top-[300vh] w-[100vw] h-[100vh] items-center'>
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }} 
                  className='w-full h-[80vh] flex flex-row justify-end mr-[10vw]'
                >
                  <ProjectCard title={'SCOUTEX'} onClick={() => router.push('/projects/scoutex')} image_url={'/images/scoutex.png'} />
                </motion.div>
              </section>

              <section className='absolute flex flex-col top-[400vh] w-[100vw] h-[100vh] items-center'>
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }} 
                  className='w-full h-[80vh] flex flex-row justify-start ml-[10vw]'
                >
                  <ProjectCard title={'LOLPICKS'} onClick={() => router.push('/projects/lolpicks')} image_url={'/images/lolpicks.png'} />
                </motion.div>
              </section>

              <section className='absolute flex flex-col top-[500vh] w-[90vw] h-[90vh] items-start mx-[5vw] my-[5vh] p-2'>
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