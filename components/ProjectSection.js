import AnimatedText from "./AnimatedText";
import AnimatedTitle from "./AnimatedTitle";


export default function ProjectSection ({ title, subtitle, description, image_url }) {

    return (
        <>
            <section className={`w-screen flex items-center justify-start my-[15dvh]`}>
                <div className=" w-full md:w-[70dvw] ml-[10dvw] md:ml-[25dvw] mr-[5dvw] flex flex-col items-top justify-start gap-12">
                    <div className="flex flex-row gap-4 items-center text-4xl md:text-7xl text-start text-white font-ExconMedium font-bold">
                        <h2>
                            <AnimatedTitle
                                text={title}
                                className={"font-ExconBold"}
                            />
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 text-lg md:text-xl text-start text-white font-Brockmann font-medium">
                        <AnimatedTitle
                            text={subtitle}
                            className={'text-lg min-w-fit font-ExconMedium'}
                        />
                        <AnimatedText
                            text={description}
                            className={'text-lg w-full md:w-2/3 font-ExconLight'}
                        />
                    </div>
                </div>
            </section>
            <section className={`w-screen flex flex-col items-center justify-center font-ExconMedium text-5xl text-start`}>
                <img
                    src={image_url}
                    alt='enso landing page'
                    className="rounded-lg drop-shadow-xl w-[90dvw] opacity-90 object-cover"
                />
            </section>
        </>
    )
}