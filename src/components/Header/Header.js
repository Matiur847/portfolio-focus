import React, { useRef } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';

import '../../style/Header.css'

const Header = () => {
    
    
    const menuRef = useRef(null)
    const headerRef = useRef(null)
    

    const toggleMenu = () => menuRef.current.classList.toggle('show-menu')

    const navMenu = [
        {
            path: '/home',
            display: 'Home'
        },
        {
            path: '/about',
            display: 'About'
        },
        {
            path: '/works',
            display: 'Works'
        },
        {
            path: '/contact',
            display: 'Contact'
        },
    ]

    return (
        <header className="header header-shrink" ref={headerRef}>
            <Container>
                <div className="nav_wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h3>Focu<span className='focus'>S</span></h3>
                    </div>
                    <div>
                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <div className="menu d-flex align-item-center">
                                <Link to={'/home'}>Home</Link>
                                <Link to={'/about'}>About</Link>
                                <Link to={'/works'}>Works</Link>
                                <Link to={'/contact'}>Contact</Link>
                                <div className="close-btn">
                                    <i class="ri-close-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div className="nav_right d-flex align-item-center gap-3">
                            <span className="mobile-menu" onClick={toggleMenu}>
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                    <div className="menu-btn">
                        <Link to='/contact'>
                            <Button>Let's Talk</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;