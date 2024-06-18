import React, { memo } from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import styles from '@/styles/About.module.scss';

const About = () => {
    const data = {
        title: "About Movers",
        paragraphs: [
            "If you're looking for a Georgia Moving Company that can provide you with the best moving rates for your Local Move or Long Distance Move, then there is no better place to come than Movers.com!",
            "Here you'll find an extensive and constantly growing collection of licensed, insured GA Professional movers that are fully equipped to handle your next move with care, whether you're moving to Georgia or from GA.",
            "At Movers.com, we're aware that finding affordable and reliable Georgia residential movers can be a difficult process and put added stress on your relocation. So we make things easier for you by providing you with some of the best full service movers Georgia has to offer.",
            "Long Distance Moves bring with them a list of challenges that can be stressful for just about anyone, but finding a long distance moving company doesn't have to be one of those challenges. Movers.com takes pride in finding the best affordable Georgia long distance movers and it can be one of the easiest parts of the relocation. Whether it's interstate movers or GA out of state movers you're looking for, or whether you want GA full service moving companies, packing services, or simply furniture movers, you can find whatever you're looking for right here among our directory of Georgia movers.",
            "You'll be sure to find all that and more, as well as an extensive database of GA moving reviews, long distance movers, and local movers of Georgia at your disposal."
        ]
    };

    return (
        <Container as="section" className={styles.about}>
            <Breadcrumb className='fw-bolder mt-4'>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
            <h2 className='fw-bold fs-4'>{data.title}</h2>
            {data.paragraphs.map((paragraph, index) => (
                <Paragraph key={index} text={paragraph} />
            ))}
        </Container>
    );
};

const Paragraph = memo(({ text }) => {
    return <p>{text}</p>;
});

Paragraph.displayName = 'Paragraph';

export default memo(About);
