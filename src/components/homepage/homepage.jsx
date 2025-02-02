import Nav from "../nav/nav";
import About from "../aboutus/aboutus";
import Hero from "../hero/hero";
import Intern from "../intern/intern";
import Partner from "../partners/partners";
import Reviews from "../reviews/reviews";
import Top from "../toptrend/toptrend";
import Workshop from "../workshop/workshop";
import { Footer } from "../Footer/Footer";
import WhatsAppButton from "../whatsapp/whatsapp";
import Label from '../label/label.jsx';  // With .jsx extension, if applicable
import BoxCourse from "../boxcourse/boxcourse.jsx";
import Aichatbot from "../aichatbot/aichat.jsx";
import Insights from "../insights/insights.jsx";
import ScrollToTopOnArrowPress from "../scrollup/scrollup.jsx";





function Homepage() {
   
    return (
        
        <div className="font-sans">
            <Label /> 
            <Nav />
            <Hero />
            <Insights />
            <BoxCourse />
            <Top />
            <Partner />
            <About />
            <Workshop />
            <Reviews />
            <Intern />
            <WhatsAppButton />
            <ScrollToTopOnArrowPress /> 
             <Aichatbot /> 
            
           
            <Footer />

        </div>
        
    );
    
}

export default Homepage;