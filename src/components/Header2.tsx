"use client";
import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import Image from "next/image";

const Header2 = () => {
  const companyLogos = [
    "/logos/accentureLOGO.png",
    "/logos/bcoprovinciaLOGO.png",
  ];
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[95vh] py-6 overflow-hidden pb-[90px] md:pb-[170px] z-0">
      <Navbar />
      <div className="container h-full">
        <div className="flex flex-col h-full lg:flex-row lg:justify-between">
          <article className="text-white w-full lg:w-[50%] flex flex-col gap-3 md:gap-6 pt-8 md:pt-16 relative z-10 ">
            <h2 className="montserrat text-[56px] text-white md:text-[60px] font-bold leading-none">
              <span className="">Firma Biométrica </span>
              <br />
              <span>Segura y Eficiente</span>
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              rem libero id quod repudiandae nemo nam. Perferendis quibusdam
              ducimus, natus laboriosam libero recusandae culpa doloremque.
            </p>
            <div className="z-10 flex gap-2 mt-4 text-md md:mt-6 md:text-lg ">
              <Button
                backgroundColor={"transparent"}
                textColor={"white"}
                content={"Prueba gratis"}
                borderColor="white"
              />
              <Button
                backgroundColor={"#2A5189"}
                textColor={"white"}
                content={"Hablar con especialista"}
                borderColor="#2A5189"
              />
            </div>
          </article>
        </div>
      </div>
      {/* IMAGEN FONDO DE PANTALLA */}
      <div className="z-[-5]">
        <Image
          alt="min-h-screen"
          src="/header.jpg"
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
          className="absolute inset-0 bg-gradient-to-r from-[#2A5189] to-transparent"
          style={{ zIndex: 1 }}
        />
      </div>
    </section>
  );
};

export default Header2;

{
  /* <div className=" gradient w-[300px] h-[300px] inset-0 blur-[10rem]"></div> */
}
