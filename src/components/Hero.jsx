import React, { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaCirclePlay } from "react-icons/fa6";
import PlayVideo from "./PlayVideo";
import Product from "./product";

const Hero = () => {
  const [playerVideo, setPlayerVideo] = useState(false);
  const [openModal, setOpenModal] = useState(false);
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
        <div className=" flex items-center justify-center md:flex-row flex-col mt-16 ">
          <button
            className="border flex items-center justify-center bg-green-800 border-white px-6 py-3 rounded font-bold text-xl"
            onClick={() => {
              setPlayerVideo(true);
            }}
          >
            Play Video <FaCirclePlay className="text-3xl ml-3" />
          </button>
          {playerVideo && <PlayVideo closeModalVideo={setPlayerVideo} />}

          <button
            className=" ml-3 mt-3 md:mt-0 bg-orange-500 text-white font-semibold px-8 py-4 rounded-full uppercase"
            onClick={() => setOpenModal(true)}
          >
            Pre Order Now
          </button>
          {openModal && <Product closeModal={setOpenModal} />}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
