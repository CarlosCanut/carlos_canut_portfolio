import { Center, Float, Text3D, Edges, MeshTransmissionMaterial } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import { useRef } from "react"



export function TitleText3d ({ position, rotate=true, scale_divider=10 ,children }) {
    const { size } = useThree()
    // const ref = useRef()

    // const gradient = 1
    // // Animate gradient
    // useFrame((state) => {
    //   const sin = Math.sin(state.clock.elapsedTime / 2)
    //   const cos = Math.cos(state.clock.elapsedTime / 2)
    //   ref.current.layers[0].origin.set(cos / 2, 0, 0)
    //   ref.current.layers[1].origin.set(cos, sin, cos)
    //   ref.current.layers[2].origin.set(sin, cos, sin)
    //   ref.current.layers[3].origin.set(cos, sin, cos)
    // })

    var rotation = 0
    if (size.width < 660 & rotate) {
      rotation = Math.PI / 2
    }
    
    return (
      <group position={position}>
  
        <Center
          rotation={[0, 0, rotation]}
        >
          <pointLight intensity={4} distance={2.5} color={"#ECF8F9"} />
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
                size={(size.width/100)/scale_divider}
                font={"/Excon_Black.json"}
            >
                {children}
              {/* <motion.meshLambertMaterial 
                attach={'material'}
                color={'#ECF8F9'}
                castShadow
                receiveShadow
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
              /> */}
              {/* <MeshTransmissionMaterial color={'#ECF8F9'} clearcoat={1} thickness={0.1} anisotropicBlur={0.1} chromaticAberration={0.1} samples={8} resolution={512} /> */}
              <meshStandardMaterial color={'#ECF8F9'} metalness={0.2} />
            </Text3D>
          </Float>
        </Center>
      </group>
    )
  
  }