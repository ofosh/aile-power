import React from "react";
import { features } from "../assets";
import { motion } from "framer-motion";
import { assets, about } from "../assets";

const Features = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 max-w-full overflow-hidden bg-gray-50 "
      id="Features"
    >
      <h1 className="text-3xl sm:text-5xl font-bold mb-2">
        The{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Product
        </span>
      </h1>
      <p className="text-gray-500 max-w-2xl text-center mb-8">
        ColorPop Smart Sensor Bin - Smart. Bright. Clean. <br />
        The ColorPop Smart Sensor Bin by AILE Power redefines modern waste
        disposal with a touch of innovation and style. Designed for effortless
        hygiene, this intelligent bin opens and closes automatically with motion
        sensor technology—no touch, no mess.
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-between md:items-center gap-10">
        <img
          src={assets.ailepowerAbout}
          className="w-[70%] lg:w-[50%] max-w-lg shadow-lg mb-4"
          alt="brand"
        />
        <div className="flex items-center flex-col">
          <h1 className="text-3xl sm:text-3xl font-bold mb-2 text-orange-400">
            <span className="underline underline-offset-4 decoration-1 under font-light">
              Functions
            </span>
          </h1>
          <div className="grid md:grid-cols-2 mt-4 grid-cols-1 grid-start gap-6 md:gap-10 w-full 2xl:pr-28">
            {about.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <img src={item.icon} width={45} alt="" />
                <p className="font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
          <a href="#works">
            <button className="bg-orange-600 text-white px-8 py-2 my-10 rounded">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <h1 className="text-3xl sm:text-3xl font-bold mt-4 mb-2 text-green-600">
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Features
        </span>
      </h1>
      <motion.div
        className="grid md:grid-cols-2  grid-cols-1 pt-8 gap-6 md:gap-10 w-full 2xl:pr-28"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <img src={item.imgUrl} width={40} alt="" />
            <div>
              <h3 className=" text-2xl font-semibold">{item.title}</h3>
              <p className=" text-gray-700 font-normal">{item.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;

/* 
<motion.div
        className="grid md:grid-cols-3  grid-cols-1 pt-8 gap-6 md:gap-10 w-full 2xl:pr-28"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <img src={item.imgUrl} width={40} alt="" />
            <div>
              <h3 className=" text-2xl font-semibold">{item.title}</h3>
              <p className=" text-gray-700 font-normal">{item.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>

*/
