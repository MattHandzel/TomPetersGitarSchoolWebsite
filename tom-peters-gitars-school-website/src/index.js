import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/HeaderBar'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About"
import Home from "./Pages/Home"
import Photos from "./Pages/Photos"
import Contact from "./Pages/Contact"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import "https://kit.fontawesome.com/b3145b888c.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="home" element={<Home />}></Route> */}
        <Route path="about" element={<About />}></Route>
        <Route path="photos" element={<Photos />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter> 
  // </React.StrictMode>
);
// library.add(fab)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
