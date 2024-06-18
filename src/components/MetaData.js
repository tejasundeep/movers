import React from "react";
import Head from "next/head";

const MetaData = () => {
    const siteTitle = "Movers - Moving Companies, Moving Services, Free Quotes";
    const siteDescription = "Find Movers - Moving Companies. Get Free Multiple Moving Quotes from Professional Movers. Compare Moving Services. Read Reviews, Guides and How to Videos.";
    
    return (
        <Head>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default MetaData;
