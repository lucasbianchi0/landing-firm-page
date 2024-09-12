"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Metric from "./components/Metric";
import CompanyList from "./components/CompanyList";
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
    <section className="relative w-full min-h-[70vh] md:min-h-[95vh] py-6 overflow-hidden z-0">
      <Navbar />
      <div className="h-full">
        <div className="flex flex-col h-full">
          <div className="container flex flex-col h-full">
            <article className="text-white w-full lg:w-[50%] flex flex-col gap-3 md:gap-6 pt-8 md:pt-16 relative z-10">
              <h2 className="montserrat text-[56px] text-white md:text-[60px] font-bold leading-none">
                <span>Firma Biométrica</span>
                <br />
                <span>Segura y Eficiente</span>
              </h2>
              <p className="md:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis rem libero id quod repudiandae nemo nam. Perferendis
                quibusdam ducimus, natus laboriosam libero recusandae culpa
                doloremque.
              </p>
            </article>
            <div className="montserrat w-full md:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 relative z-20">
              <Metric content="1500 firmas" target={1500} />
              <Metric content="200 clientes contentos" target={200} />
              <Metric content="Más de 10 años de experiencia" target={10} />
            </div>
          </div>
          <div className="relative z-20">
            <CompanyList />
          </div>
        </div>
      </div>
      {/* IMAGEN FONDO DE PANTALLA */}
      <div className="z-[-5]">
        <Image
          alt=""
          src={backgroundImages[currentImageIndex]}
          fill
          sizes="100vw"
          loading="eager"
          style={{
            objectFit: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0 bg-[#2A5189]/50"
          style={{ zIndex: 1 }}
        />
      </div>
    </section>
  );
};

export default Header4;
