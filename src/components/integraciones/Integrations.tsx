import React from "react";
import IntegrationItem from "./IntegrationItem";
import TextContent from "../reusable/TextContent";
import TollOutlinedIcon from "@mui/icons-material/TollOutlined";
import { textoIntegraciones } from "@/data/6-integraciones";
const Integrations = () => {
  const integraciones = [
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
    <section className="relative z-10 w-full sectionStyle ">
      <div className="container flex flex-col gap-5 md:flex-row md:justify-between md:gap-10">
        <div className="w-full md:w-[40%]">
          <TextContent
            title={textoIntegraciones[0].tituto}
            description={textoIntegraciones[0].descripcion}
            subtitle={textoIntegraciones[0].subtituloSuperior}
            icon={TollOutlinedIcon}
            position="left"
          />
          <p className="text-blue-600 mt-5 ">+ 150 integraciones nativas</p>
        </div>

        <div className="grid flex-1 grid-cols-3 grid-rows-3 gap-2 md:gap-4">
          {integraciones.map((integration, index) => (
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