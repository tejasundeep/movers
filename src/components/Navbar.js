import React, { useState, useCallback } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.scss';

// NavLinks Component
const NavLinks = React.memo(({ links }) => {
    return (
        <>
            {links.map((link, index) => (
                <Link key={index} href={link.href} passHref legacyBehavior>
                    <Nav.Link>{link.label}</Nav.Link>
                </Link>
            ))}
        </>
    );
});

NavLinks.displayName = 'NavLinks';

// DropdownLinks Component
const DropdownLinks = React.memo(({ links }) => {
    return (
        <>
            {links.map((link, index) => (
                <Link key={index} href={link.href} passHref legacyBehavior>
                    <NavDropdown.Item>{link.label}</NavDropdown.Item>
                </Link>
            ))}
        </>
    );
});

DropdownLinks.displayName = 'DropdownLinks';

// NavBar Component
const NavBar = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = useCallback((isShown) => () => {
        setShowSubMenu(isShown);
    }, []);

    const navLinks = [
        { href: "/", label: "Local Movers" },
        { href: "/", label: "Long Distance Movers" },
        { href: "/", label: "Auto Transport" },
        { href: "/", label: "International Movers" }
    ];

    const dropdownLinks = [
        { href: "/tips", label: "Moving Tips" },
        { href: "/checklist", label: "Moving Checklist" },
        { href: "/faq", label: "FAQs" }
    ];

    return (
        <Navbar bg="light" expand="xl" className={styles.NavBar__container}>
            <Container>
                <Link href="/" passHref>
                    <Navbar.Brand className={styles.NavBar__container__brand}>
                        <img src="/logo.png" alt="Movers" title="Movers" width={230} height={35} />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-NavBar-nav" />
                <Navbar.Collapse id="basic-NavBar-nav" className="justify-content-end">
                    <Nav className={`ml-auto flex-wrap ${styles.NavBar__container__menu}`}>
                        <NavLinks links={navLinks} />
                        <NavDropdown
                            title="Moving Info"
                            id="moving-info-dropdown"
                            show={showSubMenu}
                            onMouseEnter={toggleSubMenu(true)}
                            onMouseLeave={toggleSubMenu(false)}
                        >
                            <DropdownLinks links={dropdownLinks} />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

Navbar.displayName = 'NavBar';

export default React.memo(NavBar);
