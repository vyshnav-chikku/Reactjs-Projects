import React, { useState } from "react";
import { motion } from "framer-motion";

const Box1 = () => {
  const [Isanimating, setIsanimating] = useState(false);
  return (
    <div className="box-container">
      <motion.div
        className="box"
        initial={{ opacity: 0.5 }}
        animate={{
          x: Isanimating ? 1300 : 0,
          opacity: Isanimating ? 1 : 0.5,
          rotate: Isanimating ? 360 : 0,
        }}
        transition={{
          // type: "tween", duration: 3 ,no spring action
          type: "spring",
          stiffness: 60,
          // damping: 10
          // default is 10
        }}
        onClick={() => setIsanimating(!Isanimating)}
      ></motion.div>
    </div>
  );
};

export default Box1;
