import * as THREE from 'three'
import { Bounds, Edges, Environment, Lightformer, PointMaterial, Points, Sky, Text3D, useGLTF } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import { useControls } from 'leva'


function Cursor(props) {
  const ref = useRef()
  const { nodes } = useGLTF('/cursor.glb')

  // Animate gradient
  useFrame((state) => {
    const sin = Math.sin(state.clock.elapsedTime / 2)
    const cos = Math.cos(state.clock.elapsedTime / 2)
    ref.current.layers[0].origin.set(cos / 2, 0, 0)
    ref.current.layers[1].origin.set(cos, sin, cos)
    ref.current.layers[2].origin.set(sin, cos, sin)
    ref.current.layers[3].origin.set(cos, sin, cos)
  })

  return (
    <Text3D {...props}>
      <LayerMaterial ref={ref} toneMapped={false}>
        <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * 0.7} far={0.5} origin={[0, 0, 0]} />
        <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * 0.7} far={2} origin={[0, 1, 1]} />
        <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * 0.7} far={3} origin={[0, 1, -1]} />
        <Depth colorA="white" colorB="red" alpha={1} mode="overlay" near={1.5 * 0.7} far={1.5} origin={[1, -1, -1]} />
        <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
      </LayerMaterial>
      <Edges color="white" />
    </Text3D>
  )
}








export function Lighting () {
  return (
    <>
      {/* <Cursor scale={[0.5, 1, 0.5]} /> */}
      {/* <Text scale={[0.5, 1, 0.5]} /> */}
      <color attach="background" args={['#141622']} />
      <fog attach="fog" args={["#000000", 8, 35]} />
      <ambientLight intensity={0.5} />
    </>
  )
}

