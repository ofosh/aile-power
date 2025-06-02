import React from "react";
import { about, assets } from "../assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="flex flex-col items-center  container mx-auto p-14 md:px-[14px] lg:px-[8px] max-w-full overflow-hidden bg-gray-50"
      id="About"
    >
      <h1 className="text-3xl sm:text-5xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Us
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Smart Living, Simplified
      </p>
      <div className="flex flex-col lg:flex-row items-center  lg:items-center gap-20">
        <motion.div
          className="flex flex-col items-center md:items-start  text-gray-600"
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="my-3 max-w-lg">
            AILE Power is a Nigerian smart technology company launched in 2024,
            committed to transforming everyday routines through intelligent,
            functional, and beautifully designed solutions that make life
            easier, cleaner, and more connected.
          </p>
          <p className="my-3 max-w-lg">
            Our mission is to bring smart living to homes, offices, and public
            spaces across Africa—starting with our debut product, the ColorPop
            Smart Sensor Bin. By blending innovation with practical design, we
            aim to elevate hygiene, efficiency, and comfort in daily life.
          </p>
          <p className="my-3 max-w-lg">
            At AILE Power, we believe smart living should be simple. Our
            commitment to quality, convenience, and forward-thinking design
            drives every product we create. This is just the beginning of a
            smarter, brighter future.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
