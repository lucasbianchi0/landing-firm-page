"use client";

import React, { useEffect, useState } from "react";
import StepCard from "./StepCard";
import animationData1 from "../../lottie/paso1.json";
import animationData2 from "../../lottie/paso2.json";
import animationData3 from "../../lottie/paso3.json";
import animationData4 from "../../lottie/paso4.json";

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
    <section className="relative bg-[#F5F6F7] z-10 mt-[-100px] rounded-t-[70px] w-full min-h-[100vh] pt-16">
      <div className="max-w-[80%] mx-auto">
        <p className="text-center text-[#85B0EE] font-bold">Como funciona</p>
        <h2
          className="text-center text-[48px] font-semibold"
          style={{
            background: "linear-gradient(to top, #000000, #4C96FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Con Accedra es simple
        </h2>

        <div className="flex mt-10 items-stretch h-full">
          {stepData.map((card, index) => (
            <div key={index} className="flex items-center flex-1">
              <StepCard
                title={card.title}
                description={card.description}
                animationData={card.animationData}
              />
              {index < stepData.length - 1 && (
                <div className={`gradient-line step-${currentStep}`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
