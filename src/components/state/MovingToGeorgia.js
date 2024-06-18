import React, { memo } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import * as Icons from "react-icons/fa";
import styles from "@/styles/MovingToGeorgia.module.scss";

const cardData = [
    {
        icon: "FaTree",
        title: "Georgia Climate",
        text: `Georgia is characterized by a humid subtropical climate with mild temperatures that range from cool in the winter time to very hot and humid during the summer months. Georgia is surrounded by the Ridge-and-Valley Appalachians in the northwest, the Blue Ridge Mountains in the northeast, the Piedmont plateau in the central portion of the state and the Central Plain in the south.`,
    },
    {
        icon: "FaCar",
        title: "Registering your Car",
        text: `You have 30 days to register your car in Georgia from the date of the beginning of your residency in the state of Georgia. Registration is done at the Tax Commissioners Tag Office in the county where you are residing. Failure to do so might result in fines of up to $100 if stopped by local law enforcement.`,
    },
    {
        icon: "FaBalanceScale",
        title: "Obtaining a Georgia Drivers License",
        text: `A driver’s license should be obtained within 30 days of becoming a resident of the state of Georgia. Customer service centers at the Georgia Department of Driver Services will help you in transferring an out-of-state license to a Georgia license. The state also has a provision for exchanging a valid or expired (less than two years) out-of-state license for a Georgia license. Driver’s licenses held by residents of other countries are acceptable in Georgia as long as they are valid.`,
    },
    {
        icon: "FaExclamationTriangle",
        title: "Crime Rankings",
        text: `As of 2011, Georgia was ranked 32nd out of 50 states in violent crime, with a total of less than 400 violent crimes for every 100,000 people in the state.`,
    },
    {
        icon: "FaIndustry",
        title: "Industries",
        text: `Georgia is mainly involved in agricultural products and the food industry. It is the leading producer of pecans in the world and the production of pecans is mainly concentrated around the region of Albany. Other industrial products include textiles, paper products, chemical products and electrical equipment. Tourism also contributes to the growth of the economy.`,
    },
    {
        icon: "FaMoneyBill",
        title: "Employment Statistics",
        text: `The unemployment rate as of March 2012 in Georgia was 9%, about 0.8% above the national level. However, when compared to the unemployment figure from October 2011, the rate has decreased by 1.5 percentage points.`,
    },
    {
        icon: "FaMoneyBill",
        title: "Average Income",
        text: `The median household income in the state of Georgia is $49,347, while the average per capita income for the state is $36,104.`,
    },
    {
        icon: "FaHome",
        title: "Real Estate",
        text: `The average listing price for homes in Georgia is $254,359, while the median sales price is just over $172,000. The Georgia Association of Realtors is the official real estate association for the state of Georgia.`,
    },
    {
        icon: "FaUniversity",
        title: "Schools",
        text: `The state of Georgia has long since adopted a standard in public school education to test the aptitude of public school students in several core subjects. The End of Course Test (EOCT) and Georgia High School Graduation Test (GHSGT) are administered to high school students yearly and help to keep the students of Georgia schools on par with other school systems around the nation.`,
    },
    {
        icon: "FaTree",
        title: "National Parks",
        text: `Chattahoochee River National Park, Augusta Canal National Park, Chickamauga and Chattanooga National Military Park, Kennesaw Mountain National Battlefield Park.`,
    },
    {
        icon: "FaTree",
        title: "State Park System",
        text: `The Georgia Department of Natural Resources and National Park Service oversee about 63 parks in the state of Georgia, out of which 15 are historic sites and 48 are state parks.`,
    },
    {
        icon: "FaPlane",
        title: "Major Airports",
        text: `Atlanta Hartsfield-Jackson International Airport, Augusta Regional Airport, Columbus Metropolitan Airport, Middle Georgia Regional Airport, McKinnon-St. Simons Island Airport.`,
    },
];

const CardItem = memo(({ icon, title, text }) => {
    const Icon = Icons[icon];
    return (
        <Col md={6}>
            <Card className={styles.movingToGeorgiaCard}>
                <Card.Body className="d-flex">
                    <div className="me-3">
                        <Icon />
                    </div>
                    <div>
                        <Card.Title className="fs-4 fw-bolder">{title}</Card.Title>
                        <Card.Text>{text}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
});

CardItem.displayName = 'CardItem';

const MovingToGeorgia = () => {
    return (
        <Container className={`${styles.movingToGeorgia} my-5`}>
            <h2 className={`${styles.movingToGeorgiaTitle} fs-4 fw-bolder mb-4`}>Moving to Georgia?</h2>
            <p className={styles.movingToGeorgiaIntro}>
                {`Tucked in the southeastern corner of the United States, Georgia was one of the original Confederate states that has been the nerve center of the Civil War and has witnessed General William Tecumseh Sherman's March to the Sea. Georgia is known by the nicknames "Peach State" and the "Empire State of the South."
        With a southern antebellum atmosphere and headquartered around 26 Fortune 1000 companies such as Home Depot, UPS, and Coca Cola, Georgia beckons one and all and has anchored its roots in a rich cultural heritage.
        If you’re moving to Georgia, there are a lot of things you’re going to need to know. Luckily, you’ve come to the right place.`}
            </p>
            <h2 className={`${styles.movingToGeorgiaTitle} fs-4 fw-bolder mt-5 mb-4`}>
                Things to Know When Moving to Georgia
            </h2>
            <Row className={styles.movingToGeorgiaContent}>
                {cardData.map((card, index) => (
                    <CardItem 
                        key={index} 
                        icon={card.icon} 
                        title={card.title} 
                        text={card.text} 
                    />
                ))}
            </Row>
        </Container>
    );
};

export default memo(MovingToGeorgia);
