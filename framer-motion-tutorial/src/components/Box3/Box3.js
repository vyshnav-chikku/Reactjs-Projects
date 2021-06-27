import React from "react";
import { motion } from "framer-motion";
const boxvariant = {
  hidden: {
    x: "-100vh",
  },
  visible: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      //delay in childrens transition not working with staggerChildren
    },
  },
};
const listvariant = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Box3 = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxvariant}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3].map((box, i) => {
          return (
            <motion.div
              key={i}
              className="box-item"
              variants={listvariant}
            ></motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Box3;
