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
      {/* <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} castShadow />
      <Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_workshop_foundry_1k.hdr' /> */}

      <color attach="background" args={['#070B1B']} />
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 0]} angle={0.45} penumbra={1} intensity={10} castShadow />
      <spotLight position={[-10, -10, -10]} angle={-0.45} penumbra={1} intensity={10} castShadow />

      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      {/* <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
          <Lightformer form="circle" intensity={4} rotation-y={-Math.PI / 2} position={[0, 0, 10]} scale={12} />
        </group>
      </Environment> */}
      {/* <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={10} levels={9} mipmapBlur />
      </EffectComposer> */}
    </>
  )
}

