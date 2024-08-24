import React from "react";
import Image from "next/image";

const Benefits = () => {
  const benefits = [
    {
      title: "Transformación Digital",
      description:
        "Transforma tu empresa con soluciones digitales innovadoras.",
      icon: "/beneficios/transformacionDigital.png",
    },
    {
      title: "Validación Jurídica",
      description:
        "Asegura que tus documentos cumplen con los requisitos legales.",
      icon: "/beneficios/juridico.png",
    },
    {
      title: "Accesibilidad",
      description:
        "Facilita el acceso a tus documentos desde cualquier dispositivo.",
      icon: "/beneficios/accesibilidad.png",
    },
    {
      title: "Integridad Documental",
      description: "Garantiza la integridad y autenticidad de tus documentos.",
      icon: "/beneficios/documentacion.png",
    },
    {
      title: "Integración Multicanal",
      description: "Conecta tus procesos a través de múltiples canales.",
      icon: "/beneficios/multicanal.png",
    },
    {
      title: "Alto Retorno de Inversión",
      description: "Maximiza el retorno de inversión con soluciones efectivas.",
      icon: "/beneficios/ganancia.png",
    },
  ];

  return (
    <section className="relative bg-[#E4EDF7] z-10 mt-[-100px] rounded-t-[70px] w-full min-h-[100vh] pt-16 pb-[200px]">
      <div className="bg-[#F0F7FF] w-[90%] mx-auto py-10 shadow-xl border rounded-2xl ">
        <p className="text-center text-[hsl(215,76%,73%)] font-bold">
          Lorem ipsum
        </p>
        <h2
          className="text-center text-[48px] font-semibold"
          style={{
            background: "linear-gradient(to top, #000000, #4C96FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Beneficios
        </h2>

        <div className="relative grid grid-cols-3 gap-8 w-[85%] py-10 mx-auto">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className="relative rounded-lg py-6 px-3 border border-white text-center flex flex-col justify-center gap-2 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg"
            >
              <figure className="relative h-[90px] w-[90px] mx-auto">
                <Image src={benefit.icon} alt="" fill />
              </figure>
              <h3 className="font-semibold text-[#2A5189]">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
          <div className="absolute gradient top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[250px] w-[250px] blur-[10rem]"></div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
