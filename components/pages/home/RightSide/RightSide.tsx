import { Frame } from "./Frame";
import { ListFrame } from "./ListFrame";
import styles from "./RightSide.module.scss";
import { Tag } from "./Tag";

export const RightSide = ({ className }: { className?: string }) => {
    return (
        <div className={`flex items-center flex-col justify-center ${className}`}>
            <Frame className="w-[75%] mb-4" title="Skills">
                <div className=" flex justify-center flex-wrap">
                    <Tag className="mr-2 mb-2">React</Tag>
                    <Tag className="mr-2 mb-2">Next.js</Tag>
                    <Tag className="mr-2 mb-2">TypeScript</Tag>
                    <Tag className="mr-2 mb-2">JavaScript</Tag>
                    <Tag className="mr-2 mb-2">VueJS</Tag>
                    <Tag className="mr-2 mb-2">Tailwind</Tag>
                    <Tag className="mr-2 mb-2">SCSS</Tag>
                    <Tag className="mr-2 mb-2">Zustand</Tag>
                    <Tag className="mr-2 mb-2">Git</Tag>
                    <Tag className="mr-2 mb-2">Vite</Tag>
                    <Tag className="mr-2 mb-2">Webpack</Tag>
                    <Tag className="mr-2 mb-2">CI/CD</Tag>
                    <Tag className="mr-2 mb-2">Github Action</Tag>
                </div>
            </Frame>
            <Frame className="w-[75%] mb-4" title="Stats">
                <ul className={styles.list}>
                    <li className={styles.listItem}><ListFrame>Experience: 6 years</ListFrame></li>
                    <li className={styles.listItem}><ListFrame>Status: READY FOR HIRE</ListFrame></li>
                    <li className={styles.listItem}><ListFrame>Current Focus: Learning new skills</ListFrame></li>
                    {/* <li className={styles.listItem}><ListFrame>Target: Looking for Frontend Developer opportunities</ListFrame></li> */}
                </ul>
            </Frame>
        </div>
    )
}