import React from "react";
import { motion } from "framer-motion";

const Box2 = () => {
  return (
    <div className="box-container">
      <motion.div
        drag
        dragConstraints={{ left: 10, right: 40, top: 20, bottom: 20 }}
        className="box"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      ></motion.div>
    </div>
  );
};

export default Box2;
