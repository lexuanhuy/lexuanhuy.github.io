import { TypeWriter } from "@/components/common/TypeWriter/TypeWriter";
import styles from "./LeftSide.module.scss";

export const LeftSide = ({ className }: { className?: string }) => {
    return (
        <div className={`${styles.leftSide} ${className}`}>
            <div>
                <div className="mb-20">
                    <div className="text-[18px]">Hi, I am</div>
                    <div className="text-[58px]">Le Xuan Huy</div>
                    <div className="text-[32px] text-[#4d5bce] py-2 d-flex">
                        {`>`}<TypeWriter words={["Front-end developer"]} />
                    </div>
                </div>
                <div className="font-semibold">
                    <p className="text-gray-500">{`// you can also see me on my social pages`}</p>
                    <p>
                        <span className="text-[#4d5bce]">const </span>
                        <span className="text-[#43d9ad]">githubLink </span>
                        <span>= </span>
                        <a href="https://github.com/lexuanhuy" target="_blank" className="text-[#e99287] underline">{`"https://github.com/lexuanhuy"`}</a>
                    </p>
                </div>
                <div className="font-semibold">
                    {/* <p className="text-gray-500">{`// you can also see me on my Github page`}</p> */}
                    <p>
                        <span className="text-[#4d5bce]">const </span>
                        <span className="text-[#43d9ad]">linkedinLink </span>
                        <span>= </span>
                        <a href="https://www.linkedin.com/in/huylx/" target="_blank" className="text-[#e99287] underline">{`"https://www.linkedin.com/in/huylx/"`}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}