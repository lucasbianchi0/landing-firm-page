import React from "react";
import Metric from "./Metric";

const Metrics2 = () => {
  return (
    <div className=" z-20 md:absolute md:bottom-0 w-full -translate-y-[50px] md:left-0 ">
      <div className="container relative z-20 grid grid-cols-1 gap-4 montserrat md:grid-cols-3">
        <Metric content="1500 firmas" target={1500} />
        <Metric content="200 clientes contentos" target={200} />
        <Metric content="Más de 10 años de experiencia" target={10} />
      </div>
    </div>
  );
};

export default Metrics2;
