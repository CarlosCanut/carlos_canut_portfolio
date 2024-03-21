import AnimatedText from "./AnimatedText";


export default function ExperienceCard ({ position, company, description, duration }) {

    return (
        <>
            <li className='flex flex-row gap-8 sm:gap-24 w-full'>
                <div className='flex flex-col w-1/2 gap-4'>
                    <AnimatedText
                        text={position}
                        className={'text-md lg:text-xl font-ExconMedium'}
                    />
                    <AnimatedText
                        text={company}
                        className={'text-2xl lg:text-5xl font-ExconBold'}
                    />
                </div>
                <div className='flex flex-col w-full gap-2'>
                    <AnimatedText
                        text={`Duration: ${duration}`}
                        className={'lg:text-xl font-ExconMedium'}
                    />
                    <AnimatedText
                        text={description}
                        className={'text-xs sm:text-lg font-ExconRegular'}
                    />
                </div>
            </li>
        </>
    )
}