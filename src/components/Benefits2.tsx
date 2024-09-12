import Image from "next/image";
import React from "react";
import { GrMoney } from "react-icons/gr";
import { IoAccessibility, IoDocumentsOutline } from "react-icons/io5";
import {
  MdOnlinePrediction,
  MdOutlineIntegrationInstructions,
} from "react-icons/md";
import { VscLaw } from "react-icons/vsc";
import Design from "./Design";

const Benefits2 = () => {
  const benefits = [
    {
      title: "Transformación Digital",
      description:
        "Transforma tu empresa con soluciones digitales innovadoras.",
      icon: MdOnlinePrediction,
    },
    {
      title: "Validación Jurídica",
      description:
        "Asegura que tus documentos cumplen con los requisitos legales.",
      icon: VscLaw,
    },
    {
      title: "Accesibilidad",
      description:
        "Facilita el acceso a tus documentos desde cualquier dispositivo.",
      icon: IoAccessibility,
    },
    {
      title: "Integridad Documental",
      description: "Garantiza la integridad y autenticidad de tus documentos.",
      icon: IoDocumentsOutline,
    },
    {
      title: "Integración Multicanal",
      description: "Conecta tus procesos a través de múltiples canales.",
      icon: MdOutlineIntegrationInstructions,
    },
    {
      title: "Alto Retorno de Inversión",
      description: "Maximiza el retorno de inversión con soluciones efectivas.",
      icon: GrMoney,
    },
  ];
  return (
    <section className="relative z-0 pt-20 overflow-hidden bg-white bottomSection sectionStyle">
      <div className="container relative z-10 ">
        <div className="max-w-[50%]">
          <p className="text-left text-[hsl(215,76%,73%)] font-bold ">
            Lorem ipsum
          </p>
          <h2
            className="text-left text-[48px] font-semibold"
            style={{
              background: "linear-gradient(to top, #000000, #4C96FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Beneficios Lorem, ipsum.
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            vitae earum! Maiores sapiente molestias possimus consectetur quas
            perspiciatis dolor voluptatum.
          </p>
        </div>
        <div className="relative z-10 grid grid-cols-1 gap-3 py-10 mx-auto md:grid-cols-3 md:gap-8">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className="relative flex flex-col justify-center gap-2 py-6 text-left bg-white rounded-lg mx:py-4 md:px-3"
            >
              <benefit.icon
                style={{ fontSize: "4rem" }}
                className="p-5 bg-zinc-200 text-[#569BFF]"
              />
              <h3 className=" border-l-2 border-l-[#569BFF] font-semibold text-black px-2 py-0">
                {benefit.title}
              </h3>
              <p className="px-2 leading-tight text-md text-pretty text-zinc-400">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        {/* version hiper ui
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div className="flex items-start gap-4">
              <span className="p-4 bg-gray-200 rounded-lg shrink-0">
                <benefit.icon
                  style={{ fontSize: "4rem" }}
                  className="px-2 text-[#569BFF]"
                />
              </span>

              <div>
                <h2 className="text-lg font-bold">{benefit.title}</h2>

                <p className="mt-1 text-gray-800 text-md">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      {/* <div className="absolute inset-0 z-0 bg-zinc-400 opacity-60"></div>

      <Image
        alt="min-h-screen"
        src="/header.jpg"
        fill
        sizes="100vw"
        loading="eager"
        style={{
          objectFit: "cover",
          zIndex: -5,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      /> */}
    </section>
  );
};

export default Benefits2;
