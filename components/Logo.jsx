import { Center, Float, PivotControls, Svg, Text3D } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { motion } from "framer-motion-3d"



export function Logo ({src, ...props}) {
    const { size } = useThree()
    
    return (
      <group {...props}>
        <Center
          rotation={[0, 0, 0]}
        >
        {/* <Float rotation={[0, 0.2, 0]} speed={1}> */}
            <Svg
                src={src}
                receiveShadow
                castShadow
                curveSegments={32}
                bevelEnabled
                bevelSize={0.04}
                bevelThickness={0.1}
                height={0.5}
                size={(size.width/100)/8}
                scale={0.008}
            >
              <motion.meshLambertMaterial 
                attach={'material'} 
                color={'#ECF8F9'} 
                castShadow 
                receiveShadow
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
              />
            </Svg>
        {/* </Float> */}
        </Center>
      </group>
    )
  
  }