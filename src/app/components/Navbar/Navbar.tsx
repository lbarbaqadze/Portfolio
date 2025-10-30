'use client'

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Navbar.module.css";

type Props = {
    style?: React.CSSProperties
}

export default function Navbar({ style }: Props) {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    useEffect(() => {
        AOS.init({
            once: false,
            mirror: true,
        });
    }, []);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <nav
            className={`navbar ${styles.container}`}
            style={style}
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-offset="0"
        >
            <div className={`container-fluid ${styles.containerFluid}`}>
                <div className={styles.menu}>
                    <ul>
                        <li>
                            <a
                                className={styles.link}
                                href="#about"
                                onClick={(e) => { e.preventDefault(); handleScroll('about'); }}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                className={styles.link}
                                href="#projects"
                                onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                className={styles.link}
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
