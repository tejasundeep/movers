import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Footer.module.scss";

// Define an array of links to be used in the footer
const links = [
    { title: "About Us", href: "#about-us" },
    { title: "Contact Us", href: "#contact-us" },
    { title: "Privacy Policy", href: "#privacy-policy" },
    { title: "Join Our Network", href: "#join-our-network" },
    { title: "Vendor Login", href: "#vendor-login" },
    { title: "Unsubscribe", href: "#unsubscribe" },
    { title: "Site Map", href: "#site-map" },
    { title: "Link to Us", href: "#link-to-us" },
];

// Memoized component for rendering a list of links
const LinkList = memo(({ links }) => (
    <ul className={styles.footer__list}>
        {links.map((link) => (
            // Each link is rendered as a list item with a unique key
            <li key={link.href} className={styles.footer__item}>
                <a href={link.href}>{link.title}</a>
            </li>
        ))}
    </ul>
));

LinkList.displayName = 'LinkList';

// Memoized component for rendering a column of links in the footer
const FooterColumn = memo(({ start, end }) => (
    <Col xs={12} md={3} className={styles.footer__column}>
        {/* Slice the links array to get the links for this column */}
        <LinkList links={links.slice(start, end)} />
    </Col>
));

FooterColumn.displayName = 'FooterColumn';

// Memoized component for rendering security information in the footer
const FooterSecurity = memo(() => (
    <Col xs={12} md={3} className={styles.footer__secure}>
        <div className={styles.footer__securityText}>Secure and trusted</div>
        <div className={styles.footer__icons} aria-label="Security icons">
            <img className="me-2" src="/images/footer/mcafee-secure.webp" alt="Mcafee Secure" />
            <img className="mx-2" src="/images/footer/amsan.webp" alt="Asma" />
            <img className="ms-2" src="/images/footer/accredtd-bsnes.webp" alt="Accredited Business" />
        </div>
        <div className={styles.footer__copyright}>
            &copy; 2024 Movers.com
        </div>
    </Col>
));

FooterSecurity.displayName = 'FooterSecurity';

// Main Footer component
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row>
                    {/* Render the three columns of links */}
                    <FooterColumn start={0} end={3} />
                    <FooterColumn start={3} end={6} />
                    <FooterColumn start={6} end={8} />
                    {/* Render the security information */}
                    <FooterSecurity />
                </Row>
            </Container>
        </footer>
    );
};

// Export the memoized Footer component
export default memo(Footer);
