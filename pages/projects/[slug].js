import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { AboutSection } from "../../components/AboutSection";
import Image from "next/image";
import { motion } from "framer-motion"

import enso_logo from '../../public/images/logos/enso_logo.svg'
import typescript_logo from '../../public/images/logos/typescript_logo.svg'
import framer_motion_logo from '../../public/images/logos/framer_motion_logo.svg'
import react_logo from '../../public/images/logos/react_logo.svg'
import threejs_logo from '../../public/images/logos/threejs_logo.svg'
import vite_logo from '../../public/images/logos/vite_logo.svg'
import AnimatedTitle from "../../components/AnimatedTitle";
import AnimatedText from "../../components/AnimatedText";
import { useInView } from "react-intersection-observer";
import AnimatedImages from "../../components/AnimatedImages";
import HeadMenuExtra from "../../components/HeadMenuExtra";


export async function getServerSideProps ({ params }) {
    const { slug } = params;

    const project = slug

    const descriptions = {
        "enso": "Humanity is approaching a defining stage in its history: exploration of the universe. Cross-medium design can be used to create an identity for humanity in this context, which is practically applicable for understanding by both humans and extra-terrestrial beings.",
        "scoutex": "Humanity is approaching a defining stage in its history: exploration of the universe. Cross-medium design can be used to create an identity for humanity in this context, which is practically applicable for understanding by both humans and extra-terrestrial beings.",
        "lolpicks": "Humanity is approaching a defining stage in its history: exploration of the universe. Cross-medium design can be used to create an identity for humanity in this context, which is practically applicable for understanding by both humans and extra-terrestrial beings.",
    }

    return {
        props: {
            project,
            description: descriptions[project]
        }
    }
}

export default function Project ({ project, description }) {

    return (
        <>
        <div className='z-50 absolute flex w-screen top-[86vh] right-0 left-0 justify-center'>
            <div className='flex flex-row items-center justify-center gap-2 px-2 py-2 left-[20vw] rounded-2xl bg-primary bg-opacity-25'>
                <span className="px-4 py-2 rounded-2xl border border-secondary bg-background drop-shadow-2xl cursor-pointer">
                    Github
                </span>
                <span className="px-4 py-2 rounded-2xl border border-secondary bg-background drop-shadow-2xl cursor-pointer">
                    Web
                </span>
            </div>
        </div>
        <Canvas shadows orthographic camera={ { position: [0, 0, 100], zoom: 100 }} className="-z-2">
            <ScrollControls pages={4} damping={0.1}>
                <Scroll html>
                    <HeadMenuExtra />

                    <section className="absolute top-0 w-screen h-screen flex items-center justify-center">
                        <div className="w-[70vw] h-[60vh] mt-[40vh] ml-[25vw] mr-[5vw] flex flex-col items-top justify-start gap-24">
                            <div className="flex flex-row gap-4 items-center text-7xl text-start text-white font-ExconMedium font-bold">
                                <Image
                                    priority
                                    src={enso_logo}
                                    alt='enso logo'
                                    height={75}
                                    width={75}
                                />
                                <h2>
                                    <AnimatedTitle
                                        text={project.toUpperCase()}
                                    />
                                </h2>
                            </div>
                            <div className="flex flex-row gap-4 text-xl text-start text-white font-Brockmann font-medium">
                                <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
                                    <Image
                                        priority
                                        src={typescript_logo}
                                        alt='typescript logo'
                                        height={25}
                                        width={25}
                                    />
                                    <Image
                                        priority
                                        src={framer_motion_logo}
                                        alt='framer motion logo'
                                        height={25}
                                        width={25}
                                    />
                                    <Image
                                        priority
                                        src={react_logo}
                                        alt='typescript logo'
                                        height={25}
                                        width={25}
                                    />
                                    <Image
                                        priority
                                        src={threejs_logo}
                                        alt='typescript logo'
                                        height={25}
                                        width={25}
                                    />
                                    <Image
                                        priority
                                        src={vite_logo}
                                        alt='typescript logo'
                                        height={25}
                                        width={25}
                                    />
                                </div>
                                <AnimatedText
                                    text={description}
                                    className={'text-lg'}
                                />
                                </div>
                        </div>
                    </section>
                    <section className="absolute top-[100vh] w-screen h-screen flex flex-col gap-8 items-left justify-start mx-[10vw] my-[10vh] font-ExconMedium text-5xl text-start">
                        <AnimatedTitle
                            text={'LANDING PAGE'}
                            className={'font-bold ml-[15vw]'}
                        />
                        <div className="w-full h-full">
                            <AnimatedImages />
                        </div>
                    </section>
                    <section className="absolute top-[200vh] w-screen h-screen flex flex-col gap-8 items-left justify-start mx-[10vw] my-[10vh] font-ExconMedium text-5xl text-start">
                        <AnimatedTitle
                            text={'CONTROL PANEL'}
                            className={'font-bold ml-[15vw]'}
                        />
                        <div className="w-full h-full">
                            <AnimatedImages />
                        </div>
                    </section>
                    <section className='absolute flex flex-col top-[300vh] w-[90vw] h-[90vh] items-start mx-[5vw] my-[5vh] p-2'>
                        <AboutSection />
                    </section>
                </Scroll>
            </ScrollControls>
        </Canvas>
        </>
    )
}