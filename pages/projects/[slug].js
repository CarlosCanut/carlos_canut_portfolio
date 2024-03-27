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
import path from 'path'
import { promises as fs } from 'fs'
import HeadMenu from "../../components/HeadMenu";


export async function getServerSideProps ({ params, locale }) {
    const { slug } = params;

    const project = slug

    const descriptions = {
        "enso": "This project started when I arrived to Japan with a friend to travel for 2 months and we had problems paying in cash only restaurants. We couldn’t find any app to split expenses that was completely free and simple so we decided to build our own in the spare time of the trip.",
        "scoutex": "Humanity is approaching a defining stage in its history: exploration of the universe. Cross-medium design can be used to create an identity for humanity in this context, which is practically applicable for understanding by both humans and extra-terrestrial beings.",
        "laning_phase": "Humanity is approaching a defining stage in its history: exploration of the universe. Cross-medium design can be used to create an identity for humanity in this context, which is practically applicable for understanding by both humans and extra-terrestrial beings.",
    }



    const jsonDirectory = path.join(process.cwd(), 'translations')
    const translationsRaw = await fs.readFile(jsonDirectory + `/${locale}.json`, 'utf8')
    const translations = JSON.parse(translationsRaw)

    
    const project_info = translations['projects'].find(item => item['name'] === project)

    return {
        props: {
            project,
            project_info,
            translations,
            // description: descriptions[project]
        }
    }
}

export default function Project ({ project, project_info, translations }) {

    return (
        <>
        <header>
            <HeadMenu translations={translations} />
            <HeadMenuExtra translations={translations} />
        </header>
        <div className='z-50 fixed flex w-screen top-[86dvh] right-0 left-0 justify-center'>
            <div className='flex flex-row items-center justify-center gap-2 px-2 py-2 left-[20dvw] rounded-2xl bg-primary bg-opacity-25'>
                <span onClick={() => window.open(project_info['github_url'], '_blank')} className="px-4 py-2 rounded-2xl border border-secondary bg-background drop-shadow-2xl cursor-pointer hover:bg-accent">
                    Github
                </span>
                <span onClick={() => window.open(project_info['web_url'], '_blank')} className="px-4 py-2 rounded-2xl border border-secondary bg-background drop-shadow-2xl cursor-pointer hover:bg-accent">
                    Web
                </span>
            </div>
        </div>
        <section className="w-screen h-[60dvh] pt-[20dvh] flex flex-col items-center justify-center font-ExconMedium text-5xl text-start">
            <div className="w-full h-full flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                >
                    <Image
                        src={project_info['project_url']}
                        alt={project} 
                        width={100} 
                        height={100}
                    />
                </motion.div>
                <AnimatedTitle
                    text={project_info['title'].toUpperCase()}
                    className={`text-6xl md:text-8xl font-bold font-ExconBold`}
                    text_color={project_info['title_color']}
                />
                <AnimatedText
                    text={project_info['year']}
                    className={`text-4xl md:text-6xl font-ExconRegular`}
                />
            </div>
            <div className="w-[90dvw] flex flex-row items-center justify-center">
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
        <section className="w-screen h-screen mt-[10dvh] flex flex-col items-center justify-center font-ExconMedium text-2xl md:text-5xl text-start">
            <motion.img
                src={project_info['mockup_url']}
                alt={`${project} landing page`}
                className="drop-shadow-xl w-screen h-screen opacity-90 object-cover"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
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
        <section className='flex flex-col w-[90dvw] h-[90dvh] items-start mx-[5dvw] my-[5dvh] p-2'>
            <AboutSection translations={translations} />
        </section>
        </>
    )
}