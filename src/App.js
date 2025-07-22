import { Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import WOW from 'wowjs';
import Home from "./pages/Home";
import About from "./pages/About";
import OurMission from "./pages/OurMission";
import OurVision from "./pages/OurVision";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Video from "./pages/Video";
import Achievements_gallery from "./pages/Achievements_gallery";
import Daily_Activity from "./pages/Daily_Activity";
import Testimonial_page from "./pages/Testimonial_page";

import MechanicalService from "./pages/MechanicalService";


function App() {
    useEffect(() => {
  new WOW.WOW().init();
}, []);
  return (
<>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/About" element={<About />}/>
  <Route path="/OurMission" element={<OurMission/>}/>
  <Route path="/OurVision" element={<OurVision/>}/>
  <Route path="/Services" element={<Services/>}/>
  <Route path="/Blog" element={<Blog/>}/>
  <Route path="/BlogDetails" element={<BlogDetails/>}/>
  <Route path="/Gallery" element={<Gallery/>}/>
  <Route path="/Video" element={<Video/>}/>
  <Route path="/Achievements_gallery" element={<Achievements_gallery/>}/>
  <Route path="/Daily_Activity" element={<Daily_Activity/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/Testimonial_page" element={<Testimonial_page/>}/>
    <Route path="/MechanicalService" element={<MechanicalService/>}/>
</Routes>

  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
  <a
href="https://wa.me/02612662999"
  class="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
    alt="WhatsApp"
  />
</a>
</>
  );
}

export default App;
