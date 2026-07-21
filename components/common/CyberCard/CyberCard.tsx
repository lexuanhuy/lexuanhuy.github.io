import { ReactNode } from "react";
import styles from "./CyberCard.module.scss";

export const CyberCard = ({ title, content, className }: { title: ReactNode, content: ReactNode, className?: string }) => {
    return (
        <div className={`${styles["cyberpunk-card-wrapper"]} ${className}`}>
            <div className={styles["cyberpunk-card-content"]}>
                <h3 className={styles["cyberpunk-card-title"]}>{title}</h3>
                <div>
                    {content}
                </div>
            </div>
        </div>
    )
}