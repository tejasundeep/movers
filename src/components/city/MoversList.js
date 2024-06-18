import React, { useState, memo } from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import styles from '@/styles/MoversList.module.scss';

// Memoized MoverItem to prevent unnecessary re-renders
const MoverItem = memo(({ mover, index }) => {
    return (
        <Row className={`${styles.moversList__item} mb-3`}>
            <Col xs={12} md={4} className="d-flex flex-column justify-content-center">
                <h2 className="text-primary fw-bolder fs-4">{mover.name}</h2>
            </Col>
            <Col xs={12} md={4} className="d-flex flex-column justify-content-center">
                <p className="mb-1">{mover.address}</p>
                <p>{mover.phone}</p>
            </Col>
            <Col xs={12} md={4} className="d-flex align-items-center justify-content-md-end justify-content-start">
                <div className="text-md-right text-left fs-5 fw-bolder">
                    {Array.from({ length: mover.reviews }).map((_, i) => (
                        <FaStar key={`${index}-${i}`} className="icon text-warning" />
                    ))}
                    <span className="ml-2 ms-2">({mover.reviews} Reviews)</span>
                </div>
            </Col>
        </Row>
    );
});

MoverItem.displayName = 'MoverItem';

const MoversList = () => {
    const staticMovers = [
        {
            name: 'Wade Odell Wade',
            address: '80 Greenwood Ave, Midland Park, NJ 07432',
            phone: '201-493-9300',
            reviews: 5,
        },
        {
            name: 'Adams Moving & Hauling, Inc.',
            address: '536 N Trooper Rd Ste 1A, Norristown, PA 19403',
            phone: '610-650-8321',
            reviews: 5,
        },
        // Add other movers here...
    ];

    const [movers] = useState(staticMovers);

    return (
        <Container className={`${styles.moversList} py-3`}>
            <Row>
                <Col>
                    <Breadcrumb className="fw-bolder">
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2 className="fw-bold mb-3">Economical Movers in Abington, PA</h2>
                    <p className="pb-5">
                        {`**Move Smart, Not Hard: Your Guide to Affordable Movers in Abington, Pennsylvania 🚚💼**
                        Don't let your move break the bank! Check out our top picks for 🏠📦 affordable Abington, PA movers who deliver quality services without the high price💰 tag.
                        Just hit the 'Get Quotes' button and fill out a quick form. Within minutes⏱, you'll get up to seven free estimates from Abington's most trusted movers.`}
                    </p>
                </Col>
            </Row>
            {movers.map((mover, index) => (
                <MoverItem key={`${mover.name}-${index}`} mover={mover} index={index} />
            ))}
            <p className={`${styles.moversList__disclaimer} mt-4`}>
                Disclaimer: This information is not endorsed by Movers.com, and we recommend you check the profiles of these companies before choosing them.
                This public information was drawn from the regional Yellow Pages. Please take a moment to carefully read through the User Agreement before submitting the form.
            </p>
        </Container>
    );
};

export default memo(MoversList);
