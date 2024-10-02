import React from 'react';
import Navbar from './components/Navbar/Navbar';
import NavbarBanner from './components/Navbar/NavbarBanner';
import Hero from './components/HeroSection/Hero';
import NumberCounter from './components/Numbercounter/NumberCounter';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import banner1 from './components/assets/banner1-.png'
import banner2 from './components/assets/banner2.png'
import Banner from './components/Banner/Banner';
import SubjectCard from './components/SubjectCard/SubjectCard';
import Testimonial from './components/Testimonials/Testimonial';
import Footer from './components/Footer/Footer';
import footerImg from './components/assets/footerImg.jpg';
import SignInModal from "./components/Pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import page components
import SignIn from "./components/Pages/SignIn";
import Register from "./components/Pages/Register";

import Resources from './components/Pages/Resources';



const BannerData = {  
  image: banner1,  
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",  
  title: "Personalized Professional Online Tutor on Your Schedule",  
  subtitle: "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",  
  link: "#",  
};
const BannerData2 = {  
  image: banner2,  
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",  
  title: "Talented and Qualified Tutors to Serve You for Help",  
  subtitle: "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.",  
  link: "#",  
};







function App() {



    return (
    <main className="overflow-x-hidden">
 <Router>

<Navbar/>
  {/* Routes for full-page navigation */}
<Routes>
      
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
 

 {/* Main content for sections on the same page */}


    
 <div id="main-page-content">
          <NavbarBanner />
          <section id="home">
          <Hero/>
          </section>
          <NumberCounter />
          <Banner {...BannerData}/>
          <Banner {...BannerData2} reverse={true} />
          <section id="students">
          <SubjectCard/>
          </section>
          <section id="resources">
            <Resources />
          </section>
          <section id="about">
          <Testimonial/>
          </section>
          <hr />
          <section id="contact">
          <Footer />
          </section>
         
        
        </div>
      </Router>




{/* Modals */}
    <SignInModal/>
    <Register/>
    </main>
    )
}

export default App;
