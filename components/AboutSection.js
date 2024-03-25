import AnimatedTitle from "./AnimatedTitle";
import { motion } from 'framer-motion'


export function AboutSection({ translations }) {

    return (
        <>
            <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
                className='flex flex-col md:flex-row w-full my-12 md:my-24'
            >
                <ul className="w-1/3 list-none text-md sm:text-md lg:text-xl font-light font-ExconLight">
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
                </div>
            </motion.div>
        </>
    )
}
