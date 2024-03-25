import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react';
import ExperienceBubble from './timeline/experienceBubble';


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

    return (
        <>
            <div ref={ref} className='w-1/12 flex flex-col ml-12 items-center justify-center'>
                <motion.svg
                    width="200"
                    height="2000"
                    viewBox="0 0 100 2000"
                    initial="hidden"
                    animate="visible"
                    className={'flex items-center justify-center'}
                >
                    
                    <motion.line
                        x1="0"
                        y1="100"
                        x2="0"
                        y2="2000"
                        stroke="#ffffff"
                        pathLength="2000"
                        style={{ pathLength: scrollProgressY, strokeWidth: "2" }}
                        variants={draw}
                        custom={2}
                    />
                    
                    <ExperienceBubble animationVariants={draw} year="2024" height={75} />
                    <ExperienceBubble animationVariants={draw} year="2023" height={440} />
                    <ExperienceBubble animationVariants={draw} year="2022" height={1290} />
                    <ExperienceBubble animationVariants={draw} year="2021" height={1475} />
                    <ExperienceBubble animationVariants={draw} year="2020" height={1675} />
                    <ExperienceBubble animationVariants={draw} year="2019" height={1850} />
                    <ExperienceBubble animationVariants={draw} year="2018" height={1975} />
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