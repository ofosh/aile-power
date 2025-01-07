import React from "react";
import { assets } from "../assets";
import { motion } from "framer-motion";
import { RiCloseCircleFill } from "react-icons/ri";

const PlayVideo = ({ closeModalVideo }) => {
  return (
    <motion.div className="bg-opacity-30 backdrop-blur-md fixed top-0 left-0 w-[100%] h-full z-100 ">
      <div className="flex mt-8 items-center md:items-start justify-center flex-col md:flex-row top-[30%] relative md:relative md:top-20">
        <video
          className=" md:top-2 md:relative max-w-full md:max-w-[800px] h-auto border-white-4"
          src={assets.videoFile}
          controls
          autoPlay
        ></video>
        <RiCloseCircleFill
          className="cursor-pointer  text-5xl text-orange-600 mt-3"
          onClick={() => closeModalVideo(false)}
        />
      </div>
    </motion.div>
  );
};

export default PlayVideo;
