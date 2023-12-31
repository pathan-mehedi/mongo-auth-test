"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className='header'>
            <nav className='nav'>
                <Link href='/'>
                    <Image
                        src='/logo.png'
                        alt='Logo'
                        className='logo'
                        width={80}
                        height={40}
                    />
                </Link>
                <button
                    className={`mobileMenuButton ${
                        isMobileMenuOpen ? "open" : ""
                    }`}
                    onClick={toggleMobileMenu}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </button>
                <ul className={`navLinks ${isMobileMenuOpen ? "open" : ""}`}>
                    <li>
                        <Link href='/' className='menu_link'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/signup' className='menu_link'>
                            Sign Up
                        </Link>
                    </li>
                    <li>
                        <Link href='/login' className='menu_link'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link href='/dashboard' className='menu_link'>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact' className='menu_link'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
