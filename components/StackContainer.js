import Image from "next/image"
import useWindowDimensions from "../hooks/useWindowDimensions"
import AnimatedText from "./AnimatedText"
import { motion } from "framer-motion"


export function StackContainer ({ project_info, project }) {

    const { width, height } = useWindowDimensions()

    var logo_size = 0
    if (width && width < 700) {
        logo_size = width / 12
    } 
    if (width && width > 700) {
        logo_size = width / 32
    }
    return (
        <>
            <AnimatedText
                text={project_info['stack_title']}
                className={'font-semibold'}
            />
            <div className="flex flex-row items-end justify-end gap-2 mt-2">
                {project_info['stack'].map((stack, index) => {
                    return (
                        <motion.div key={index} className="w-full h-full flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}>
                            <Image src={stack} alt={project} width={logo_size} height={logo_size} />
                        </motion.div>
                    )
                })}
            </div>
        </>
    )
}