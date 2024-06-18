import MetaData from "@/components/MetaData";
import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MoversList from "@/components/city/MoversList";
import CheapMovers from "@/components/city/CheapMovers";
import FAQ from "@/components/city/FAQ";
import Journey from "@/components/Journey";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    console.log(router);
    return (
        <>
            <MetaData />
            <NavBar />
            <Hero />
            <MoversList />
            <CheapMovers />
            <FAQ />
            <Journey />
            <Footer />
        </>
    );
}
