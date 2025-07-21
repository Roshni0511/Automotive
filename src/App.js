import { Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';
import WOW from 'wowjs';
import Home from "./pages/Home";
import About from "./pages/About";




function App() {
    useEffect(() => {
  new WOW.WOW().init();
}, []);
  return (
<>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/About" element={<About />}/>
</Routes>

  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</>
  );
}

export default App;
