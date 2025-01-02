import React, { useRef } from "react";
import { assets } from "../assets";
import { motion } from "framer-motion";

const PlayVideo = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <motion.div
      className={`fixed top-0 left-0 w-[100%] h-full z-100 flex items-center justify-center ${
        playState ? "" : "hidden"
      }`}
      ref={player}
      onClick={closePlayer}
    >
      <video
        className="w-[90%] max-w-[900px] h-auto border-white-4"
        src={assets.videoFile}
        autoPlay
        controls
      ></video>
    </motion.div>
  );
};

export default PlayVideo;
