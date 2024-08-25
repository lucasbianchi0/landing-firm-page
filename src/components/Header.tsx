"use client";
import React from "react";
import Button from "./Button";
import Metric from "./Metric";
import CompanyList from "./CompanyList";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "../lottie/header1.json";

const Header = () => {
  const companyLogos = [
    "/logos/accentureLOGO.png",
    "/logos/bcoprovinciaLOGO.png",
  ];
  return (
    <section className="relative bg-[#E4EDF7] w-full min-h-[100vh] py-6 overflow-hidden pb-[170px]">
      <Navbar />
      <div className="h-full container">
        <div className="h-full flex flex-col lg:flex-row lg:justify-between">
          <article className=" w-full lg:w-[50%] flex flex-col gap-3 md:gap-6 pt-8 md:pt-16 relative z-10 ">
            <h2 className="montserrat text-[56px] md:text-[60px] font-bold leading-none">
              <span className="text-[#172B4D]">Firma Biométrica </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(to top, #000000, #4C96FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Segura y Eficiente
              </span>
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              rem libero id quod repudiandae nemo nam. Perferendis quibusdam
              ducimus, natus laboriosam libero recusandae culpa doloremque.
            </p>
            <div className="flex gap-2 mt-4 text-md md:mt-6 md:text-lg ">
              <Button
                backgroundColor={"transparent"}
                textColor={"#2A5189"}
                content={"Prueba gratis"}
                borderColor="#2A5189"
              />
              <Button
                backgroundColor={"#2A5189"}
                textColor={"white"}
                content={"Hablar con especialista"}
                borderColor="#2A5189"
              />
            </div>
          </article>
          <figure className="flex-1 hidden md:flex w-auto max-h-[460px] mx-auto lg:ml-auto ">
            <Lottie
              animationData={animationData}
              className="h-full w-full"
              loop={false}
            />
          </figure>
        </div>

        {/* <div className="w-full md:w-[80%] mx-auto grid  grid-cols-3  gap-4 mt-16 relative z-20"> */}
        <div className="montserrat w-full md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3  gap-4 mt-16 relative z-20">
          <Metric content="1500 firmas" target={1500} />
          <Metric content="200 clientes contentos" target={200} />
          <Metric content="Más de 10 años de experiencia" target={10} />
        </div>

        <div className="relative z-20">
          <CompanyList />
        </div>

        {/* Gradiente */}
        <div className="absolute gradient top-1/2 right-1/3 transform translate-x-[500px] -translate-y-1/2 h-[400px] w-[500px] blur-[20rem] z-10"></div>
      </div>
    </section>
  );
};

export default Header;

{
  /* <div className=" gradient w-[300px] h-[300px] inset-0 blur-[10rem]"></div> */
}
