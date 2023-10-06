import { Suspense, createContext, useContext, useEffect, useMemo, useState } from 'react'

import * as THREE from 'three'
import { Scroll, ScrollControls, Html, Environment, Instances, Instance, MeshTransmissionMaterial, Lightformer, Float, Points, PointMaterial, MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei'
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

// const AnimatedMaterial = a(MeshDistortMaterial)


// extend({ SphereShaderMaterial })

// const randomVector = (r) => [r / 2 - Math.random() * r, r / 2 - Math.random() * r, r / 2 - Math.random() * r]
// const randomEuler = () => [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
// const data = Array.from({ length: 100 }, (r = 30) => ({ random: Math.random(), position: randomVector(r), rotation: randomEuler() }))


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

const TwitterIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} {...props}>
    <path transform='translate(2, 4)' d="M21.634 4.031c-.815.385-2.202 1.107-2.899 1.245-.027.007-.049.016-.075.023A4.5 4.5 0 0 0 11 8.5c0 .131-.011.372 0 .5-3.218 0-5.568-1.679-7.327-3.837-.235-.29-.485-.139-.537.067-.117.466-.157 1.245-.157 1.801 0 1.401 1.095 2.777 2.8 3.63-.314.081-.66.139-1.02.139a2.97 2.97 0 0 1-1.339-.335c-.158-.083-.499-.06-.398.344.405 1.619 2.253 2.756 3.904 3.087-.375.221-1.175.176-1.543.176-.136 0-.609-.032-.915-.07-.279-.034-.708.038-.349.582.771 1.167 2.515 1.9 4.016 1.928-1.382 1.084-3.642 1.48-5.807 1.48-.438-.01-.416.489-.063.674C3.862 19.504 6.478 20 8.347 20 15.777 20 20 14.337 20 8.999l-.005-.447c0-.018.005-.035.005-.053 0-.027-.008-.053-.008-.08a18.384 18.384 0 0 0-.009-.329c.589-.425 1.491-1.163 1.947-1.728.155-.192.03-.425-.181-.352-.543.189-1.482.555-2.07.625 1.177-.779 1.759-1.457 2.259-2.21.171-.257-.043-.518-.304-.394z" />
  </svg>
)
const LinkedInIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg"  width={30} height={30} {...props}>
      <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
  </svg>
)

