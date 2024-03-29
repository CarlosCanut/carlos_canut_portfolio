import { Suspense, createContext, useContext, useEffect, useMemo, useState } from 'react'

import * as THREE from 'three'
import { Scroll, ScrollControls, Html, Environment, Instances, Instance, MeshTransmissionMaterial, Lightformer, Float, Points, PointMaterial, MeshDistortMaterial, Sphere, OrbitControls, Center, Text3D, Plane, Sparkles, SpotLight, Svg, CameraControls } from '@react-three/drei'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import path from 'path'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { LayerMaterial, Color, Depth, Displace, Fresnel } from 'lamina'
import { useRef } from 'react'
import { random } from 'maath'
import { a } from '@react-spring/three'
import { promises as fs } from 'fs'

import Link from 'next/link'
// import Image from 'next/image'
import { BufferAttribute, MathUtils } from 'three'
import { SphereShaderMaterial } from '../components/Sphere'
import Image from 'next/image'
import { TitleText3d } from '../components/TitleText3d'
import { AboutSection } from '../components/AboutSection'
import { Logo } from '../components/Logo'
import AnimatedText from '../components/AnimatedText'
import AnimatedTitle from '../components/AnimatedTitle'
import HeadMenuExtra from '../components/HeadMenuExtra'
import ExperienceCard from '../components/ExperienceCard'
import Timeline from '../components/Timeline'
import { LogoContainer } from '../components/threejs/logoContainer'
import { Lighting } from '../components/threejs/Lighting'
import HeadMenu from '../components/HeadMenu'
import { LogoCarrousel } from '../components/LogoCarrousel'


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
        <div className='flex w-full h-full md:h-[60dvh]'>
            <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 14], fov: 17.5, near: 1, far: 20 }} className='-z-2 '>
                <Lighting />
                <TitleText3d position={[0, 0, 0]} scale_divider={10}>
                    {translations.section_about_title}
                </TitleText3d>
            </Canvas>
        </div>
    )
}

export default function About({ translations }) {


    return (
        <>
            <div>
                <HeadMenu translations={translations} />
                <HeadMenuExtra translations={translations} />
            </div>
            <section className='flex flex-row md:flex-col mt-[15dvh] mx-[5dvw] w-[90dvw] h-[85dvh] justify-center items-center'>
                <Scene translations={translations} />
                <LogoCarrousel />
            </section>
            {/* <section className='flex flex-wrap w-screen h-[35dvh] place-content-evenly items-center'>
                <LogoCarrousel />
            </section> */}
            <section className='flex flex-col w-[90dvw] items-start mx-[5dvw]'>
                <div className='w-full border-t-2 flex flex-col sm:flex-row pt-4 pb-20'>
                    {/* <h2 className='h-full w-1/3'>ABOUT ME</h2> */}
                    <AnimatedTitle
                        text={translations.about_title}
                        className={'h-full w-1/3 font-ExconMedium'}
                    />
                    <div className='h-full w-full sm:w-2/3 text-2xl md:text-4xl xl:text-5xl pt-4 px-2 sm:px-0'>
                        <AnimatedText
                            text={translations.about_me_description_1}
                        />
                        <br />
                        <AnimatedText
                            text={translations.about_me_description_2}
                        />
                        <br />
                        <AnimatedText
                            text={translations.about_me_description_3}
                        />
                    </div>
                </div>
            </section>

            <section className='flex flex-col w-[90dvw] items-start mx-[5dvw]'>

                <div className='w-full border-t-2 flex flex-col pt-4'>
                    <AnimatedTitle
                        text={translations.experience_title}
                        className={'h-full w-1/3 font-ExconMedium'}
                    />
                    <div className='w-full flex flex-row items-start pt-4'>
                        {/* esports team list */}
                        <Timeline />
                        <ul className='w-10/12 flex flex-col gap-20 sm:gap-24 mt-12'>
                            {translations.experience.map((item, index) => {
                                return (
                                    <ExperienceCard key={index} position={item.role} company={item.company} duration={item.duration} description={item.description} />
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>

            <section className='flex flex-col w-[90dvw] items-start mx-[5dvw] my-[5dvh] py-2'>
                <div className='w-full border-t-2 flex flex-col pt-4 font-ExconMedium'>
                    {/* <h2 className='h-full w-1/3'>SKILLSET</h2> */}
                    <AnimatedTitle
                        text={translations.skillset_title}
                        className={'h-full w-1/3'}
                    />
                    <div className='h-full w-full flex flex-col px-2 sm:px-8 py-12 font-medium text-md sm:text-2xl'>
                        {translations.skillset.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-row px-2 py-8 border-t-2 border-b-2 border-text gap-12'>
                                    <h3>
                                        <AnimatedText
                                            text={"0" + (index + 1)}
                                        />
                                    </h3>
                                    <span>
                                        <AnimatedText
                                            text={item.title}
                                        />
                                        <br />
                                        <br />
                                        <AnimatedText
                                            text={item.description}
                                        />
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className='flex flex-col w-[90dvw] items-start mx-[5dvw] my-[5dvh]'>
                <AboutSection translations={translations} />
            </section>
        </>
    )
}
