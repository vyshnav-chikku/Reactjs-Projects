import React from "react";
import { motion } from "framer-motion";

const Box4 = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          opacity: [1, 1, 0.5, 0.5, 1],
          x: [0, 200, 400, 600, 0],
          y: [0, 100, -100, 100, 0],
        }}
        transition={{
          duration: 2,
        }}
      ></motion.div>
    </div>
  );
};

export default Box4;
