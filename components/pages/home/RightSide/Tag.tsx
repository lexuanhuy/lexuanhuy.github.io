import React from "react";
import styles from "./Tag.module.scss";

export const Tag: React.FC<React.PropsWithChildren & {className?: string}> = ({ children, className }) => {
    return (
        <span className={`${styles.tag} ${className}`}>{children}</span>
    )
}