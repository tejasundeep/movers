import React, { useMemo, memo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/CheapMovers.module.scss';
import { SlPin } from "react-icons/sl";

// Static Data
const staticData = {
    moversNearByCities: [
        'Movers in Ogontz Campus',
        'Movers in Jenkintown',
        'Movers in Rydal, PA',
        'Movers in Hollywood, PA',
        'Movers in Meadowbrook, PA',
        'Movers in Boyers Junction'
    ],
    movingServicesInAbington: [
        'Abington, PA Auto Transport',
        'Abington, PA International Movers'
    ]
};

// Movers List Component
const MoversList = memo(({ items, md }) => (
    <Col md={md} className={styles['movers-component__section']}>
        <ul className={styles['movers-component__list']}>
            {items.map((item, index) => (
                <li key={index} className={styles['movers-component__list-item']}>
                    <a href="#!" className='fw-bold'><SlPin /> {item}</a>
                </li>
            ))}
        </ul>
    </Col>
));

MoversList.displayName = 'MoversList';

// Split Array Utility Function
const splitArray = (arr) => {
    const half = Math.ceil(arr.length / 2);
    return [arr.slice(0, half), arr.slice(half)];
};

// Main Component
const CheapMovers = () => {
    const { moversNearByCities, movingServicesInAbington } = staticData;

    const [leftColumn, rightColumn] = useMemo(() => splitArray(moversNearByCities), [moversNearByCities]);

    return (
        <section className={styles['movers-component']}>
            <Container>
                <Row>
                    <Col md={7}>
                        <h3 className={`fw-bolder ${styles['movers-component__title']}`}>Find Cheap Movers near by cities</h3>
                        <Row>
                            <MoversList items={leftColumn} md={6} />
                            <MoversList items={rightColumn} md={6} />
                        </Row>
                    </Col>
                    <Col md={5}>
                        <h3 className={`fw-bolder ${styles['movers-component__title']}`}>Moving Services in Abington, PA</h3>
                        <MoversList items={movingServicesInAbington} md={12} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default memo(CheapMovers);
