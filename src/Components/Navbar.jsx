import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Link, Events, scrollSpy } from 'react-scroll';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    const handleSetActive = (to) => {
        if (showMenu) {
            closeMenu();
        }
    };

    // Configuración de scrollSpy
    Events.scrollEvent.register('begin', function () {
        console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
        console.log("end", arguments);
    });

    scrollSpy.update();

    return (
        <nav className="navbar">
            <button
                className={`menu-btn ${showMenu ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
            <ul className={`nav-menu ${showMenu ? 'show' : ''}`}>
                <li>
                    <Link
                        to="Home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={900}
                        onClick={closeMenu}
                        activeClass="active"
                        onSetActive={handleSetActive}
                    >
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link
                        to="Acercade"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={900}
                        onClick={closeMenu}
                        activeClass="active"
                        onSetActive={handleSetActive}
                    >
                        Acerca de
                    </Link>
                </li>
                <li>
                    <Link
                        to="Servicios"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={900}
                        onClick={closeMenu}
                        activeClass="active"
                        onSetActive={handleSetActive}
                    >
                        Servicios
                    </Link>
                </li>
                <li>
                    <Link
                        to="Educacion"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={900}
                        onClick={closeMenu}
                        activeClass="active"
                        onSetActive={handleSetActive}
                    >
                        Educación
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
