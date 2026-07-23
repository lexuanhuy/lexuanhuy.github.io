import React from "react";
import styles from "./ListFrame.module.scss";

export const ListFrame: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (<div className={styles.listFrameWrapper}>
        <div className={styles.listFrameContent}>
            {children}
        </div>
    </div>)
}