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
        Smart Living, Inspired Life
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between md:items-center gap-20">
        <img
          src={assets.ailepowerAbout}
          className="w-full sm:w-3/6 max-w-lg shadow-lg"
          alt="brand"
        />

        <motion.div
          className="flex flex-col items-center md:items-start  text-gray-600"
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="my-10 max-w-lg">
            Aile Power is committed and dedicated in making living comfortable,
            convenient, smart and Accessible, Smart Living is not just about
            technology; it's about enhancing the quality of life by creating an
            environment that is more responsive, adaptable, and aligned with
            modern needs. It symbolizes the future of living, where comfort
            meets innovation, and sustainability becomes a way of life.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-10 w-full 2xl:pr-28">
            {about.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <img src={item.icon} width={45} alt="" />
                <p className="font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
          <a href="#Features">
            <button className="bg-orange-600 text-white px-8 py-2 mt-10 rounded">
              Learn More
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
