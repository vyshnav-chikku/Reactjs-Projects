import { useState } from "react";
import "./App.css";
import image from "./cup-of-coffee.png";
import { motion } from "framer-motion";

const App = () => {
  const [state, setstate] = useState(3);
  const [isAnimating, setisAnimating] = useState(false);
  //eslint-disable-next-line

  const [xAxis, setxAxis] = useState(0);
  const [yAxis, setyAxis] = useState(0);

  const handleMouseMove = (e) => {
    let xaxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yaxis = (window.innerHeight / 2 - e.pageY) / 25;
    setxAxis(xaxis);
    setyAxis(yaxis);

    setisAnimating(true);
    //eslint-disable-next-line
    // card.style.transform = `rotate(${xaxis}deg) rotate(${yaxis}deg)`;
  };
  const handleMouseLeave = () => {
    setxAxis(0);
    setyAxis(0);
    setisAnimating(false);

    //eslint-disable-next-line
  };

  return (
    <>
      <motion.div
        className="container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="card"
          initial={{ rotation: 0.06, rotateX: 0, rotateY: 0 }}
          animate={{
            rotation: 0.06,
            scale: 0.85,
            rotateX: yAxis,
            rotateY: xAxis,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <motion.div className="sneaker">
            <motion.div
              animate={{ scale: isAnimating ? 1.4 : 1 }}
              className="circle"
            ></motion.div>

            <motion.img
              src={image}
              alt="coffee"
              animate={{
                rotation: 0.06,
                rotateZ: isAnimating ? 15 : 0,
                translateY: isAnimating ? -10 : 0,
                translateZ: isAnimating ? 120 : 0,
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          <motion.div className="info" animate={{ rotation: 0.06 }}>
            <motion.h1
              className="title"
              animate={{
                rotation: 0.06,
                translateY: isAnimating ? -30 : 0,
                translateZ: isAnimating ? 140 : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              SKULL OF DEAD
            </motion.h1>
            <motion.h3
              animate={{
                rotation: 0.06,
                translateY: isAnimating ? -40 : 0,
                translateZ: isAnimating ? 130 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              SKULL OF THE HUMANS THAT DIED YEARS AGO TAKEN BY THE ARCHEOLOGY
            </motion.h3>
            <motion.div
              className="sizes"
              animate={{
                rotation: 0.06,
                translateY: isAnimating ? -30 : 0,
                translateZ: isAnimating ? 120 : 0,
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.button
                className={state === 1 ? "active" : "not"}
                onClick={() => setstate(1)}
              >
                39
              </motion.button>
              <motion.button
                className={state === 2 ? "active" : "not"}
                onClick={() => setstate(2)}
              >
                40
              </motion.button>
              <motion.button
                className={state === 3 ? "active" : "not"}
                onClick={() => setstate(3)}
              >
                42
              </motion.button>
              <motion.button
                className={state === 4 ? "active" : "not"}
                onClick={() => setstate(4)}
              >
                44
              </motion.button>
            </motion.div>
            <motion.div
              className="purchase"
              animate={{
                rotation: 0.06,
                translateY: isAnimating ? -50 : 0,
                translateZ: isAnimating ? 100 : 0,
              }}
              transition={{ duration: 0.7 }}
            >
              <motion.button>Purchase</motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default App;
