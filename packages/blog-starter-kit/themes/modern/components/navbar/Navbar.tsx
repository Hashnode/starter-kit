import React from 'react'
import styles from "./navbar.module.scss"
import { useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { info } from "../../info.config"
import Link from 'next/link';

export default function Navbar() {

    const [navbarIsOpen, setNavbarIsOpen] = useState(false)

    function handleNavBar() {
        if (navbarIsOpen) setNavbarIsOpen(false)
        else {
            setNavbarIsOpen(true)
        }
    }
    return (
        <div className={styles.navbar}>
            <h1 className={`${styles.logo} ${navbarIsOpen ? styles.active : ""}`}>
                <Link href={"/"}>Akash Srinivasan</Link>
            </h1>
            <div className={styles.buttons}>
                <button className={styles.getStarted}>Get In Touch</button>
                <button onClick={handleNavBar} className={`${styles.hamburger} ${navbarIsOpen ? styles.active : ""}`}>
                    <div></div>
                </button>
            </div>

            <div className={`${styles.navItems} ${navbarIsOpen ? styles.active : ""}`}>
                <div className={styles.left}>
                    <div className={styles.socials}>
                        <a href={info.github}>
                            <FaGithub size={60} />
                        </a>
                        <a href={info.linkedIn}>
                            <FaLinkedin size={60} />
                        </a>
                        <a href={info.twitter}>
                            <FaTwitter size={60} />
                        </a>
                        <a href={info.youtube}>
                            <FaYoutube size={60} />
                        </a>
                        <a href={info.insta}>
                            <FaInstagram size={60} />
                        </a>
                    </div>
                    <div className={styles.contact}>
                        <h1 className={styles.getInTouch}>GET IN TOUCH</h1>
                        <p className={styles.mail}>{info.gmail}</p>
                        <p className={styles.phone}>{info.phoneNumber}, {info.displayName}</p>
                    </div>
                </div>
                <div className={styles.links}>
                    {
                        info.navLinks.map((item, index) => {
                            return (
                                <h2 key={index}>
                                    <a href={item.link}>{item.display}</a>
                                </h2>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
