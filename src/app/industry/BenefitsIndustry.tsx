import Image from "next/image";
import React from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TextContent from "@/components/reusable/TextContent";
interface IIndustryItem {
  title: string;
  description: string;
}

const IndustryBenefitItem = ({ title, description }: IIndustryItem) => {
  return (
    <div className="relative flex flex-col h-full gap-5 p-4 transition-all duration-200 bg-white drop-shadow-lg rounded-xl lg:hover:scale-105 lg:hover:drop-shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-2 rounded-t-xl bg-gradient-to-r from-blue-600 to-blue-800"></div>
      <div className="flex flex-col h-full px-4 py-8 gap-y-5">
        <h4 className="text-[28px] md:text-2xl text-[#172B4D]  font-bold leading-tight ">
          {title}
        </h4>
        <p>{description}</p>
        <p className="mt-auto text-blue-500 ">
          Más información
          <ChevronRightIcon />
        </p>
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
      <TextContent title={"Lo hacemos simple"} subtitle="" position={"left"} />

      <div className="grid grid-cols-1 gap-10 mt-20 ">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 gap-y-6">
          {industryItems.map((industry, index) => (
            <IndustryBenefitItem
              key={index}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsIndustry;
