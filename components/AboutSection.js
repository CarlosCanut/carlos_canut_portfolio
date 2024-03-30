import Image from "next/image";
import AnimatedTitle from "./AnimatedTitle";
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";


export function AboutSection({ translations }) {

    return (
        <>
            <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
                className='flex flex-col w-full bg-secondary pt-12 pb-12 px-[15dvw] justify-center items-center gap-12 font-ExconLight text-xs md:text-lg'
            >
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-center w-full">
                    <div className="flex flex-col mr-auto gap-2">
                        <AnimatedTitle
                            text={"/Contact me"}
                            className={"opacity-60"}
                        />
                        <p className={"hover:underline hover:underline-offset-4 cursor-pointer"} onClick={() => { window.open('mailto:carloscanutdominguez@gmail') }}>carloscanutdominguez@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <AnimatedTitle
                            text={"/Socials"}
                            className={"opacity-60 mb-2"}
                        />
                        <div className="flex flex-row gap-4">
                            <FaLinkedin className="cursor-pointer flex self-center justify-center w-6 h-6 md:w-8 md:h-8 " onClick={() => window.open('https://www.linkedin.com/in/carlos-m%C2%AA-canut-dom%C3%ADnguez-06b322181/', '_blank')} />
                            <FaGithub className="cursor-pointer flex self-center justify-center w-6 h-6 md:w-8 md:h-8 " onClick={() => window.open('https://github.com/CarlosCanut', '_blank')} />
                            <PiReadCvLogoFill className="cursor-pointer flex self-center justify-center w-6 h-6 md:w-8 md:h-8 " onClick={() => window.open('https://read.cv/carloscanut', '_blank')} />
                        </div>
                    </div>
                </div>
                <div className="opacity-50">
                    © DESIGNED & DEVELOPMENT BY CARLOS CANUT - 2024
                </div>
                {/* <ul className="w-1/3 list-none text-md sm:text-md lg:text-xl font-light font-ExconLight">
                    <li className="">
                        <AnimatedTitle
                            text="GITHUB"
                            className=""
                        />
                    </li>
                    <li className="">
                        <AnimatedTitle
                            text="LINKEDIN"
                            className=""
                        />
                    </li>
                    <li className="mb-8 sm:mb-0 sm:mt-24">
                        <AnimatedTitle
                            text="CANUTDOMINGUEZ@MAIL.COM"
                            className=""
                        />
                    </li>
                    
                    
                </ul>
                <div className="w-full md:w-2/3 h-full flex flex-col gap-6 md:gap-8">
                    <h1 className="text-6xl font-ExconBold">
                        <AnimatedTitle
                            text={translations.contact_title}
                            className=""
                        />
                    </h1>
                    <input type="text" inputMode="text" placeholder={translations.contact_form_name} className="flex bg-background border-2 border-white px-4 py-4 md:py-6 w-full md:w-1/2" />
                    <input type="text" inputMode="text" placeholder={translations.contact_form_email} className="flex bg-background border-2 border-white px-4 py-4 md:py-6  w-full md:w-1/2" />
                    <input type="text" inputMode="text" placeholder={translations.contact_form_description} className="flex bg-background border-2 border-white px-4 py-4 md:py-6  w-full md:w-1/2" />
                    <button className="w-full md:w-1/2 text-background bg-[#3DBAB8] font-medium font-ExconMedium text-lg py-4">
                        {translations.contact_form_button}
                    </button>
                </div> */}
            </motion.div>
        </>
    )
}
