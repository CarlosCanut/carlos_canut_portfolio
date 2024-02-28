import AnimatedTitle from "./AnimatedTitle";
import { motion } from 'framer-motion'

export function AboutSection() {

    return (
        <>
            <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }} 
                className='flex flex-row w-full my-24'
            >
                <lu className="w-1/3 list-none text-md font-light">
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
                    <li className="mt-24">
                        <AnimatedTitle
                            text="CANUTDOMINGUEZ@MAIL.COM"
                            className=""
                        />
                    </li>
                    
                    
                </lu>
                <div className="w-2/3 h-full flex flex-col gap-8">
                    <h1 className="text-5xl">
                        <AnimatedTitle
                            text="Contact"
                            className=""
                        />
                    </h1>
                    <input type="text" inputMode="text" placeholder="Name" className="flex bg-background border-2 border-white px-4 py-6 w-1/2" />
                    <input type="text" inputMode="text" placeholder="Email" className="flex bg-background border-2 border-white px-4 py-6 w-1/2" />
                    <input type="text" inputMode="text" placeholder="How can I help you?" className="flex bg-background border-2 border-white px-4 py-6 w-1/2" />
                    <button className="w-1/2 text-background bg-[#3DBAB8] font-medium text-lg py-4">
                        SEND
                    </button>
                </div>
            </motion.div>
        </>
    )
}
