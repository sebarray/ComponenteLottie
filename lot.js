import React, { useEffect, useRef } from "react";
import "./lotie.css";
import lottie from "lottie-web";

const Lotie = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./chico.json"),// ruta de archivo json
    });
  }, []);

  return (
    <div className=" w-50 ">
      <div ref={container}></div>
    </div>
  );
};

export default Lotie;
