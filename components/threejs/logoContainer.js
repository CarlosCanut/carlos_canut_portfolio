import { useThree } from "@react-three/fiber"
import { Vector3 } from 'three';
import { Logo } from "../Logo"


export function LogoContainer ({ children }) {

    const { size, camera } = useThree();
    const screenWidth = size.width

    
    const gap = screenWidth / (children.length - 1)


    // Function to convert screen coordinates to world coordinates
    const screenToWorld = (x, y) => {
        const vec = new Vector3((x / screenWidth) * 2 - 1, -(y / size.height) * 2 + 1, 0.5);
        vec.unproject(camera);
        return vec;
    };


    return (
        <>
            {children.map((logo, index) => {
                if (logo.props.src == "") {
                    return
                }
                const x = -screenWidth / 2 + (index + 1) * gap
                const worldPosition = screenToWorld(index * gap, 0);
                return (
                    <Logo
                        key={index}
                        src={logo.props.src}
                        position={[worldPosition.x, -2, 0]}
                    />
                )
            })}
        </>
    )
}