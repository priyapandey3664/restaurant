import React from "react";
import  Nav from "./components/Nav.js";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import Product from "./components/Product.jsx";
import Review  from "./components/Review.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";
import Footer from "./components/Footer.jsx";

import "./assets/style/style.css";
function App() {
  return (
    <>
    <Nav/>
     <Home/>
     <About/>
     <Menu/>
     <Product/>
     <Review/>
     <Contact/>
     <Blog/>
     <Footer/>
    </>
  );
}

export default App;
