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
import ProjectSection from "../../components/ProjectSection";


export async function getServerSideProps ({ params }) {
    const { slug } = params;

    const project = slug

    const descriptions = {
        "enso": "This project started when I arrived to Japan with a friend to travel for 2 months and we had problems paying in cash only restaurants. We couldn’t find any app to split expenses that was completely free and simple so we decided to build our own in the spare time of the trip.",
        "scoutex": "Humanity is approaching a defining stage in its history: exploration of the universe. Cross-medium design can be used to create an identity for humanity in this context, which is practically applicable for understanding by both humans and extra-terrestrial beings.",
        "lolpicks": "Humanity is approaching a defining stage in its history: exploration of the universe. Cross-medium design can be used to create an identity for humanity in this context, which is practically applicable for understanding by both humans and extra-terrestrial beings.",
    }

    const projects = {
        "enso": {
            "year": "(2024)",
            "pages": 8,
            "services": "[DESIGN, FRONT END]",
            "clients": "[The World]",
            "mockup_url": "/images/enso/mockup_enso.png",
            "project_url": "/images/logos/enso_logo_v2.svg",
            "github_url": "https://github.com/1dmaol/Enso",
            "web_url": "https://enso-prototype.onrender.com/",
            "sections": [
                {
                    "title": "THE IDEA",
                    "subtitle": "[PROJECT ORIGIN]",
                    "description": "This project started when I arrived to Japan with a friend to travel for 2 months and we had problems paying in cash only restaurants. We couldn’t find any app to split expenses that was completely free and simple so we decided to build our own in the spare time of the trip.",
                    "image_url": "/images/enso/enso.png",
                },
                {
                    "title": "WHAT IS IT ABOUT",
                    "subtitle": "[PROJECT INFO]",
                    "description": "The main purpose of the project was to create a web to split expenses for travelling that generated us $0 in server costs. To achieve this we have created a system that reads a json file and displays the info, being able to save this file cache, your local files or google drive.",
                    "image_url": "/images/enso/image2.png",
                },
                {
                    "title": "THE LOOKS",
                    "subtitle": "[PROJECT DESIGN]",
                    "description": "We wanted the web to follow a design similar to online banks and keeping it as neat and simple as possible, using green as our main colour and follow with a palette of white/grey/black and keeping things clear and easy to find. Just the app we needed for our trip.",
                    "image_url": "/images/enso/image3.png",
                }
            ]
        },
        "scoutex": {
            "year": "(2022)",
            "pages": 8,
            "services": "[DESIGN, FRONT END, BACK END]",
            "clients": "[Dignitas, SK Gaming]",
            "mockup_url": "/images/scoutex/mockup.png",
            "project_url": "/images/logos/scoutex_logo.svg",
            "sections": [
                {
                    "title": "THE IDEA",
                    "subtitle": "[PROJECT ORIGIN]",
                    "description": "After competing as player and then switching to staff in League of Legends teams, had the luck of meeting Alejandro Flores, another League of Legends analyst. After discussing for 2 months we decided to create a SAAS app for League of Legends teams that would help them keep track and extract insights of all the training and official games, as well as helping them understand the game to a greater extent.",
                    "image_url": "/images/scoutex/scoutex.png",
                },
                {
                    "title": "WHAT IS IT ABOUT",
                    "subtitle": "[PROJECT INFO]",
                    "description": "This product consists in a tracking system for all the training sessions of the team, as well as keeping track of all oponents and all the other teams in the world so the user (coaches and players) have an advantage and better understanding on what is best to play and what to expect from their oponents.",
                    "image_url": "/images/scoutex/scoutex.png",
                },
                {
                    "title": "THE LOOKS",
                    "subtitle": "[PROJECT DESIGN]",
                    "description": "We wanted a design that looked familiar to the players and coaches, that’s why we chose a dark palette with similar colours as League of Legends. All the pages are divided into filters and selects on top and the information displayed at the bottom, so once they understand how a page works they can get a hand of all of them, making it easy for players that have really limited time to look for information.",
                    "image_url": "/images/scoutex/scoutex.png",
                }
            ]
        },
        "lolpicks": {
            "year": "(2022)",
            "pages": 10,
            "services": "DESIGN, FRONT END",
            "clients": "The World",
            "mockup_url": "/images/enso/mockup_enso.png",
            "project_url": "/images/logos/laning_phase_logo.svg",
            "sections": [
                {
                    "title": "THE IDEA",
                    "subtitle": "[PROJECT ORIGIN]",
                    "description": "This project started when I arrived to Japan with a friend to travel for 2 months and we had problems paying in cash only restaurants. We couldn’t find any app to split expenses that was completely free and simple so we decided to build our own in the spare time of the trip.",
                    "image_url": "/images/enso/enso.png",
                },
                {
                    "title": "WHAT IS IT ABOUT",
                    "subtitle": "[PROJECT INFO]",
                    "description": "The main purpose of the project was to create a web to split expenses for travelling that generated us $0 in server costs. To achieve this we have created a system that reads a json file and displays the info, being able to save this file cache, your local files or google drive.",
                    "image_url": "/images/enso/image2.png",
                },
                {
                    "title": "THE LOOKS",
                    "subtitle": "[PROJECT DESIGN]",
                    "description": "We wanted the web to follow a design similar to online banks and keeping it as neat and simple as possible, using green as our main colour and follow with a palette of white/grey/black and keeping things clear and easy to find. Just the app we needed for our trip.",
                    "image_url": "/images/enso/image3.png",
                },
                {
                    "title": "THE LOOKS",
                    "subtitle": "[PROJECT DESIGN]",
                    "description": "We wanted the web to follow a design similar to online banks and keeping it as neat and simple as possible, using green as our main colour and follow with a palette of white/grey/black and keeping things clear and easy to find. Just the app we needed for our trip.",
                    "image_url": "/images/enso/image3.png",
                }
            ]
        },
    }

    const project_info = projects[project]

    return {
        props: {
            project,
            project_info,
            // description: descriptions[project]
        }
    }
}

