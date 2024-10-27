"use client";
import React from "react";
import Button from "./Button";
import Navbar from "./Navbar";
import Image from "next/image";
import Metric from "./Metric";
import CompanyList from "./CompanyList";

const Header3 = () => {
  const companyLogos = [
    "/logos/accentureLOGO.png",
    "/logos/bcoprovinciaLOGO.png",
  ];
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[95vh] py-6 overflow-hidden z-0">
      {/* <Navbar /> */}
      <div className="h-full ">
        <div className="flex flex-col h-full ">
          <div className="container flex flex-col h-full">
            <article className=" text-white w-full lg:w-[50%] flex flex-col gap-3 md:gap-6 pt-8 md:pt-16 relative z-10 ">
              <h2 className="montserrat text-[56px] text-white md:text-[60px] font-bold leading-none">
                <span className="">Firma Biométrica </span>
                <br />
                <span>Segura y Eficiente</span>
              </h2>

              <p className="md:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis rem libero id quod repudiandae nemo nam. Perferendis
                quibusdam ducimus, natus laboriosam libero recusandae culpa
                doloremque.
              </p>
              {/* <div className="z-10 flex gap-2 mt-4 text-md md:mt-6 md:text-lg ">
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
            </div> */}
            </article>
            <div className="montserrat w-full md:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-3  gap-4 mt-16 relative z-20">
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
          className="absolute inset-0 bg-[#2A5189]/50  "
          style={{ zIndex: 1 }}
        />
      </div>
      ;
    </section>
  );
};

export default Header3;

{
  /* <div className=" gradient w-[300px] h-[300px] inset-0 blur-[10rem]"></div> */
}
{
  /* <div
  className="absolute inset-0 bg-gradient-to-r from-[#2A5189] to-transparent"
  style={{ zIndex: 1 }}
/>; */
}
