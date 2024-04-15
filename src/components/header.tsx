import { useState } from "react";


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header">
            <div id="header-icon">
                <p>DDAWG</p>
            </div>
            <div>
            <div className="header-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <svg viewBox="0 0 100 80" width="25" height="40">
                    <rect width="100" height="10" fill="#ffffff"></rect>
                    <rect y="30" width="100" height="10" fill="#ffffff"></rect>
                    <rect y="60" width="100" height="10" fill="#ffffff"></rect>
                </svg>
            </div>
            <ul className={`nav-menu ${menuOpen ? "open" : "closed"}`}>
               <li><a className="header-item" href="/about">About</a><span className="header-spacer">|</span></li>
               <li><a className="header-item" href="/portfolio">Portfolio</a><span className="header-spacer">|</span></li>
               <li><a className="header-item" href="/resume">Resume</a><span className="header-spacer">|</span></li>
               <li><a className="header-item" href="/contact">Contact</a></li>
            </ul>
            </div>
        </div>
    )
}

export default Header;
