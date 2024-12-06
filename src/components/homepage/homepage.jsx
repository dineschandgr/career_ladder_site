import Nav from "../nav/nav";
import About from "../aboutus/aboutus";
import Hero from "../hero/hero";
import Intern from "../intern/intern";
import Partner from "../partners/partners";
import Reviews from "../reviews/reviews";
import Top from "../toptrend/toptrend";
import Workshop from "../workshop/workshop";
import { Footer } from "../Footer/Footer";

function Homepage() {
    return (
        <div className="font-sans">
            <Nav />
            <Hero />
            <Partner />
            <About />
            <Top />
            <Workshop />
            <Reviews />
            <Intern />
            <Footer />
        </div>
    );
}

export default Homepage;