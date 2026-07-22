"use client"
import styles from "./FooterNavbar.module.scss";

export const FooterNavbar = () => {
    return (
        <div className={`${styles.footerNavbar} ${styles.footerNavbarBorder}`}>
            <div className="invisible">.</div>
        </div>
    )
}