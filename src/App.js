
import { Cyber } from "./components/Coures/Cyber/Cyber";
import { Cybersecurity } from "./components/Coures/Networking/Network";
import { Footer } from "./components/Footer/Footer";
// import Nav from "./components/nav/nav";
// import About from "./components/aboutus/aboutus";
// import Hero from "./components/hero/hero";
// import Intern from "./components/intern/intern";
// import Partner from "./components/partners/partners"
// import Reviews from "./components/reviews/reviews";
// import Top from "./components/toptrend/toptrend";
// import Workshop from "./components/workshop/workshop";
import Team from "./components/team/team"
import { Contact } from "./components/Contact/Contact";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Homepage from "./components/homepage/homepage";

function App() {


  const router = createBrowserRouter([
    {
      path:"/",
      element:<Homepage/>
    },
    {
      path:"/team",
      element:<Team/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    
   

  ])
  return (
    <div className="App">
     
        <RouterProvider router={router}/>
      {/* <Cybersecurity/> */}
      
   
      {/* <Cyber/> */}
       {/* <Nav />
      <Hero/>
      <Partner/>
      <About/>
      <Top/>
      <Workshop/>
      <Reviews/>
      <Intern/>
      <Footer/>  */}
       {/* <Team/> */}
       {/* <Contact/> */}

     




    </div>
  );
}

export default App;
