import { motion } from 'framer-motion'
import AnimatedTitle from "./AnimatedTitle";
import AnimatedImage from './AnimatedImage';

export function ProjectCard ({ title, onClick, image_url, github_link }) {

    return (
        <div className='w-full md:w-[60vw] flex flex-col'>
            <div className='flex flex-row mb-2 ml-4 items-end gap-4'>
                {/* <h2 className='font-ExconBold text-6xl font-extrabold'>ENSO</h2> */}
                <AnimatedTitle
                    text={title}
                    className="font-ExconBold text-4xl sm:text-6xl font-extrabold"
                />
                {github_link.length > 0 &&
                    <AnimatedTitle
                        text="GITHUB"
                        className="font-extralight font-ExconRegular"
                    />
                }
                {/* <h4 className='font-extralight'>GITHUB</h4> */}
            </div>
            <AnimatedImage image_url={image_url} onClick={onClick} />
        </div>
    )
}