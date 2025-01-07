import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Product from "./components/product";

const App = () => {
  return (
    <div className="overflow-hidden max-w-full container">
      <Hero />
      <About />
      <Works />
      <Features />
      {/* <Product /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
