import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function ExperienceBubble ({ animationVariants, year, height }) {
    
    return (
        <>

            <motion.circle
                cx="0"
                cy={height}
                r="25"
                style={{ strokeWidth: "4" }}
                fill="#ffffff"
                variants={animationVariants}
                custom={2}
            />
            <motion.text
                x="0"
                y={height + 4}
                fill={"#000000"}
                stroke={"#000000"}
                fontSize="15"
                textAnchor="middle"
                variants={animationVariants}
                custom={2}
            >
                {year}
            </motion.text>
        </>
    )
}