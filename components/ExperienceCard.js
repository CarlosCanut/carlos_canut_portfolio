import AnimatedText from "./AnimatedText";


export default function ExperienceCard ({ position, company, description, duration }) {

    return (
        <>
            <li className='flex flex-row gap-24'>
                <div className='flex flex-col w-1/2 gap-4'>
                    <AnimatedText
                        text={position}
                        className={'lg:text-xl'}
                    />
                    <AnimatedText
                        text={company}
                        className={'lg:text-5xl font-bold'}
                    />
                </div>
                <div className='flex flex-col w-full mt-[5vh] gap-2'>
                    <AnimatedText
                        text={`Duration: ${duration}`}
                        className={'lg:text-xl'}
                    />
                    <AnimatedText
                        text={description}
                        className={'lg:text-md'}
                    />
                </div>
            </li>
        </>
    )
}