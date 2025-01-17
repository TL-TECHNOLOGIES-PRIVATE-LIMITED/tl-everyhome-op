'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as Link1 } from "react-scroll"

export default function NavOnePage() {
    let [scroll, setScroll] = useState(false);
    let [isMenu, setisMenu] = useState(false);

    useEffect(() => {
        function scrollHandler() {
            setScroll(window.scrollY > 50)
        }
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', scrollHandler);
            window.scrollTo(0, 0);
        }
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };
    return (
        <>
            <header id="topnav" className={`${scroll ? "nav-sticky" : ""} defaultscroll sticky`}>
                <div className="container">
                    <Link className="logo" href="/">
                        <span className="logo-light-mode">
                            <Image src="/images/eh-logo2.png" width={110} height={130} className="l-dark" alt="Every Home Logo" />
                            <Image src='/images/eh-logo2.png' width={110} height={130} className="l-light" alt="Every Home Logo" />
                        </span>
                        <Image src='/images/eh-logo2.png' width={110} height={130} className="logo-dark-mode" alt="Every Home Logo" />
                    </Link>
                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <ul className="buy-button list-inline mb-0">
                        <li className="list-inline-item ps-1 mb-0">
                            <Link1 to="download" spy={true} smooth={true} duration={500} target="_blank">
                                <div className="btn btn-primary">Download</div>
                            </Link1>
                        </li>
                    </ul>

                    <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                        <ul className="navigation-menu nav-light nav-right" id="navmenu-nav">
                            <li className="has-submenu">
                                <Link1 to="home" spy={true} smooth={true} duration={500} activeClass="active">Home</Link1>
                            </li>
                            <li className="has-submenu">
                                <Link1 to="Features" spy={true} smooth={true} duration={500} activeClass="active">Features</Link1>
                            </li>
                            <li className="has-submenu">
                                <Link1 to="Pricing" spy={true} smooth={true} duration={500} activeClass="active">Pricing</Link1>
                            </li>
                            <li className="has-submenu">
                                <Link1 to="Faq" spy={true} smooth={true} duration={500} activeClass="active">Faq</Link1>
                            </li>
                            {/* <li className="has-submenu">
                                <Link1 to="Contact" spy={true} smooth={true} duration={500} activeClass="active">Contact</Link1>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}