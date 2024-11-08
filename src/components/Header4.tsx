"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Metric from "./Metric";
import CompanyList from "./CompanyList";
import Image from "next/image";

const Header4 = () => {
  const companyLogos = [
    "/logos/accentureLOGO.png",
    "/logos/bcoprovinciaLOGO.png",
  ];

  const backgroundImages = [
    "/header.jpg",
    "/FONDO01.jpg",
    "/FONDO02.jpg",
    "/FONDO03.jpg",
    "/FONDO04.jpg",
    "/FONDO05.jpg",
    "/FONDO06.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-6 md:pb-12 min-h-[70vh] md:min-h-[90vh] !bg-none">
      <Navbar version={"light"} />
      <div className="h-full">
        <div className="flex flex-col h-full z-[5]">
          <div className="container flex flex-col h-full z-[5]">
            <article className="text-white w-full lg:w-[50%] flex flex-col gap-3 md:gap-6 pt-8 md:pt-16 relative ">
              <h2 className="montserrat text-[56px] text-[#ECECEC] md:text-[60px] font-semibold leading-none">
                <span>Firma Biométrica</span>
                <br />
                <span className="title-shadow">Segura y Eficiente</span>
              </h2>
              <p className="md:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis rem libero id quod repudiandae nemo nam. Perferendis
                quibusdam ducimus, natus laboriosam libero recusandae culpa
                doloremque.
              </p>
            </article>
            <div className="z-[5] montserrat w-full md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 relative ">
              <Metric content="firmas procesadas" target={242000} />
              <Metric content="clientes contentos" target={50} />
              <Metric content="años de experiencia" target={10} />
            </div>
          </div>
          <div className="relative z-[5] ">
            <CompanyList />
          </div>
        </div>
      </div>
      {/* IMAGEN FONDO DE PANTALLA */}
      <div className="z-[1]">
        <Image
          alt=""
          src={backgroundImages[currentImageIndex]}
          fill
          sizes="100vw"
          loading="eager"
          style={{
            zIndex: 1,

            objectFit: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0 bg-[#2A5189]/50"
          style={{ zIndex: 2 }}
        />
      </div>
    </section>
  );
};

export default Header4;
