import { Center, Float, PivotControls, Svg, Text3D } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { motion } from "framer-motion-3d"
import useWindowDimensions from "../hooks/useWindowDimensions"


export function LogoCarrousel ({src, ...props}) {
    const { width, height } = useWindowDimensions();
    var size = 100
    
    
    if (width && width < 700) {
        // desktop
        size = width * 0.15
    } else {
        // mobile
        size = width ? width * 0.08 : 100
    }
        
    return (
        <div className="flex flex-col md:flex-row h-full md:h-1/3 w-1/3 md:w-full place-content-evenly">
            <img src='/svg/swarovski.svg' alt={'Swarovski logo'} width={size} height={size} />
            <img src='/svg/disney.svg' alt={'Disney logo'} width={size} height={size} />
            <img src='/svg/zero_tenacity.svg' alt={'Zero Tenacity logo'} width={size} height={size} />
            <img src='/svg/dignitas.svg' alt={'Dignitas logo'} width={size} height={size} />
            <img src='/svg/infinity.svg' alt={'Infinity logo'} width={size} height={size} />
            <img src='/svg/ucam.svg' alt={'Ucam logo'} width={size} height={size} />
            <img src='/svg/sk_gaming.svg' alt={'Sk Gaming logo'} width={size} height={size} />
        </div>
    )
  
  }