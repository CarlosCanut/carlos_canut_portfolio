import { Suspense, createContext, useContext, useEffect, useMemo, useState } from 'react'

import * as THREE from 'three'
import { Scroll, ScrollControls, Html, Environment, Instances, Instance, MeshTransmissionMaterial, Lightformer, Float, Points, PointMaterial, MeshDistortMaterial, Sphere, OrbitControls, Center, Text3D, Plane, Sparkles, SpotLight } from '@react-three/drei'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { a } from '@react-spring/three'
import { TitleText3d } from '../components/TitleText3d'
import { useRouter } from 'next/router'
import { Effects } from '../components/threejs/Effects'

const AnimatedMaterial = a(MeshDistortMaterial)

export default function Test () {
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
            <color attach="background" args={['#141622']} />
            <Environment resolution={256}>
                <group rotation={[-Math.PI / 3, 0, 1]}>
                <Lightformer form="circle" intensity={100} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
                <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
                <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
                <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
                <Lightformer form="ring" color="#4060ff" intensity={80} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[10, 10, 0]} scale={10} />
                </group>
            </Environment>

            <TitleText3d position={[0, 0, 0]} color='white' roughness={0.1}>
                SOFTWARE
            </TitleText3d>
            <Effects />
            
        </Canvas>
    </>
  )
}

