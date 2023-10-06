/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import { useState, useMemo } from 'react'
import { useThree } from '@react-three/fiber'
import { useGLTF, Float } from '@react-three/drei'
import { LayerMaterial, Depth, Fresnel, Noise } from 'lamina/vanilla'

const material = new LayerMaterial({
  color: new THREE.Color('#181818').convertSRGBToLinear(),
  layers: [
    new Depth({ colorA: new THREE.Color('#181818').convertSRGBToLinear(), colorB: new THREE.Color('#181818').convertSRGBToLinear(), alpha: 0.5, mode: 'normal', near: 0, far: 2, origin: [1, 1, 1] }),
    new Depth({ colorA: '#181818', colorB: new THREE.Color('#181818').convertSRGBToLinear(), alpha: 0.5, mode: 'add', near: 3, far: 2, origin: [1, 1, 1] }),
    new Fresnel({ mode: 'add', color: new THREE.Color('#181818').convertSRGBToLinear(), intensity: 0.3, power: 2.5, bias: 0.0 }),
    new Noise({ mapping: 'local', type: 'simplex', scale: 1000, colorA: '#F2F2F2', colorB: '#181818', mode: 'overlay' })
  ]
})

function Noodle () {
  const { viewport, camera } = useThree()
  const { nodes } = useGLTF('models/worms-transformed.glb')
  const [geometry] = useState(() => nodes[`noodle_${Math.ceil(Math.random() * 4)}`].geometry)
  const [speed] = useState(() => 0.1 + Math.random() / 10)
  const position = useMemo(() => {
    const z = Math.random() * -30
    const bounds = viewport.getCurrentViewport(camera, [0, 0, z])
    return [THREE.MathUtils.randFloatSpread(bounds.width), THREE.MathUtils.randFloatSpread(bounds.height * 0.75), z]
  }, [viewport])
  return (
    <Float position={position} speed={speed} rotationIntensity={10} floatIntensity={40} dispose={null}>
      <mesh scale={5} geometry={geometry} material={material} />
    </Float>
  )
}

export default function Noodles () {
  return Array.from({ length: 25 }, (_, i) => <Noodle key={i} />)
}

useGLTF.preload('models/worm-transformed.glb')
