"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
interface INavbarProps {
  version: string;
}

const Navbar = ({ version }: INavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`z-50 relative h-full flex justify-between items-center rounded-full max-w-[95%] mx-auto px-5 py-3 
        ${
          version === "light"
            ? "bg-white bg-opacity-10 backdrop-blur-lg"
            : "bg-[#E8EFF8] drop-shadow-lg shadow-[#2a528980] border border-white"
        }   `}
    >
      {/* <nav className="z-50 relative h-full flex justify-between items-center rounded-full max-w-[95%] mx-auto px-5 py-5"> */}

      <Link href="/">
        <figure
          className="   "
          // style={{
          //   background: "linear-gradient(to top, #000000, #4C96FF)",
          //   WebkitBackgroundClip: "text",
          //   WebkitTextFillColor: "transparent",
          // }}
        >
          {version === "light" ? (
            <Image src="/LOGO.png" height={80} width={100} alt="logo" />
          ) : (
            <Image src="/LOGOBLUE.png" height={80} width={100} alt="logo" />
          )}
        </figure>
      </Link>

      <ul
        className={`hidden gap-8 font-light ${
          version === "light" ? "text-white" : "text-[#172B4D]"
        } md:flex items-center`}
      >
        <li>Servicios</li>
        <li>Industrias</li>
        <li className="semibold flex gap-1 items-center ">
          BLOG
          <AnnouncementOutlinedIcon className="h-4 w-4 text-[hsl(215,76%,73%)] subtitle-icon-shadow" />
        </li>

        <li className="bg-gradient-to-r from-blue-600 to-blue-800 py-2 px-3.5 rounded-full flex gap-1 items-center ">
          Hablar con especialista
          <PersonAddAltIcon className="h-4 w-4" />
        </li>
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
        <MenuIcon
          className={`${version === "light" ? "text-white" : "bg-[#60A1FE]"}`}
        />
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
