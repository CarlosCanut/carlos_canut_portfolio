import { useRouter } from "next/router";
import AnimatedImage from "./AnimatedImage";
import AnimatedTitle from "./AnimatedTitle";


export function OtherProjects ({ translations, previous_project, next_project, onClick }) {
    const router = useRouter()

    return (
        <>
            <div className="w-2/5 flex flex-col items-start justify-center mr-auto gap-2">
                <div className="flex flex-row items-end justify-start">
                    <AnimatedTitle
                        text={previous_project['title'].toUpperCase()}
                        className="font-ExconBold text-md sm:text-5xl font-extrabold"
                    />
                    <AnimatedTitle
                        text={translations['previous_project_title']}
                        className="font-extralight font-ExconRegular text-xs sm:text-md"
                    />
                </div>
                <AnimatedImage image_url={previous_project['title_image']} url={previous_project['route_url']} className="border border-text border-opacity-25 rounded-xl sm:rounded-3xl" />
            </div>
            <div className="w-2/5 flex flex-col items-start justify-center gap-2">
                <div className="flex flex-row items-end justify-start">
                    <AnimatedTitle
                        text={next_project['title'].toUpperCase()}
                        className="font-ExconBold text-md sm:text-5xl font-extrabold"
                    />
                    <AnimatedTitle
                        text={translations['next_project_title']}
                        className="font-extralight font-ExconRegular text-xs sm:text-md"
                    />
                </div>
                <AnimatedImage image_url={next_project['title_image']} url={next_project['route_url']} className="border border-text border-opacity-25 rounded-xl sm:rounded-3xl" />
            </div>
        </>
    )
}