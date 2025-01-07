"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Importar motion
import Image from "next/image";
import Navbar from "../reusable/Navbar";
import Metric from "./Metric";
import CompanyList from "./CompanyList";
import { header } from "@/data/1-header";
import { metricas } from "@/data/2-metricas";

const Header = () => {
  const backgroundImages = [
    "/portada/FONDO02.jpg",
    "/portada/FONDO03.jpg",
    "/portada/FONDO04.jpg",
    "/portada/FONDO05.jpg",
    "/portada/FONDO06.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-6 md:pb-12 min-h-[70vh] md:min-h-[90vh] bg-none">
      <Navbar version={"light"} />
      <div className="h-full">
        <div className="flex flex-col h-full z-[5]">
          <div className="container flex flex-col h-full z-[5]">
            {/* Animación para la primera línea */}
            <motion.article
              className="text-white w-full lg:w-[80%] xl:w-[50%] flex flex-col gap-3 md:gap-6 pt-8 md:pt-16 relative"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="montserrat text-[56px] text-[#ECECEC] md:text-[60px] font-semibold leading-none">
                <span>{header[0].primeraLinea}</span>
                <br />
                <span className="title-shadow">{header[0].segundaLinea}</span>
              </h2>
              <p className="md:text-lg">
                {header[0].descripcion}
              </p>
            </motion.article>
            {/* Animación para las métricas */}
            <motion.div
              className="z-[5] montserrat w-full md:w-[90%]  lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Metric content={metricas[0].metrica} target={metricas[0].target} />
              <Metric content={metricas[1].metrica} target={metricas[1].target} />
              <Metric content={metricas[2].metrica} target={metricas[2].target} />
            </motion.div>
          </div>
          <div className="relative z-[5]">
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

export default Header;
