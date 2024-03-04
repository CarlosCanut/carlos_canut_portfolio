import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react';


export default function Timeline () {

    const ref = useRef(null)
    const { scrollProgressY } = useScroll({ 
        target: ref,
        offset: ["end end", "start start"]
    })
    
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
          const delay = 1 + i * 0.5;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
              opacity: { delay, duration: 0.01 }
            }
          };
        }
      };

    const height_2024 = 100
    const height_2023 = 775
    const height_2022 = 2025
    const height_2021 = 2350
    const height_2020 = 2700
    const height_2019 = 2900
    const height_2018 = 2500

    return (
        <>
            <div ref={ref} className='w-1/3 h-full flex flex-col mx-12 items-center justify-center'>
                <motion.svg
                    width="200"
                    height="3000"
                    viewBox="0 0 100 3000"
                    initial="hidden"
                    animate="visible"
                    className={'flex items-center justify-center'}
                >
                    
                    <motion.line
                        x1="0"
                        y1="100"
                        x2="0"
                        y2="2900"
                        stroke="#ffffff"
                        pathLength="2900"
                        style={{ pathLength: scrollProgressY, strokeWidth: "2" }}
                        variants={draw}
                        custom={2}
                    />
                    
                    {/* 2024 */}
                    <motion.circle
                        cx="0"
                        cy={height_2024}
                        r="25"
                        style={{ strokeWidth: "4" }}
                        fill="#ffffff"
                    />
                    <motion.text
                        x="0"
                        y={height_2024 + 4}
                        fill={"#000000"}
                        stroke={"#000000"}
                        fontSize="15"
                        textAnchor="middle"
                    >2024</motion.text>
                    {/* 2023 */}
                    <motion.circle
                        cx="0"
                        cy={height_2023}
                        r="25"
                        style={{ strokeWidth: "4" }}
                        fill="#ffffff"
                    />
                    <motion.text
                        x="0"
                        y={height_2023 + 4}
                        fill={"#000000"}
                        stroke={"#000000"}
                        fontSize="15"
                        textAnchor="middle"
                    >2023</motion.text>
                    {/* 2022 */}
                    <motion.circle
                        cx="0"
                        cy={height_2022}
                        r="25"
                        style={{ strokeWidth: "4" }}
                        fill="#ffffff"
                    />
                    <motion.text
                        x="0"
                        y={height_2022 + 4}
                        fill={"#000000"}
                        stroke={"#000000"}
                        fontSize="15"
                        textAnchor="middle"
                    >2022</motion.text>
                    {/* 2021 */}
                    <motion.circle
                        cx="0"
                        cy={height_2021}
                        r="25"
                        style={{ strokeWidth: "4" }}
                        fill="#ffffff"
                    />
                    <motion.text
                        x="0"
                        y={height_2021 + 4}
                        fill={"#000000"}
                        stroke={"#000000"}
                        fontSize="15"
                        textAnchor="middle"
                    >2021</motion.text>
                    {/* 2020 */}
                    <motion.circle
                        cx="0"
                        cy={height_2020}
                        r="25"
                        style={{ strokeWidth: "4" }}
                        fill="#ffffff"
                    />
                    <motion.text
                        x="0"
                        y={height_2020 + 4}
                        fill={"#000000"}
                        stroke={"#000000"}
                        fontSize="15"
                        textAnchor="middle"
                    >2020</motion.text>
                    {/* 2019 */}
                    <motion.circle
                        cx="0"
                        cy={height_2019}
                        r="25"
                        style={{ strokeWidth: "4" }}
                        fill="#ffffff"
                    />
                    <motion.text
                        x="0"
                        y={height_2019 + 4}
                        fill={"#000000"}
                        stroke={"#000000"}
                        fontSize="15"
                        textAnchor="middle"
                    >2019</motion.text>
                </motion.svg>
            </div>

            {/* <div ref={ref}>
                <figure className="progress">
                    <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                        <motion.circle
                        cx="50"
                        cy="50"
                        r="30"
                        pathLength="1"
                        className="indicator"
                        style={{ pathLength: scrollProgressY }}
                        />
                    </svg>
                </figure>
            </div> */}
        </>
    )
}