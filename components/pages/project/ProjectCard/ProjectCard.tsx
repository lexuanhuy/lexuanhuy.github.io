import React, { ReactNode } from "react";
import styles from "./ProjectCard.module.scss";

export const ProjectCard: React.FC<React.PropsWithChildren & { className?: string, icon?: ReactNode, title?: string, githubLink?: string }> = ({ children, className, icon, title, githubLink }) => {
    return (
        <div className={`${styles.projectCard} min-w-[250px] max-w-[350px] ${className}`}>
            <span className={`${styles.projectCardTitle} px-2`}>{title}</span>
            <div className={`${styles.projectCardWrapper}`}>
                <div className={styles.projectCardContainer}>
                    {children}
                </div>
            </div>
            <span className={`${styles.projectCardCircleIcon} flex items-center justify-center`}>
                {icon}
            </span>
            {
                githubLink &&
                <a href={githubLink} target="_blank" className={`${styles.projectCardLink} px-2`}>view project</a>
            }
        </div>
    )
}