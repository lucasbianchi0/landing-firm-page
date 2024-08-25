import React from "react";
import Accordion from "./Accordion";

const Faqs = () => {
  const faqs = [
    {
      summary: "¿Qué es la transformación digital?",
      description:
        "La transformación digital implica la integración de tecnología digital en todas las áreas de una empresa, cambiando fundamentalmente cómo operas y brindas valor a los clientes.",
    },
    {
      summary: "¿Cómo se valida la autenticidad de los documentos?",
      description:
        "La validación de documentos se realiza a través de procesos jurídicos que aseguran el cumplimiento de todas las normativas legales aplicables.",
    },
    {
      summary: "¿Qué es la accesibilidad digital?",
      description:
        "La accesibilidad digital se refiere a la capacidad de un sistema para ser usado por cualquier persona, independientemente de sus capacidades técnicas o físicas.",
    },
    {
      summary: "¿Qué es la integridad documental?",
      description:
        "La integridad documental asegura que un documento no ha sido alterado desde su creación, manteniendo su autenticidad y confiabilidad.",
    },
  ];

  return (
    <section className="relative bg-white z-10 min-h-[100vh] h-full bottomSection sectionStyle overflow-hidden">
      <div className="container">
        <p className="text-center subtitle">Alguna duda?</p>
        <h2
          className="text-center text-[48px] title"
          style={{
            background: "linear-gradient(to top, #000000, #4C96FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Preguntas frequentes
        </h2>

        <div className="py-10 w-full md:w-[60%] mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              summary={faq.summary}
              description={faq.description}
            />
          ))}{" "}
        </div>
      </div>
      <div className="absolute gradient top-1/2 right-1/3 transform translate-x-[500px] -translate-y-1/2 h-[400px] w-[500px] blur-[20rem] z-10"></div>
    </section>
  );
};

export default Faqs;
