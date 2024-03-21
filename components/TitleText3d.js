import { Center, Float, Text3D } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { motion } from "framer-motion-3d"



export function TitleText3d (props) {
    const { size } = useThree()
    
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
              <motion.meshLambertMaterial 
                attach={'material'}
                color={'#ECF8F9'}
                castShadow
                receiveShadow
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
              />
            </Text3D>
          </Float>
        </Center>
      </group>
    )
  
  }