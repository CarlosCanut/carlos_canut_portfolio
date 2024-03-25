import { Suspense, createContext, useContext, useEffect, useMemo, useState } from 'react'

import * as THREE from 'three'
import { Scroll, ScrollControls, Html, Environment, Instances, Instance, MeshTransmissionMaterial, Lightformer, Float, Points, PointMaterial, MeshDistortMaterial, Sphere, OrbitControls, Center, Text3D, Plane, Sparkles, SpotLight } from '@react-three/drei'
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
    const translationsRaw = await fs.readFile(jsonDirectory + `/${locale}.json`, 'utf8')
    const translations = JSON.parse(translationsRaw)

    return {
        props: {
            translations
        }
    }
}


function Scene({ translations }) {

    return (
        <div className='flex w-screen h-[50dvh]'>
            <Canvas shadows orthographic camera={{ position: [0, 0, 100], zoom: 100 }} className='-z-2'>
                <Lighting />
                <TitleText3d position={[0, 0, 0]} rotate={false}>
                    {translations.section_projects_title}
                </TitleText3d>
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
            <section className='flex flex-col md:flex-row w-[90dvw] h-screen justify-center items-center mx-[5dvw] gap-8'>
                <motion.div
                    className='flex flex-col w-[65dvw] md:h-full mt-[50dvh] md:mt-[100dvh] items-start justify-start font-ExconBold text-2xl sm:text-4xl md:text-6xl lg:text-8xl'
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
                    className='flex flex-col w-[25dvw] h-full mt-0 md:mt-[100dvh] items-start justify-start text-2xl font-ExconMedium sm:text-2xl md:text-2xl'
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
                </motion.div>
            </section>

            <section className='flex flex-col w-[100dvw] h-[50dvh] justify-center items-center'>
                <Scene translations={translations} />
            </section>

            <section className='flex flex-col gap-24 w-[100dvw]'>
                <div className='flex flex-col w-full items-center hover:ease-in'>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className='w-full flex flex-row justify-start ml-[10dvw]'
                    >
                        <ProjectCard title={'ENSO'} onClick={() => router.push('/projects/enso')} image_url={'/images/enso/enso.png'} github_link={'https://github.com/CarlosCanut'} />
                    </motion.div>
                </div>
                <div className='flex flex-col w-full items-center hover:ease-in'>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className='w-full flex flex-row justify-end mr-[10dvw]'
                    >
                        <ProjectCard title={'SCOUTEX'} onClick={() => router.push('/projects/scoutex')} image_url={'/images/scoutex/scoutex.png'} github_link={''} />
                    </motion.div>
                </div>
                <div className='flex flex-col w-full items-center hover:ease-in'>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className='w-full flex flex-row justify-start ml-[10dvw]'
                    >
                        <ProjectCard title={'LOLPICKS'} onClick={() => router.push('/projects/lolpicks')} image_url={'/images/lolpicks.png'} github_link={'https://github.com/CarlosCanut'} />
                    </motion.div>
                </div>
            </section>





            <section className='flex flex-col w-[90dvw] h-[90dvh] items-start justify-start mx-[5dvw] my-[5dvh]'>
                <AboutSection translations={translations} />
            </section>
        </>
    )
}
