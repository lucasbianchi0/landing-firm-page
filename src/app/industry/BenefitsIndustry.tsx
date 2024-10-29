import Image from "next/image";
import React from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
interface IIndustryItem {
  title: string;
  description: string;
}

const IndustryBenefitItem = ({ title, description }: IIndustryItem) => {
  return (
    <div className="relative flex flex-col gap-5 bg-white p-4 drop-shadow-lg rounded-xl lg:hover:scale-105 lg:hover:drop-shadow-2xl transition-all duration-200">
      <div className="absolute top-0 left-0 w-full h-2 rounded-t-xl bg-gradient-to-r from-blue-600 to-blue-800"></div>
      <div className=" flex flex-col py-8 px-4">
        <h4 className="text-[28px] md:text-2xl text-[#172B4D]  font-bold leading-tight ">
          {title}
        </h4>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
};

const BenefitsIndustry = () => {
  const industryItems = [
    {
      title: "Completa tu proceso comercial en línea",
      description:
        "Completa íntegramente la comercialización de tus servicios logísticos a través de tu web u otros canales electrónicos, integrando Contractia en estos procesos para que tus clientes suscriban con respaldo legal, los documentos requeridos para la contratación de tus servicios.",
    },
    {
      title: "Logra clientes más satisfechos",
      description:
        "Facilita la vida de tus clientes permitiéndoles firmar los documentos relacionados a tus servicios logísticos desde su casa u oficina, a toda hora y desde cualquier dispositivo.",
    },
    {
      title: "La firma que tu negocio necesita",
      description:
        "Aplica el tipo de firma electrónica que tus procesos de negocios requieren. Ya sea que necesites aplicar firmas remotas o presenciales, Contractia puede gestionar ambos tipos de firmas y automatizar el proceso de firma, distribución y archivo de los documentos para simplificar la operatoria administrativa de tu compañía.",
    },
  ];

  return (
    <section className="container w-full mb-[150px] md:mb-[100px]">
      <div className="container flex flex-col md:flex-1 gap-4 md:py-0 md:mt-20 pb-[10px] ">
        <p className="subtitle mx-auto">Especialistas</p>
        <h2 className="text-[44px] md:text-[70px] md:text-center title gap-2 ">
          <span
            style={{
              background: "linear-gradient(to top, #000000, #4C96FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Lo hacemos simple
          </span>
        </h2>
      </div>

      <div className="mt-20 grid grid-cols-1  gap-10 ">
        {/* <figure className="container h-[250px] md:h-full relative md:flex-1">
          <Image src="/fintech.webp" className="object-cover" alt="" fill />
        </figure> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 gap-y-6">
          {industryItems.map((industry, index) => (
            <IndustryBenefitItem
              key={index}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>
      </div>

      {/* <div className=" space-y-4 w-full container flex flex-col-reverse md:flex-1 md:flex-row gap-5 md:gap-10 mt-0 md:mt-10 !mx-0 md:justify-between">
        <div className=" container flex flex-col flex-1 gap-6 py-0 ">
          {industryItems.map((industry, index) => (
            <IndustryBenefitItem
              key={index}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>
        <figure className="container h-[250px] md:h-[500px] relative md:flex-1">
          <Image src="/fintech.webp" alt="" fill />
        </figure>
      </div> */}
    </section>
  );
};

export default BenefitsIndustry;
