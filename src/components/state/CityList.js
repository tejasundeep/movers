import React, { useMemo, memo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/CityList.module.scss';
import Link from 'next/link';

// Static list of cities
const cities = [
    "ACWORTH, GA", "ALBANY, GA", "ALPHARETTA, GA", "AMERICUS, GA", "ATHENS, GA",
    "ATLANTA, GA", "AUGUSTA, GA", "AUSTELL, GA", "BARRETT PARKWAY", "BELVEDERE, GA",
    "BERKELEY LAKE", "BLACKSHEAR", "BRUNSWICK, GA", "BUFORD, GA", "CALHOUN, GA",
    "CANTON, GA", "CARROLLTON, GA", "CARTERSVILLE, GA", "CEDARTOWN, GA", "CHAMBLEE",
    "CHATSWORTH, GA", "CLARKSTON, GA", "COLLEGE PARK, GA", "COLUMBUS, GA", "CONYERS",
    "CORDELE, GA", "COVINGTON, GA", "CUMMING, GA", "DACULA", "DAHLONEGA, GA",
    "DALLAS, GA", "DALTON, GA", "DAWSONVILLE", "DECATUR, GA", "DORAVILLE, GA",
    "DOUGLASVILLE", "DUBLIN, GA", "DULUTH, GA", "DUNWOODY", "ELLENWOOD",
    "ELLIJAY, GA", "EVANS, GA", "FAIRBURN, GA", "FAYETTEVILLE, GA", "FLEMINGTON, GA",
    "FLOWERY BRANCH", "FOREST HILLS, GA", "FOREST PARK, GA", "FORT BENNING",
    "FORT STEWART", "FORT VALLEY, GA", "GAINESVILLE, GA", "GLENNVILLE, GA",
    "GRAYSON, GA", "GRIFFIN, GA", "GROVETOWN", "HAMPTON, GA", "HAWKINSVILLE, GA",
    "HEPHZIBAH", "HINESVILLE", "HIRAM, GA", "HUNTER ARMY AIRFIELD", "JASPER, GA",
    "JONESBORO, GA", "KENNESAW, GA", "KINGSLAND, GA", "LAFAYETTE, GA", "LAGRANGE, GA",
    "LAKE CITY, GA", "LAWRENCEVILLE, GA", "LEESBURG, GA", "LILBURN", "LITHIA SPRINGS",
    "LITHONIA", "LOCUST GROVE, GA", "LOGANVILLE, GA", "LYONS, GA", "MABLETON",
    "MACON, GA", "MARIETTA, GA", "MCDONOUGH, GA", "MILLEDGEVILLE, GA", "MILLER, GA",
    "MONROE, GA", "MONTVILLE, GA", "MOULTRIE, GA", "NEWNAN", "NORCROSS, GA",
    "NORTH ATLANTA", "NORTH DECATUR", "PEACHTREE CITY", "PERRY, GA", "POOLER",
    "POWDER SPRINGS, GA", "REX, GA", "RICHMOND HILL, GA", "RINCON, GA", "RINGGOLD, GA",
    "RIVERDALE, GA", "ROME, GA", "ROSWELL, GA", "SAINT MARY'S, GA", "SANDY SPRINGS, GA",
    "SAVANNAH, GA", "SHENANDOAH, GA", "SMYRNA, GA", "SNELLVILLE", "STATESBORO",
    "STOCKBRIDGE, GA", "STONE MOUNTAIN", "SUWANEE, GA", "SWAINSBORO", "SYLVANIA, GA",
    "SYLVESTER, GA", "THOMASTON, GA", "THOMASVILLE, GA", "TIFTON", "TOCCOA",
    "TUCKER, GA", "UNION CITY, GA", "VALDOSTA", "VILLA RICA, GA", "VININGS",
    "WARNER ROBINS", "WAYCROSS", "WAYNEBORO, GA", "WINDER", "WOODSTOCK, GA", "ZEBULON, GA"
];

const CityList = () => {
    // Memoize the city items unconditionally
    const cityItems = useMemo(() => {
        return cities.map((city, index) => (
            <Col key={index} xs={6} md={4} lg={2} className={styles["city-list__col"]}>
                <Link href={city.toLowerCase().split(", ")[0]}>{city}</Link>
            </Col>
        ));
    }, []);

    return (
        <Container className={`${styles["city-list"]} my-5`}>
            <h2 className={`${styles["city-list__title"]} fw-bolder`}>Find Moving Companies from Top cities in Georgia, GA</h2>
            <Row className={styles["city-list__row"]}>
                {cityItems}
            </Row>
        </Container>
    );
};

export default memo(CityList);
