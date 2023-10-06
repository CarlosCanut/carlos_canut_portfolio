import { Suspense, createContext, useContext, useEffect, useMemo, useState } from 'react'

import * as THREE from 'three'
import { Scroll, ScrollControls, Html, Environment, Instances, Instance, MeshTransmissionMaterial, Lightformer, Float, Points, PointMaterial, MeshDistortMaterial, Sphere, OrbitControls, Center, Text3D, Plane, Sparkles, SpotLight, View, Preload, OrthographicCamera } from '@react-three/drei'
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
import useRefs from 'react-use-refs'

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

export default function ProjectsTitle ({ translations }) {
  const [menuOpened, setMenuOpened] = useState(false)
  const { range } = { value: 200, min: 150, max: 300, step: 10 }

  const [containerRef, ref1, ref2] = useRefs()

  return (
    <>
        <div ref={containerRef} className='w-[100vw] h-[300vh] relative'>
            <div className='absolute w-[100vw] h-[100vh] top-0 left-0'>
                <div className='w-[100vw] h-[100vh] bg-primary' />
                <div ref={ref1} className='w-[100vw] h-[100vh] bg-background' />
                <div ref={ref2} className='w-[100vw] h-[100vh]' />
            </div>
            <Canvas eventSource={containerRef} className='fixed top-0 left-0 w-[100vw] h-[100vh] -z-2'>
                {/* <LoaderProvider> */}
                    <Suspense fallback={<></>}>
                        {/* <Loader /> */}
                        <View track={ref1}>
                            <Common />
                            <TitleText3d position={[0, 0, 0]}>
                                PROJECTS
                            </TitleText3d>
                        </View>
                        <View track={ref2}>
                            <Common />
                             <Blob position={[3.5, 0, 0]} /> {/* position={[3.5, 0, 0]} */}
                        </View>
                        <Preload all />
                    </Suspense>
                {/* </LoaderProvider> */}
            </Canvas>
        </div>
    </>
  )
}

const Common = () => (
    <>
        <OrthographicCamera makeDefault shadows zoom={100} position={[0, 0, 100]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} castShadow />
        <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_workshop_foundry_1k.hdr' />

        <EffectComposer>
            <Bloom luminanceThreshold={1} intensity={10} levels={9} mipmapBlur />
        </EffectComposer>
    </>
)

function TitleText3d (props) {
  
  return (
    <group {...props}>

      <Center
        rotation={[0, -0.25, 0]}
      >
        <Float rotation={[0, 0.2, 0]} speed={2}>
          <Text3D
              receiveShadow
              castShadow
              curveSegments={32}
              bevelEnabled
              bevelSize={0.04}
              bevelThickness={0.1}
              height={0.5}
              lineHeight={0.5}
              letterSpacing={-0.06}
              size={1.5}
              font={"/sharpie.json"}
          >
              {props.children}
            <meshLambertMaterial attach={'material'} color={'#E1E7F4'} castShadow receiveShadow />
          </Text3D>
        </Float>
      </Center>
    </group>
  )

}

function Blob (props) {
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
    <group {...props}>
      <Sphere
        castShadow
        args={[1.5, 500, 500]}
        onPointerEnter={() => (strength.current = 0.2)}
        onPointerLeave={() => (strength.current = 0)}
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
