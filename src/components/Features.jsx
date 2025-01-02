import React from "react";
import { features } from "../assets";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 max-w-full overflow-hidden bg-gray-50 "
      id="Features"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        The{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Benefits
        </span>
      </h1>
      <p className="text-gray-500 max-w-2xl text-center mb-8">
        The ColorPop Bin is a stylish, functional, and versatile storage
        solution designed to add a burst of color and personality to any space.
        Whether for home, office, or play areas, this bin combines practicality
        with aesthetics, making it an essential for organizing your belongings
        with flair.
      </p>
      <motion.div
        className="grid md:grid-cols-3  grid-cols-1 pt-8 gap-6 md:gap-10 w-full 2xl:pr-28"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <img src={item.imgUrl} width={55} alt="" />
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

// features-notes note-type-1 title-left-bottom wow fadeInRight

// z-index: 2; top: 250px; right: -50px; visibility: visible; animation-name: fadeInRight;
