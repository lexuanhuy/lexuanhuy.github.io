"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className={styles.navbar}>
            <Link className={`${styles.navbarBtn} ${pathname === '/' ? styles.active : ''}`} href="/">
                hello
            </Link>

            <Link
                className={`${styles.navbarBtn} ${pathname === '/about-me' ? styles.active : ''}`} href="/about-me">
                about me
            </Link>
            <Link
                className={`${styles.navbarBtn} ${pathname === '/projects' ? styles.active : ''}`} href="/projects">
                projects
            </Link>
        </nav>
    );
}