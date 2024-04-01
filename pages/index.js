import { Suspense, createContext, useContext, useEffect, useMemo, useState } from 'react'

import * as THREE from 'three'
import { Scroll, ScrollControls, Html, Environment, Instances, Instance, MeshTransmissionMaterial, Lightformer, Float, Points, PointMaterial, MeshDistortMaterial, Sphere, OrbitControls, Center, Text3D, Plane, Sparkles, SpotLight, Torus } from '@react-three/drei'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { motion, useScroll, useSpring } from 'framer-motion'
import path from 'path'
import { LayerMaterial, Color, Depth, Displace, Fresnel } from 'lamina'
import { useRef } from 'react'
import { random } from 'maath'
import { a } from '@react-spring/three'
import { promises as fs } from 'fs'

import Link from 'next/link'
// import Image from 'next/image'
import { BufferAttribute, MathUtils } from 'three'
import { SphereShaderMaterial } from '../components/Sphere'
import { TitleText3d } from '../components/TitleText3d'
import { AboutSection } from '../components/AboutSection'
import AnimatedTitle from '../components/AnimatedTitle'
import { useRouter } from 'next/router'
import { ProjectCard } from '../components/ProjectCard'
import HeadMenuExtra from '../components/HeadMenuExtra'
import AnimatedText from '../components/AnimatedText'
import { Lighting } from '../components/threejs/Lighting'
import HeadMenu from '../components/HeadMenu'


const AnimatedMaterial = a(MeshDistortMaterial)

export async function getStaticProps({ locale }) {

    const jsonDirectory = path.join(process.cwd(), 'translations')
    // const translationsRaw = await fs.readFile(jsonDirectory + `/${locale}.json`, 'utf8')
    const translationsRaw = await fs.readFile(jsonDirectory + `/en.json`, 'utf8')
    const translations = JSON.parse(translationsRaw)

    return {
        props: {
            translations
        }
    }
}

function Background_torus() {
    const { size } = useThree()

    const torusRef = useRef()

    useFrame(() => {
        torusRef.current.rotation.x += 0.005
        torusRef.current.rotation.y += 0.005
    })

    var torus_radius = 1
    var torus_tube = 1
    
    if (size.width < 700) {
        torus_radius = size.width/750
        torus_tube = size.width/650
    } else {
        torus_radius = size.width/1250
        torus_tube = size.width/1250
    }
    
    return (
        <mesh ref={torusRef} receiveShadow castShadow position={[0, 0, -4]}>
            <torusGeometry args={[2 * torus_radius, 1 * torus_tube, 24, 64]} />
            <MeshTransmissionMaterial backside backsideThickness={0} thickness={5} roughness={0} anisotropicBlur={0.1} />
        </mesh>
    )
}

function Scene({ translations }) {

    return (
        <div className='flex w-full h-full -z-1'>
            <Canvas shadows orthographic camera={{ position: [0, 0, 100], zoom: 100 }} className='-z-2'>
                <Lighting />
                {/* <TitleText3d position={[0, 0, 0]} rotate={false} scale_divider={12}>
                    {translations.section_projects_title}
                </TitleText3d> */}
                <TitleText3d position={[0, -0.1, 0]} rotate={false} scale_divider={12}>
                    {translations.main_title_1 + '\n\n' + translations.main_title_2}
                </TitleText3d>
                <Background_torus />
                {/* <TitleText3d position={[0, -0.5, 0]} rotate={false} scale_divider={12}>
                    {translations.main_title_2}
                </TitleText3d> */}
            </Canvas>
        </div>
    )
}

export default function Home({ translations }) {
    const router = useRouter()

    return (
        <>
            <div>
                <HeadMenu translations={translations} />
                <HeadMenuExtra translations={translations} />
            </div>
            <section className='flex w-screen h-screen justify-center items-center'>
                <Scene translations={translations} />
                {/* <motion.div
                    className='flex flex-col w-[65dvw] md:h-full mt-[50vh] md:mt-[100vh] items-start justify-start font-ExconBold text-2xl sm:text-4xl md:text-6xl lg:text-8xl'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                >
                    <AnimatedTitle
                        text={translations.main_title_1}
                        className="font-ExconBold self-start font-bold bg-gradient-to-r from-text via-secondary to-accent bg-clip-text text-transparent"
                        mainTitle={true}
                    />
                    <AnimatedTitle
                        text={translations.main_title_2}
                        className="font-ExconBold self-end font-bold"
                    />
                </motion.div>
                <motion.div
                    className='flex flex-col w-[25dvw] h-full mt-0 md:mt-[100vh] items-start justify-start text-2xl font-ExconMedium sm:text-2xl md:text-2xl'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                >
                    <motion.h3
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className="font-ExconMedium self-start cursor-pointer hover:underline hover:underline-offset-2"
                        onClick={() => window.open('https://www.linkedin.com/in/carlos-m%C2%AA-canut-dom%C3%ADnguez-06b322181/', '_blank')}
                    >
                        LinkedIn
                    </motion.h3>

                    <motion.h3
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className="font-ExconMedium self-start cursor-pointer hover:underline hover:underline-offset-2"
                        onClick={() => window.open('https://github.com/CarlosCanut', '_blank')}
                    >
                        Github
                    </motion.h3>
                    <motion.h3
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className="font-ExconMedium self-start cursor-pointer hover:underline hover:underline-offset-2"
                        onClick={() => window.open('https://read.cv/carloscanut', '_blank')}
                    >
                        Read.cv
                    </motion.h3>
                    <motion.h3
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className="font-ExconMedium self-start cursor-pointer hover:underline hover:underline-offset-2"
                        onClick={() => window.open('carloscanutdominguez@gmail.com', '_blank')}
                    >
                        Email
                    </motion.h3>
                </motion.div> */}
            </section>

            <section className='flex flex-col w-screen justify-center items-center mb-[5vh] mt-[25vh]'>
                {/* <Scene translations={translations} /> */}
                <AnimatedTitle
                    text={translations.section_projects_title}
                    className="font-ExconBlack font-bold text-6xl md:text-9xl"
                    mainTitle={true}
                />
            </section>



            <section className='flex flex-col gap-24 w-[100dvw]'>
                <div className='flex flex-col w-full items-center hover:ease-in'>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className='w-full flex flex-row justify-start p-8 md:p-0 md:ml-[10dvw]'
                    >
                        <ProjectCard title={'ENSO'} url={'/projects/enso'} image_url={'/images/enso/enso.png'} github_link={'https://github.com/CarlosCanut'} />
                    </motion.div>
                </div>
                <div className='flex flex-col w-full items-center hover:ease-in'>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className='w-full flex flex-row justify-end p-8 md:p-0 md:mr-[10dvw]'
                    >
                        <ProjectCard title={'SCOUTEX'}  url={'/projects/scoutex'} image_url={'/images/scoutex/scoutex.png'} github_link={''} />
                    </motion.div>
                </div>
                <div className='flex flex-col w-full items-center hover:ease-in'>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className='w-full flex flex-row justify-start p-8 md:p-0 md:ml-[10dvw]'
                    >
                        <ProjectCard title={'LANING PHASE'}  url={'/projects/laning_phase'} image_url={'/images/laning_phase.png'} github_link={'https://github.com/CarlosCanut/laning_phase'} />
                    </motion.div>
                </div>
            </section>





            <section className='flex flex-col w-screen items-start justify-start mt-24'>
                <AboutSection translations={translations} />
            </section>
        </>
    )
}
