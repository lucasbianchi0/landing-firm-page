import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center rounded-full max-w-[95%] mx-auto px-5 py-2 border border-white bg-white bg-opacity-10  backdrop-blur-lg">
      <h1>Logo</h1>

      <ul className="flex gap-4 font-light">
        <li>Servicios</li>
        <li>Sobre Accedra</li>
        <li>Partners</li>
        <li>Soluciones</li>
      </ul>

      <div className="flex gap-3">
        <Button
          backgroundColor={"transparent"}
          textColor={"#2A5189"}
          content={"Contacto"}
          borderColor="#2A5189"
        />
        <Button
          backgroundColor={"#2A5189"}
          textColor={"white"}
          content={"Contacto"}
          borderColor="#2A5189"
        />
      </div>
    </nav>
  );
};

export default Navbar;
