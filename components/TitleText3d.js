import { Center, Float, Text3D } from "@react-three/drei"
import { useThree } from "@react-three/fiber"



export function TitleText3d (props) {
    const { size } = useThree()
    
    return (
      <group {...props}>
  
        <Center
          rotation={[0, -0.25, 0]}
        >
          <Float rotation={[0, 0.2, 0]} speed={2}>
            <Text3D
                receiveShadow
                castShadow
                curveSegments={32}
                bevelEnabled
                bevelSize={0.04}
                bevelThickness={0.1}
                height={0.5}
                lineHeight={0.5}
                letterSpacing={-0.06}
                size={(size.width/100)/6}
                font={"/Sharpie.json"}
            >
                {props.children}
              <meshLambertMaterial attach={'material'} color={'#E1E7F4'} castShadow receiveShadow />
            </Text3D>
          </Float>
        </Center>
      </group>
    )
  
  }