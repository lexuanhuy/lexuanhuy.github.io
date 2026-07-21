import styles from './CyberFrame.module.scss';

export const CyberFrame: React.FC<React.PropsWithChildren & { className?: string; classNameContent?: string; }> = ({ children, className, classNameContent }) => {
    return (
        <div className={`${styles["cyber-wrapper-box"]} ${className}`}>
            <div className={`${styles["cyber-content-box"]} ${classNameContent}`}>
                <div className={styles["css-blurry-gradient-blue"]}></div>
                <div className={styles["css-blurry-gradient-green"]}></div>
                {children}
            </div>
        </div>
    )
}