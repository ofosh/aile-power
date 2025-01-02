import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PlayVideo from "./components/PlayVideo";
// import ProductFeatures from "./components/ProductFeatures";
import { useState } from "react";

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div className="overflow-hidden max-w-full container">
      <Hero setPlayState={setPlayState} />
      <About />
      <Works />
      <Features />
      {/* <ProductFeatures /> */}
      <Contact />
      <Footer />
      <PlayVideo playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
