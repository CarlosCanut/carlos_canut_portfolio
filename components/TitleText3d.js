import { Center, Float, Text3D, Edges } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import { useRef } from "react"



export function TitleText3d (props) {
    const { size } = useThree()
    const ref = useRef()

    const gradient = 1
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
      <group {...props}>
  
        <Center
          rotation={[0, 0, 0]}
        >
          <Float rotation={[0, 0, 0]} speed={0.5}>
            <Text3D
                receiveShadow
                castShadow
                curveSegments={32}
                bevelEnabled
                bevelSize={0.04}
                bevelThickness={0.2}
                height={0.5}
                lineHeight={0.5}
                letterSpacing={0.06}
                size={(size.width/100)/10}
                font={"/Excon_Black.json"}
            >
                {props.children} 
              <LayerMaterial ref={ref} toneMapped={false}>
              <Depth colorA="#58858D" colorB="#070B1B" alpha={1} mode="normal" near={0.5 * gradient} far={0.5} origin={[5, 0, 0]} />
              <Depth colorA="#58858D" colorB="#58858D" alpha={1} mode="add" near={2 * gradient} far={50} origin={[5, 1, 1]} />
              <Depth colorA="#070B1B" colorB="#E1E7F4" alpha={1} mode="add" near={3 * gradient} far={3} origin={[5, 1, -1]} />
              <Depth colorA="#E1E7F4" colorB="#58858D" alpha={1} mode="overlay" near={1.5 * gradient} far={1.5} origin={[5, -1, -1]} />
              <Fresnel mode="add" color="#E1E7F4" intensity={0.5} power={1.5} bias={0.05} />
            
            </LayerMaterial>
            <Edges color="#E1E7F4" />
            </Text3D>
          </Float>
        </Center>
      </group>
    )
  
  }