import { Suspense, createContext, useContext, useEffect, useMemo, useState } from 'react'

import * as THREE from 'three'
import { Scroll, ScrollControls, Html, Environment, Instances, Instance, MeshTransmissionMaterial, Lightformer, Float, Points, PointMaterial, MeshDistortMaterial, Sphere, OrbitControls, Center, Text3D, Plane, Sparkles, SpotLight } from '@react-three/drei'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { motion } from 'framer-motion'
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



export default function Home () {
  const [menuOpened, setMenuOpened] = useState(false)
  const { range } = { value: 200, min: 150, max: 300, step: 10 }

  return (
    <>
        <Canvas shadows orthographic  camera={{ position: [0, 0, 100], zoom: 100 }} className='-z-2'>
          <Suspense fallback={<></>}>
          <ScrollControls pages={4} damping={0.1}>
            {/* This elements won't scroll */}            
            <Scroll>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 10]} castShadow />
              <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_workshop_foundry_1k.hdr' />
              
              <Blob position={[3.5, 0, 0]} />
              <TitleText3d position={[0, -6, 0]} >
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
              <section className='absolute flex w-[90vw] h-screen justify-start items-center mx-[5vw]'>
                <h1 className='font-Spinnaker text-4xl sm:text-5xl md:text-7xl '>DATA ANALYST &<br/> WEB DEVELOPER</h1>
              </section>
              <section className='absolute flex flex-col top-[200vh] w-[100vw] h-[100vh] items-start my-[10vh]'>
                {/* <div className='flex flex-row w-full text-xl mx-[5vw]'>
                  <h3>02/</h3>
                  <h2 className='mx-auto'>RECENT PROJECTS</h2>
                </div> */}
                <div className='w-full h-[80vh] flex flex-row place-content-between'>
                  
                  {/* First card */}
                  <ul className='h-full w-[10vw] flex flex-col justify-end p-8 gap-4 text-2xl'>
                    <li className='opacity-100'>SOLEADO</li>
                    <li className='opacity-50'>NOCTURNO</li>
                    <li className='opacity-50'>SCOUTEX</li>
                  </ul>

                  {/* Second card */}
                  <div className='h-full w-[65vw] flex flex-col'>
                    <div className='flex flex-row mb-2 items-end gap-4'>
                      <h2 className='text-6xl font-extrabold'>SOLEADO</h2>
                      <h4 className='font-extralight'>INSTAGRAM</h4>
                    </div>
                    <img src='/gallery_image.png' alt='gallery image placeholder' className='w-full h-[80vh]' />
                    <div className="flex">
                      <div className="flex gap-x-10 flex-1">
                        <div>LANDING PAGE</div>
                      </div>
                      <div className="flex-initial opacity-50 font-300">
                        TRAVEL
                      </div>
                      <div className="flex-1 justify-end flex">
                        <div>01 </div>
                        <div className='opacity-50'> - 03</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Third card */}
                  <div className='h-full w-[10vw] flex flex-col'>
                    <div className='flex flex-row mb-2 items-end gap-2'>
                      <h4>NEXT</h4>
                    </div>
                    <img src='/gallery_image.png' alt='gallery image placeholder' className='w-full h-[80vh]' />
                    <div className="flex">
                      <div className="flex-1 justify-start flex">
                        <div>SOLEADO</div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              <section className='absolute flex flex-col top-[300vh] w-[90vw] h-[90vh] items-start mx-[5vw] my-[5vh] border-2 rounded-xl p-2'>
                <AboutSection />
              </section>
            </Scroll>
          </ScrollControls>
          </Suspense>
        </Canvas>
    </>
  )
}


function Blob () {
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
    <group position={[(size.width/100)/4, 0, 0]}>
      <Sphere
        castShadow
        args={[Math.max(((size.width/100)/6),1.25), 500, 500]}
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
