import React, { memo } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "@/styles/OtherService.module.scss";

// Single Responsibility Principle: ServiceLink is responsible only for rendering the link
const ServiceLink = memo(({ href, text }) => (
    <p className={styles["other-service__text"]}>
        {text}
        <Link href={href}>
            {href.split("/")[0].replace("-", " ").replace(".html", "")}
        </Link>{" "}
        in Georgia
    </p>
));

ServiceLink.displayName = ServiceLink;

ServiceLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

// Open/Closed Principle: Easily extendable with more services without modifying the component itself
const services = [
    {
        href: "auto-transport/georgia.html",
        text: "Time for your car to be driven? Get the best of ",
    },
    {
        href: "international-movers/georgia.html",
        text: "Choose the best of ",
    },
    {
        href: "local-movers.html",
        text: "Get moving estimates out of ",
    },
    {
        href: "long-distance-movers.html",
        text: "Free moving quotes from ",
    },
];

// Single Responsibility Principle: OtherService is responsible for rendering the list of services
const OtherService = () => (
    <div className={styles["other-service"]}>
        <Container>
            <div className={styles["other-service__title"]}>
                <h2>Find Other Moving Services near Georgia</h2>
            </div>
            {services.map((service, index) => (
                <ServiceLink key={index} href={service.href} text={service.text} />
            ))}
        </Container>
    </div>
);

export default memo(OtherService);
