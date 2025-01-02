import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaCirclePlay } from "react-icons/fa6";

const Hero = ({ setPlayState }) => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{
        backgroundImage: "url('/bg.png')",
      }}
      id="Header"
    >
      <Navbar />
      <motion.div
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl sm:text-7xl md:text-[92px] inline-block max-w-3xl leading-normal font-extrabold pt-20 text-white">
          Experience Life the Smart Way
        </h2>
        <div className="space-x-3 mt-16 ">
          <button
            className="border border-white px-6 py-3 rounded font-bold text-xl"
            onClick={() => {
              setPlayState(true);
            }}
          >
            Play Video
          </button>
          <a
            href="#About"
            className="bg-green-600 px-8 py-3 transition delay-500 text-xl rounded"
          >
            About Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
