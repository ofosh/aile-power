import React from "react";
import { works } from "../assets";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 max-w-full overflow-hidden "
      id="works"
    >
      <h1 className="text-3xl sm:text-5xl font-bold mb-2">
        How{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          it works?
        </span>
      </h1>
      <p className="text-gray-500 max-w-xl text-center mb-8">
        Everybody loves tech gadgets, But our’s is different. Here is how it
        works. Its simple and easy to install.
      </p>
      <motion.div
        className="grid md:grid-cols-3  grid-cols-1 pt-8 gap-6 md:gap-10 w-full"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {works.map((item, index) => (
          <div
            key={index}
            className="flex flex-col relative items-center gap-6 text-center"
          >
            <img
              src={item.imgUrl}
              className="rounded-xl flex items-center object-fill"
              width={250}
            />
            <div className="flex justify-center items-center gap-2">
              <p className="px-3 pt-2 rounded-tl-xl text-xl bg-orange-600 font-semibold text-white">
                {item.step}
              </p>
              <p className="w-50 mt-2 flex items-center text-center justify-center lg:justify-start lg:text-left  font-semibold text-green-800 text-lg">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Works;
