import React from 'react'
import styles from "./navbar.module.scss"
import { useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube  } from "react-icons/fa";

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
            <h1 className={`${styles.logo} ${navbarIsOpen ? styles.active : ""}`}>Akash Srinivasan</h1>
            <div className={styles.buttons}>
                <button className={styles.getStarted}>Get In Touch</button>
                <button onClick={handleNavBar} className={`${styles.hamburger} ${navbarIsOpen ? styles.active : ""}`}>
                    <div></div>
                </button>
            </div>

            <div className={`${styles.navItems} ${navbarIsOpen ? styles.active : ""}`}>
                <div className={styles.left}>
                    <div className={styles.socials}>
                        <FaGithub size={60}/>
                        <FaLinkedin size={60}/>
                        <FaTwitter size={60}/>
                        <FaYoutube size={60}/>
                        <FaInstagram size={60}/>
                    </div>
                    <div className={styles.contact}>
                        <h1 className={styles.getInTouch}>GET IN TOUCH</h1>
                        <p className={styles.mail}>prashanthiakash@gmail.com</p>
                        <p className={styles.phone}>+91 7676856815, Akash</p>
                    </div>
                </div>
                <div className={styles.links}>
                    <h2>PORTFOLIO</h2>
                    <h2>RESUME</h2>
                    <h2>CONTACT US</h2>
                    <h2>MY CAREER</h2>
                    <h2>YOUTUBE</h2>
                </div>
            </div>
        </div>
    )
}
