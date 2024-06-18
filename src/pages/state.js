import MetaData from "@/components/MetaData";
import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/state/About";
import CityList from "@/components/state/CityList";
import Reviews from "@/components/state/Reviews";
import MovingToGeorgia from "@/components/state/MovingToGeorgia";
import OtherService from "@/components/state/OtherService";
import Journey from "@/components/Journey";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <MetaData />
            <NavBar />
            <Hero />
            <About />
            <CityList />
            <Reviews />
            <MovingToGeorgia />
            <OtherService />
            <Journey />
            <Footer />
        </>
    );
}
