import { ProjectCard } from "@/components/pages/project/ProjectCard/ProjectCard";
import { ReactNode } from "react";
import { FaReact } from "react-icons/fa";
import UIEffectsLabImg from "@/public/images/ui-effects-lab.png";
import Image from "next/image";

export type ProjectData = {
    title: string;
    icon?: ReactNode;
    description?: string;
    githubLink?: string;
}

const projects: Array<ProjectData> = [
    {
        title: "ui-effects-lab",
        icon: <FaReact />,
        description: "A project to store and review code for effects",
        githubLink: "https://github.com/lexuanhuy/ui-effects-lab"
    }
]

export default function ProjectPage() {
    return <div className="h-full flex justify-center items-center font-(family-name:--font-orbitron) overflow-auto">
        <div className="flex flex-wrap gap-12 justify-center">
            {
                projects?.map(({ title, icon, description, githubLink }) => {
                    return (
                        <ProjectCard key={title} icon={icon} title={title} githubLink={githubLink}>
                            <Image className="mb-3" src={UIEffectsLabImg} height={150} alt={title} />
                            <div>{description}</div>
                        </ProjectCard>
                    )
                })
            }
        </div>
    </div>
}