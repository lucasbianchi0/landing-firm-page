"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Desactiva el scroll
    } else {
      document.body.style.overflow = "auto"; // Restaura el scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Limpieza al desmontar
    };
  }, [isMenuOpen]);

  return (
    <nav className="z-50 relative h-full flex justify-between items-center rounded-full max-w-[95%] mx-auto px-5 py-2 border border-white bg-white bg-opacity-10 backdrop-blur-lg">
      {/* <nav className="z-50 relative h-full flex justify-between items-center rounded-full max-w-[95%] mx-auto px-5 py-5"> */}
      <h1
        className="text-lg font-bold text-white uppercase"
        // style={{
        //   background: "linear-gradient(to top, #000000, #4C96FF)",
        //   WebkitBackgroundClip: "text",
        //   WebkitTextFillColor: "transparent",
        // }}
      >
        Accedra
      </h1>

      <ul className="hidden gap-4 font-light text-white md:flex">
        <li>Servicios</li>
        <li>Sobre Accedra</li>
        <li>Partners</li>
        <li>Soluciones</li>
      </ul>

      {/* <div className="hidden gap-3 md:flex">
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
      </div> */}

      {/* Botón para abrir/cerrar el menú */}
      <div onClick={toggleMenu} className="cursor-pointer md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          color={"white"}
          fill={"none"}
        >
          <path
            d="M4 5L20 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12L20 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 19L20 19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Menú en pantalla completa */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-blue-400 z-999">
          <ul className="flex flex-col items-center justify-center gap-4 font-light">
            <li>Servicios</li>
            <li>Sobre Accedra</li>
            <li>Partners</li>
            <li>Soluciones</li>
            <div onClick={toggleMenu} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={"#2a5189"}
                fill={"none"}
              >
                <path
                  d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
