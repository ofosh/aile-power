import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import Reviews from "./components/Reviews";
const App = () => {
  return (
    <div className="overflow-hidden max-w-full container">
      <Hero />
      <About />
      <Features />
      <Works />
      <Reviews />
      <Contact />
      <Footer />
      <div className="fixed right-[24px] bottom-5">
        <a href="https://wa.me/23407032036552">
          <FaWhatsapp className="text-5xl bg-green-700 text-white rounded-full p-1" />
        </a>
      </div>
    </div>
  );
};

export default App;
