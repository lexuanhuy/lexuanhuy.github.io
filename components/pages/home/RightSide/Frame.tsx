import React, { ReactNode } from "react";
import styles from "./Frame.module.scss";

export const Frame: React.FC<React.PropsWithChildren & { className?: string, title?: ReactNode }> = ({ className, children, title }) => {
    return (
        <div className={`${styles.frameWrapper} ${className}`}>
            <div className={`${styles.frameContent}`}>
                {title && <div className={`${styles.frameTitle}`}>{title}</div>}
                {children}
            </div>
        </div>
    )
}