export default function Project ({ project, project_info }) {

    return (
        <>
        <div className='z-50 absolute flex w-screen top-[86vh] right-0 left-0 justify-center'>
            <div className='flex flex-row items-center justify-center gap-2 px-2 py-2 left-[20vw] rounded-2xl bg-primary bg-opacity-25'>
                <span onClick={() => window.open(project_info['github_url'], '_blank')} className="px-4 py-2 rounded-2xl border border-secondary bg-background drop-shadow-2xl cursor-pointer hover:bg-accent">
                    Github
                </span>
                <span onClick={() => window.open(project_info['web_url'], '_blank')} className="px-4 py-2 rounded-2xl border border-secondary bg-background drop-shadow-2xl cursor-pointer hover:bg-accent">
                    Web
                </span>
            </div>
        </div>
        <Canvas shadows orthographic camera={ { position: [0, 0, 100], zoom: 100 }} className="-z-2">
            <ScrollControls pages={project_info['pages']} damping={0.1}>
                <Scroll html>
                    <HeadMenuExtra />
                    <section className="w-screen h-[60vh] pt-[20vh] flex flex-col items-center justify-center font-ExconMedium text-5xl text-start">
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <Image src={project_info['project_url']} alt={project} width={100} height={100} />
                            <AnimatedTitle
                                text={project.toUpperCase()}
                                className={`text-6xl md:text-8xl font-bold font-ExconBold`}
                                text_color={project_info['title_color']}
                            />
                            <AnimatedText
                                text={project_info['year']}
                                className={`text-4xl md:text-6xl font-ExconRegular`}
                            />
                        </div>
                        <div className="w-[90vw] flex flex-row items-center justify-center">
                            <div className="w-full h-full flex flex-col items-start justify-center font-ExconMedium">
                                <AnimatedText
                                    text={"Services"}
                                    className={'text-lg md:text-2xl'}
                                />
                                <AnimatedText
                                    text={project_info['services']}
                                    className={'text-lg md:text-2xl'}
                                />
                            </div>
                            <div className="w-full h-full flex flex-col items-end justify-center font-ExconMedium">
                                <AnimatedText
                                    text={"Clients"}
                                    className={'text-lg md:text-2xl'}
                                />
                                <AnimatedText
                                    text={project_info['clients']}
                                    className={'text-lg md:text-2xl'}
                                />
                            </div>
                        </div>
                    </section>
                    <section className="w-screen h-screen mt-[10vh] flex flex-col items-center justify-center font-ExconMedium text-5xl text-start">
                        <motion.img
                            src={project_info['mockup_url']}
                            alt={`${project} landing page`}
                            className="drop-shadow-xl w-screen h-screen opacity-90 object-cover"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.5 }}
                        />
                    </section>
                    {project_info['sections'].map((section, index) => {
                        return (
                            <ProjectSection
                                key={index}
                                title={section['title']}
                                subtitle={section['subtitle']} 
                                description={section['description']}
                                image_url={section['image_url']}
                            />
                        )
                    })}
                    <section className='flex flex-col w-[90vw] h-[90vh] items-start mx-[5vw] my-[5vh] p-2'>
                        <AboutSection />
                    </section>
                </Scroll>
            </ScrollControls>
        </Canvas>
        </>
    )
}