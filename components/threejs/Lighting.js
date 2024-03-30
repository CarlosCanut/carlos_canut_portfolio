import * as THREE from 'three'
import { Bounds, Edges, Environment, Lightformer, PointMaterial, Points, Sky, Text3D, useGLTF } from '@react-three/drei'
import { Bloom, EffectComposer, N8AO } from '@react-three/postprocessing'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import { useControls } from 'leva'


export function Lighting () {
  return (
    <>
      <color attach="background" args={['#0B0A0B']} />
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 0]} angle={0.45} penumbra={1} intensity={10} castShadow />
      <spotLight position={[-10, -10, -10]} angle={-0.45} penumbra={1} intensity={10} castShadow />

      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
    </>
  )
}

