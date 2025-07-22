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
</Routes>

  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</>
  );
}

export default App;
