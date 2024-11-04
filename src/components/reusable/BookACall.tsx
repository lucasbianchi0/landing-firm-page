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
    <div className="sectionStyle mb-[70px] container">
      <div className="w-full md:max-w-[85%] mx-auto overflow-hidden text-white rounded-2xl drop-shadow-xl bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="flex flex-col items-center justify-between gap-8 p-8 gap-y-12 lg:flex-row">
          <div className="flex flex-col space-y-4 lg:max-w-[60%]">
            <h2 className="text-3xl font-bold">
              Agenda tu consulta gratuita con un especialista
            </h2>
            <p className="text-lg">
              Descubre cómo podemos ayudarte en una llamada personalizada de 30
              minutos. Resuelve tus dudas y conoce nuestras soluciones.
            </p>
            {/* Botón solo se renderiza en el cliente */}
            {isMounted && (
              <PopupButton
                url="https://calendly.com/lucas-bianchi"
                rootElement={document.body}
                text="Agendar llamada de 30 minutos"
                className="self-start px-4 py-2 font-semibold text-blue-600 transition-colors duration-200 bg-white rounded-md hover:bg-blue-100 hover:text-blue-700"
              />
            )}
          </div>
          <figure className="relative w-64 h-64 overflow-hidden border-4 border-white rounded-full">
            <Image
              src="/fdp.jpeg"
              alt="Imagen del consultor"
              className="object-cover w-full h-full"
              fill
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
