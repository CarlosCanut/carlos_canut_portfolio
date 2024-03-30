import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react';
import ExperienceBubble from './timeline/experienceBubble';
import useWindowDimensions from '../hooks/useWindowDimensions';


export default function Timeline () {

    const ref = useRef(null)
    const { width, height } = useWindowDimensions();

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


      var timeline_offsets = {
        "line": 2000,
        "height1": 75,
        "height2": 440,
        "height3": 1290,
        "height4": 1475,
        "height5": 1675,
        "height6": 1850,
        "height7": 1975,
      }
      if (width && width < 1300) {
        timeline_offsets = {
            "line": 2125,
            "height1": 75,
            "height2": 440,
            "height3": 1350,
            "height4": 1525,
            "height5": 1775,
            "height6": 2000,
            "height7": 2100,
          }
      }
      if (width && width < 1024) {
        timeline_offsets = {
            "line": 1800,
            "height1": 75,
            "height2": 425,
            "height3": 1150,
            "height4": 1340,
            "height5": 1525,
            "height6": 1700,
            "height7": 1775,
          }
      }
      if (width && width < 900) {
        timeline_offsets = {
            "line": 1875,
            "height1": 75,
            "height2": 440,
            "height3": 1200,
            "height4": 1375,
            "height5": 1550,
            "height6": 1775,
            "height7": 1850,
          }
      }
      if (width && width < 861) {
        timeline_offsets = {
            "line": 2000,
            "height1": 75,
            "height2": 475,
            "height3": 1300,
            "height4": 1475,
            "height5": 1675,
            "height6": 1875,
            "height7": 1975,
          }
      }
      if (width && width < 775) {
        timeline_offsets = {
            "line": 2050,
            "height1": 75,
            "height2": 475,
            "height3": 1325,
            "height4": 1525,
            "height5": 1750,
            "height6": 1950,
            "height7": 2025,
          }
      }
      if (width && width < 680) {
        timeline_offsets = {
            "line": 2100,
            "height1": 75,
            "height2": 475,
            "height3": 1325,
            "height4": 1525,
            "height5": 1750,
            "height6": 2000,
            "height7": 2075,
          }
      }
      if (width && width < 640) {
        timeline_offsets = {
            "line": 1725,
            "height1": 75,
            "height2": 400,
            "height3": 1100,
            "height4": 1250,
            "height5": 1440,
            "height6": 1625,
            "height7": 1700,
          }
      }
      if (width && width < 560) {
        timeline_offsets = {
            "line": 1800,
            "height1": 75,
            "height2": 425,
            "height3": 1125,
            "height4": 1275,
            "height5": 1475,
            "height6": 1675,
            "height7": 1775,
          }
      }
      if (width && width < 478) {
        timeline_offsets = {
            "line": 1900,
            "height1": 75,
            "height2": 450,
            "height3": 1175,
            "height4": 1350,
            "height5": 1575,
            "height6": 1775,
            "height7": 1875,
          }
      }
      
    return (
        <>
            <div ref={ref} className='w-1/12 flex flex-col ml-16 items-center justify-center'>
                <motion.svg
                    width="200"
                    height={timeline_offsets['line']}
                    viewBox={`0 0 100 ${timeline_offsets['line']}`}
                    initial="hidden"
                    animate="visible"
                    className={'flex items-center justify-center'}
                >
                    
                    <motion.line
                        x1="0"
                        y1="100"
                        x2="0"
                        y2={timeline_offsets['line']}
                        stroke="#ffffff"
                        pathLength={timeline_offsets['line']}
                        style={{ pathLength: scrollProgressY, strokeWidth: "2" }}
                        variants={draw}
                        custom={2}
                    />
                    
                    <ExperienceBubble animationVariants={draw} year="2024" height={timeline_offsets['height1']} />
                    <ExperienceBubble animationVariants={draw} year="2023" height={timeline_offsets['height2']} />
                    <ExperienceBubble animationVariants={draw} year="2022" height={timeline_offsets['height3']} />
                    <ExperienceBubble animationVariants={draw} year="2021" height={timeline_offsets['height4']} />
                    <ExperienceBubble animationVariants={draw} year="2020" height={timeline_offsets['height5']} />
                    <ExperienceBubble animationVariants={draw} year="2019" height={timeline_offsets['height6']} />
                    <ExperienceBubble animationVariants={draw} year="2018" height={timeline_offsets['height7']} />
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