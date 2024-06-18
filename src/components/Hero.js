import React, { useState, useCallback, memo } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { SlLocationPin } from "react-icons/sl";
import Image from 'next/legacy/image';
import styles from '@/styles/Hero.module.scss';

// Input component to handle zip code input
const ZipCodeInput = memo(({ zipCode, onInputChange }) => (
    <div className="d-flex align-items-center">
        <SlLocationPin size={24} />
        <Form.Control
            type="text"
            placeholder="Moving From Zip Code"
            className={`rounded-pill py-3 my-3`}
            value={zipCode}
            onChange={onInputChange}
        />
    </div>
));

ZipCodeInput.displayName = ZipCodeInput;

// Form component to handle form submission
const ZipCodeForm = memo(({ zipCode, onInputChange, onSubmit }) => (
    <Form className={styles.hero__search} onSubmit={onSubmit}>
        <ZipCodeInput zipCode={zipCode} onInputChange={onInputChange} />
        <Button
            type="submit"
            variant="success"
            className="w-100 rounded-pill px-4 py-2 fw-bold fs-4"
        >
            Get Free Quotes
        </Button>
    </Form>
));

ZipCodeForm.displayName = ZipCodeForm;

// Hero component
const Hero = () => {
    const [zipCode, setZipCode] = useState('');

    const handleInputChange = useCallback((e) => {
        setZipCode(e.target.value);
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log(`Moving from Zip Code: ${zipCode}`);
    }, [zipCode]);

    return (
        <div className={styles.hero}>
            <Image
                src="/images/city_banner.webp"
                alt="City Banner"
                layout="fill"
                priority={true}
            />
            <Container className='py-5'>
                <h1 className={`${styles.hero__title} fs-1 fw-bold pt-5 pb-4 text-center`}>
                    Best Movers in Abington PA - Get Free Moving Quotes
                </h1>
                <ZipCodeForm 
                    zipCode={zipCode} 
                    onInputChange={handleInputChange} 
                    onSubmit={handleSubmit} 
                />
            </Container>
        </div>
    );
};

export default memo(Hero);
