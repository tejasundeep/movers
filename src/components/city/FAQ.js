import React, { memo } from 'react';
import { Container, Accordion, Row, Col } from 'react-bootstrap';
import styles from "@/styles/Faq.module.scss";

// Memoize FAQItem to prevent unnecessary re-renders
const FAQItem = memo(({ eventKey, question, answer }) => (
    <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{question}</Accordion.Header>
        <Accordion.Body>{answer}</Accordion.Body>
    </Accordion.Item>
));

FAQItem.displayName = "FAQItem";

const FAQColumn = memo(({ column, colIndex }) => (
    <Col xs={12} md={4}>
        <Accordion defaultActiveKey="0">
            {column.map((item, index) => (
                <FAQItem key={`${colIndex}-${index}`} eventKey={(colIndex * column.length + index).toString()} {...item} />
            ))}
        </Accordion>
    </Col>
));

FAQColumn.displayName = "FAQColumn";

const FAQ = () => {
    // Static FAQ data
    const faqData = [
        {
            question: 'Can you switch my move type from small move to something bigger?',
            answer: 'Yes, you can switch your move type by contacting our customer service.',
        },
        {
            question: 'What if they damage your house while moving like breaking a door?',
            answer: 'Movers are liable for any damage caused during the move. Ensure to report any damages as soon as possible.',
        },
        {
            question: 'How can I reschedule my move?',
            answer: 'You can reschedule your move by contacting our customer service at least 24 hours in advance.',
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards, debit cards, and PayPal.',
        },
        {
            question: 'Do you offer packing services?',
            answer: 'Yes, we offer comprehensive packing services. Contact us for more details.',
        },
        {
            question: 'Are your movers insured?',
            answer: 'Yes, all our movers are fully insured for your peace of mind.',
        },
    ];

    const columns = [[], [], []];
    faqData.forEach((item, index) => {
        columns[index % 3].push(item);
    });

    return (
        <section className={styles.faq}>
            <Container className="py-4" aria-label="Frequently Asked Questions">
                <h2 className="mb-4 fw-bolder">Frequently Asked Questions</h2>
                <Row>
                    {columns.map((column, colIndex) => (
                        <FAQColumn key={colIndex} column={column} colIndex={colIndex} />
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default memo(FAQ);
