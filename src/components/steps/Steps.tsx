"use client";

import React, { useEffect, useState } from "react";
import StepCard from "./StepCard";
import animationData1 from "../../lottie/paso1.json";
import animationData2 from "../../lottie/paso2.json";
import animationData3 from "../../lottie/paso3.json";
import animationData4 from "../../lottie/paso4.json";
import Button from "../Button";

const Steps = () => {
  const stepData = [
    {
      title: "Preparar el Documento y el Dispositivo",
      description:
        "Abre el documento que quieres firmar. Conecta y ajusta la tableta Wacom.",
      animationData: animationData1,
    },
    {
      title: "Configurar el Software de Firma",
      description: "Abre el software de firma ESignAnywhere.",
      animationData: animationData2,
    },
    {
      title: "Firmar el Documento",
      description: "Firma con el lápiz de la tableta Wacom.",
      animationData: animationData3,
    },
    {
      title: "Finalizar y Enviar",
      description:
        "Guarda y envía el documento firmado electrónicamente a las partes pertinentes.",
      animationData: animationData4,
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % stepData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [stepData.length]);

  return (
    <section className="relative bg-[#F5F6F7] z-10 w-full min-h-[100vh] sectionStyle bottomSection md:pb-0">
      <div className="container">
        <p className="text-center subtitle">Como funciona</p>
        <h2
          className="text-center text-[48px] title"
          style={{
            background: "linear-gradient(to top, #000000, #4C96FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Con Accedra es simple
        </h2>

        <div className="space-y-3 md:space-y-0 mx-auto md:flex mt-10 md:items-stretch h-full justify-center">
          {stepData.map((card, index) => (
            <div
              key={index}
              className="flex justify-center md:justify-normal items-center mx-auto  md:flex-1 "
            >
              <StepCard
                title={card.title}
                description={card.description}
                animationData={card.animationData}
              />
              {index < stepData.length - 1 && (
                <div
                  className={`md:gradient-line md:step-${currentStep}`}
                ></div>
              )}
            </div>
          ))}
        </div>

        <div className="pt-10 flex flex-col items-center md:flex-row md:justify-center gap-2 w-full">
          <div className=" ">
            <Button
              backgroundColor={"transparent"}
              textColor={"#2A5189"}
              content={"Prueba gratis"}
              borderColor="#2A5189"
            />
          </div>
          <div className="">
            <Button
              backgroundColor={"#2A5189"}
              textColor={"white"}
              content={"Hablar con especialista"}
              borderColor="#2A5189"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
