import React, { memo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/Journey.module.scss';

const JourneyStep = memo(({ icon, title, description }) => (
    <Col xs={12} md={6} lg={3} className={styles.journey__step}>
        <img className={styles.journey__step__icon} src={icon} alt={title} width={140} height={140} />
        <h3 className={styles.journey__step__title}>{title}</h3>
        <p className={styles.journey__step__description}>{description}</p>
    </Col>
));

JourneyStep.displayName = 'JourneyStep';

const steps = [
    {
        icon: "/images/journey/frmnt.png",
        title: 'Fill Out Quote Form',
        description: 'Submit information, such as move date and size of the move, on our easy online form. We will help you locate the best moving companies near Abington, PA.',
    },
    {
        icon: "/images/journey/chsemvrs.png",
        title: 'Receive Estimates',
        description: 'Get FREE, no obligation moving quotes from professional movers in our network. All Abington moving companies are pre-screened, licensed and insured.',
    },
    {
        icon: "/images/journey/qts-save.png",
        title: 'Compare Movers',
        description: 'Compare estimates, check reviews from real people and hire a moving company with peace of mind. Feel confident while saving time and money.',
    },
    {
        icon: "/images/journey/rdhlp.png",
        title: 'Read Moving Guides',
        description: 'Read moving guides, watch moving videos, listen to podcasts and follow us on social media for helpful moving advice and packing tips.',
    },
];

const Journey = () => {
    return (
        <Container className={`py-5 ${styles.journey}`}>
            <Row>
                {steps.map((step, index) => (
                    <JourneyStep key={index} {...step} />
                ))}
            </Row>
        </Container>
    );
};

export default memo(Journey);
