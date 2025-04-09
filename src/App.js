
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
import {Java} from "./components/Coures/Java/Java";
import {Fullstack} from "./components/Coures/Fullstack/Fullstack";
import Placement from "./components/placement/Placement";
import Blog from "./components/blog/blog";
import Courses from "./components/Coures/courses/courses";
import DS from './components/Coures/courses/datascience';
import DA from './components/Coures/courses/dataanalytics';
import FSD from './components/Coures/courses/fullstack';
import CS from './components/Coures/courses/cybersecurity';
import CC from './components/Coures/courses/cloudcomputing';
import AI from './components/Coures/courses/artificialintelligence';
import DM from './components/Coures/courses/digitalmarketing';
import UU from './components/Coures/courses/uiux';
import ES from './components/Coures/courses/embeddedsystem';
import AT from './components/Coures/courses/automationtesting';
import Label from './components/label/label';
import BoxCourse from "./components/boxcourse/boxcourse";
import Services from "./components/Services/services";
import Dgpage from "./components/Services/dgpage";
import Wdpage from "./components/Services/wdpage";
import Staffingpage from "./components/Services/staffingpage";
import Contentpage from "./components/Services/contentpage";
import Gdesignpage from "./components/Services/gdesignpage";
import Seopage from "./components/Services/seopage";


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
    {
      path:"/java",
      element:<Java/>
    },
    {
      path:"/fullstack",
      element:<Fullstack/>
    },
    {
      path:'/placement',
      element:<Placement/>
    },
    {
      path:'/blog',
      element:<Blog/>
    },
    {
      path:'/courses',
      element:<Courses />
    },
    {
      path:'/services',
      element:<Services />
    },
    {
      path:'/DS',
      element:<DS/>
    },
    {
      path:'/DA',
      element:<DA/>
    },
    {
      path:'/FSD',
      element:<FSD/>
    },
    {
      path:'/CS',
      element:<CS/>
    },
    {
      path:'/CC',
      element:<CC/>
    },
    {
      path:'/AI',
      element:<AI/>
    },
    {
      path:'/DM',
      element:<DM/>
    },
    {
      path:'/UU',
      element:<UU/>
    },
    {
      path:'/ES',
      element:<ES/>
    },
    {
      path:'/AT',
      element:<AT/>
    },
     {
       path:'/label',
       element:<Label/>
     },
     {
      path:'/boxcourse',
      element: <BoxCourse />
    },
    {
      path:'/dgpage',
      element: <Dgpage />
    },
    {
      path:'/wdpage',
      element: <Wdpage />
    },
    {
      path:'/staffingpage',
      element: <Staffingpage />
    },
    {
      path:'/contentpage',
      element: <Contentpage/>
    },
    {
      path:'/gdesignpage',
      element: <Gdesignpage/>
    },
    {
      path:'/seopage',
      element: <Seopage/>
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
      <boxcourse/>
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
