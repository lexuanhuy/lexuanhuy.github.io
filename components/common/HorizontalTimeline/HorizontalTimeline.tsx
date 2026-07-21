import { ReactNode } from "react";
import { CyberCard } from "../CyberCard/CyberCard";
import styles from "./HorizontalTimeline.module.scss";

type TimeLineData = {
    year: string
    title: ReactNode
    content: ReactNode
}

export type HorizontalTimelineProps = {
    data: Array<TimeLineData>
}

export const HorizontalTimeline = ({ data = [] }: HorizontalTimelineProps) => {
    return (
        <ol className="items-center sm:flex">
            {
                data?.map(({ year, title, content }: TimeLineData, index: number) => {
                    const cyberCardClass = index%2 == 0 ? "" : "relative top-[-300px]";
                    const yearClass = index%2 == 0 ? "top-[-50px]" : "top-[20px]";
                    const arrowClass = index%2 == 0 ? "top-[30px]" : "top-[-32px] -scale-100";
                    const isLast = index === data.length - 1;

                    return (
                        <li key={year} className="relative mb-6 sm:mb-0 w-[160px] max-h-[200px]">
                            <div className="flex items-center">
                                <div className={`${index === 0 ? "sm:flex" : "hidden"} w-[25%] absolute left-[-25%] bg-gray-200 h-[10px] `}></div>
                                <span className="w-1.5 h-1.5 absolute bg-[#ff00ff] border-buffer rounded-full"></span>
                                <span className={`${styles.arrow} ${arrowClass} absolute left-[-4px]`}></span>
                                <div className={`${isLast ? "w-[25%]" : "w-full"} sm:flex bg-gray-200 h-[10px] `}></div>
                            </div>
                            <span className={`${styles.year} relative left-[-20px] ${yearClass}`}>{year}</span>
                            <CyberCard
                                className={`mt-8 -translate-x-1/2 ${cyberCardClass}`}
                                title={title}
                                content={content}
                            />
                        </li>
                    )
                })
            }
        </ol>


    );
}