import React, { useEffect, useState, memo, useCallback } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/Reviews.module.scss';
import Link from 'next/link';

// Static data for reviews
const staticReviews = [
    {
        id: 1,
        company: "Eurmove",
        title: "Beware! Eurmove make multiple unauthorized charges to credit card",
        review: "DO NOT USE EURMOVE! Our daughter used Eurmove and had a wonderful experience. In light of this we contracted with Eurmove for our relocation. Our move went flawlessly and we were very pleased. Then the...",
        reviewer: "Dr.",
        date: "March 20, 2024",
        rating: 2,
    },
    {
        id: 2,
        company: "AM Moving Services Inc",
        title: "McQ",
        review: ", under the leadership of Alexander McQueen's Am Moving Services Inc. +1 (805)-301 7006 phone number +1 (805)-301 7006 customer service number is +1 (805)-301 7006 phone number +1 (805)-301 7006 creative...",
        reviewer: "cutioe",
        date: "May 22, 2024",
        rating: 3,
    },
    {
        id: 3,
        company: "Your Neighbors Moving & Storage",
        title: "Amazing and seamless move!",
        review: "I was extremely stressed out for my move from Gunnison to Greeley, I was terrified that I would have been white knuckling it the entire drive in a Uhaul because I couldn't find a company anywhere close to me....",
        reviewer: "Rosie",
        date: "February 9, 2024",
        rating: 4,
    },
    {
        id: 4,
        company: "M&M Movers, Inc",
        title: "Careful, friendly service.",
        review: "In conclusion, if you're seeking movers who are not just reliable professionals but also genuinely care about your moving experience, look no further. This team went above and beyond, turning a potentially...",
        reviewer: "Edward-Wilson",
        date: "December 23, 2023",
        rating: 5,
    },
];

// ReviewCard component to display individual reviews
const ReviewCard = memo(({ review }) => (
    <Col key={review.id} sm={12} md={6}>
        <Card className={styles.reviews__card}>
            <Card.Body>
                <Link href={review.company} className='fw-bolder fs-5'>{review.company}</Link>
                <Card.Title className={`${styles.reviews__title} mt-2`}>{review.title}</Card.Title>
                <Card.Text className={styles.reviews__text}>{review.review}</Card.Text>
                <div className={`${styles.reviews__footer} fs-2`}>
                    <div className={`${styles.reviews__reviewer} fw-bolder fs-6`}>{review.reviewer}, {review.date}</div>
                    <div className={styles.reviews__rating}>
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={i < review.rating ? styles.reviews__star_filled : styles.reviews__star_empty}>★</span>
                        ))}
                    </div>
                </div>
            </Card.Body>
        </Card>
    </Col>
));

ReviewCard.displayName = ReviewCard;

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    // Set static reviews when the component mounts
    useEffect(() => {
        setReviews(staticReviews);
    }, []);

    // Function to chunk reviews into smaller arrays of specified size
    const chunkedReviews = useCallback((arr, size) => {
        return arr.reduce((acc, _, i) => {
            if (i % size === 0) acc.push(arr.slice(i, i + size));
            return acc;
        }, []);
    }, []);

    return (
        <div className={styles.reviews}>
            <Container>
                <Row>
                    {chunkedReviews(reviews, 10).map((chunk, chunkIndex) => (
                        <React.Fragment key={chunkIndex}>
                            {chunk.map((review) => (
                                <ReviewCard key={review.id} review={review} />
                            ))}
                        </React.Fragment>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default memo(Reviews);
