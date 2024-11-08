"use client";
import Image from "next/image";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

export default function BookACall() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className=" sectionStyle mb-[70px] container ">
      <div className="relative w-full md:h-[370px] md:max-w-[80%] flex flex-col items-center justify-between  px-6 pt-6 md:py-0 md:px-14  lg:flex-row mx-auto overflow-hidden text-white rounded-2xl drop-shadow-xl bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="overflow-hidden flex flex-col space-y-4 lg:max-w-[60%]">
          <h2 className="text-2xl md:text-4xl font-bold">
            Agenda tu consulta gratuita con un especialista
            </h2>
          <p className=" md:text-lg">
            Descubre cómo podemos ayudarte en una llamada personalizada de 30
            minutos. Resuelve tus dudas y conoce nuestras soluciones.
            </p>
          {/* Botón solo se renderiza en el cliente */}
          <div className="relative">

            {isMounted && (
              <PopupButton
                url="https://calendly.com/lucas-bianchi"
                rootElement={document.body}
                text="Agendar llamada de 30 minutos"
                className=" self-start px-4 py-2 font-semibold text-blue-600 transition-colors duration-200 bg-white rounded-md hover:bg-blue-100 hover:text-blue-700"
              />
            )}
          </div>

        </div>
        <figure
          className="relative md:absolute md:-bottom-10  h-[400px] md:h-[420px] w-auto md:right-20  overflow-hidden  ">
          <Image
            src="/blonda.png"
            alt="Imagen del consultor"
            className=" w-full h-full filter:drop-shadow-2xl"
            height={600}
            width={250}
          />
        </figure>

      </div>
    </div>
  );
}
