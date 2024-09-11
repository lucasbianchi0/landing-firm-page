import React from "react";
import IntegrationItem from "./IntegrationItem";
import IntegrationInstructionsTwoToneIcon from "@mui/icons-material/IntegrationInstructionsTwoTone";
import TextContent from "../reusable/TextContent";

const Integrations = () => {
  const integrations = [
    {
      image: "/integraciones/sharepoint.png",
    },
    {
      image: "/integraciones/dynamics.png",
    },
    {
      image: "/integraciones/salesforce.webp",
    },
    {
      image: "/integraciones/sap.png",
    },
    {
      style: "col-span-2",
      image: "/integraciones/gg2.png",
    },
    {
      style: "col-span-2 row-start-3",
      image: "/integraciones/servicenow.png",
    },
    {
      style: "col-start-3 row-start-3",
      image: "/integraciones/aws.png",
    },
  ];

  return (
    <section className="relative bg-[#FEFEFE] z-10 w-full sectionStyle">
      <div className="container flex flex-col gap-5 md:flex-row md:justify-between md:gap-10">
        {/* <div className="flex flex-col items-start md:w-[40%] space-y-4 md:items-start">
          <p className="text-left md:text-left subtitle">Especialistas</p>
          <h2 className="text-[44px] text-left md:text-[56px] md:text-left title ">
            <span className="text-[#172B4D] w-full">
              Integra la Firma Electrónica
            </span>
            <span
              style={{
                background: "linear-gradient(to top, #000000, #4C96FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >

            </span>
          </h2>
          <p className="text-left text-description">
            La firma biométrica ofrece una serie de beneficios clave que la han
            convertido en una opción cada vez más popular en sectores como la
            banca, seguros, medicina y telecomunicaciones.
          </p>

          <div className="mt-10">
            <p className="text-[#006BFC] ">Lorem ipsum dolor sit amet.</p>
          </div>
        </div> */}
        <div className="w-full md:w-[40%]">
          <TextContent
            title={"Integra la firma electronica"}
            description={
              "La firma biométrica ofrece una serie de beneficios clave que la han convertido en una opción cada vez más popular en sectores como la banca, seguros, medicina y telecomunicaciones"
            }
            subtitle={"Technology"}
            icon={IntegrationInstructionsTwoToneIcon} // Aquí debes pasar un componente de ícono
            position="left"
          />
        </div>

        <div className="grid flex-1 grid-cols-3 grid-rows-3 gap-2 md:gap-4">
          {integrations.map((integration, index) => (
            <IntegrationItem
              key={index}
              image={integration.image}
              style={integration.style}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