export default function Old_index ({ translations }) {
  const [menuOpened, setMenuOpened] = useState(false)
  const { range } = { value: 200, min: 150, max: 300, step: 10 }

  return (
    <>
      <LoaderProvider>
        <Suspense fallback={<LoaderFallback />}>
          <div className='fixed flex top-0 right-0 h-[100vh] w-[25vw] bg-[#DFDFDF] opacity-10 z-10 justify-center items-center' />
          <div className='fixed flex flex-col top-0 right-0 h-[100vh] w-[25vw] z-10 justify-center items-start p-12'>
            <div className='text-4xl text-start text-white font-Spinnaker font-light mb-8'>ABOUT</div>
            <div className='text-lg text-start text-white font-PTSansCaption font-light'>I’m Carlos Canut, web developer and data analyst.<br/><br/>I’m Currently working in <div className='inline text-[#CEFF45]'>SK Gaming</div>.<br/><br/>Formerly worked in <div className='inline text-[#CEFF45]'>Dignitas</div>, <div className='inline text-[#CEFF45]'>UCAM Esports</div>, <div className='inline text-[#CEFF45]'>Infinity Esports</div> and <div className='inline text-[#CEFF45]'>Zero Tenacity</div>.</div>
            <div className='absolute top-8 right-12'>
              <div className='flex flex-row gap-4'>
                <div className='text-[#CEFF45] flex justify-center items-center'>
                  <TwitterIcon className='fill-[#CEFF45] flex justify-center items-center' />
                </div>
                <div className='text-[#CEFF45] flex justify-center items-center'>
                  <LinkedInIcon className='fill-[#CEFF45]' />
                </div>
              </div>
            </div>
            <div className='fixed top-[10vh] left-0 w-[70vw] h-[90vh] pointer-events-none'>
              <div className='flex flex-row w-full h-full p-16 justify-start items-center'>
                <div className='flex flex-col gap-6'>
                  <div className='w-4 h-4 bg-[#DFDFDF] rounded-sm' />
                  <div className='w-8 h-1 bg-[#DFDFDF] rounded-sm opacity-60' />
                  <div className='w-8 h-1 bg-[#DFDFDF] rounded-sm opacity-60' />
                  <div className='w-8 h-1 bg-[#DFDFDF] rounded-sm opacity-60' />
                </div>
                <div className='ml-12 text-9xl font-Spinnaker rotate-90'>
                  ABOUT
                </div>
              </div>
            </div>
          </div>
          <Canvas shadows  camera={{ position: [0, 0, 16], fov: 35, near: 1, far: 150 }} className='-z-2'>

          <Loader />
              {/* <color attach='background' args={['#1D1D1D']} /> */}
              {/* <Stars /> */}
              {/* <Environment frames={Infinity} resolution={256}> */}
              <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_workshop_foundry_1k.hdr' />
              <group position={[0, 0, 0]}>
                {/* <mesh castShadow receiveShadow position={[0, 0, 5]}>
                  <sphereBufferGeometry args={[1, 32, 32]} />
                  <AnimatedMaterial color='#303030' envMapIntensity={0.4} clearcoat={0.04} clearcoatRoughness={0} metalness={0.1} />
                </mesh> */}
                {/* <mesh castShadow position={[0, 0, 10]}>
                  <sphereGeometry args={[0.5, 64, 64]} />
                  <MeshTransmissionMaterial resolution={768} thickness={0.3} anisotropy={1} chromaticAberration={0.1} />
                </mesh> */}
              </group>
              <Blob position={[0, 0, 10]} />
              {/* <group position={[0, 0, -5]}>
                <Balls data={data} range={range} />
              </group> */}
              <EffectComposer>
                <Bloom luminanceThreshold={1} intensity={10} levels={9} mipmapBlur />
              </EffectComposer>
          </Canvas>
        </Suspense>
      </LoaderProvider>
    </>
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
          displaceRef.current.offset.x += 0.3 * dt;
      }
  });
  
  return (
    <group {...props}>
      <Sphere
        castShadow
        args={[0.6, 128, 128]}
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
            colorA={'#DFDFDF'}
            colorB={'#DFDFDF'}
          />
          <Displace ref={displaceRef} strength={0} scale={5} offset={[0.09189000000357626, 0, 0]} />
          <Fresnel
            color={'#DFDFDF'}
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


function MovingSpots ({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef()
  useFrame((state, delta) => (group.current.position.z += delta * 15) > 60 && (group.current.position.z = -60))
  return (
    <group rotation={[0, 0.5, 0]}>
      <group ref={group}>
        {positions.map((x, i) => (
          <Lightformer key={i} form='circle' intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
        ))}
      </group>
    </group>
  )
}

function Balls ({ data, range }) {
  return (
    <Instances range={range}>
      <sphereBufferGeometry args={[0.8, 32, 32]} />
      {/* <AnimatedMaterial color='#181818' envMapIntensity={0.4} clearcoat={0.04} clearcoatRoughness={0} metalness={0.1} /> */}
      <MeshTransmissionMaterial thickness={1.5} ior={1.2} anisotropy={0.1} chromaticAberration={0.04} refractPower={0.3} transparent={0.5} />
      <group position={[0, 0, 0]}>
        {data.map((props, i) => (
          <Ball key={i} {...props} />
        ))}
      </group>
    </Instances>
  )
}

function Ball ({ random, color = new THREE.Color(), ...props }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime() + random * 10000
    ref.current.rotation.set(Math.cos(t / 4) / 2, Math.sin(t / 4) / 2, Math.cos(t / 1.5) / 2)
    ref.current.position.y = Math.sin(t / 1.5) / 2
  })
  return (
    <group {...props}>
      <Instance ref={ref} />
    </group>
  )
}

function Stars (props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(1000), { radius: 10 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 100
    ref.current.rotation.y -= delta / 150
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color='#ffa0e0' size={0.05} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  )
}
