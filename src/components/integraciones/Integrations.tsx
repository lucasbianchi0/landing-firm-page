import React from "react";
import IntegrationItem from "./IntegrationItem";
import TextContent from "../reusable/TextContent";
import TollOutlinedIcon from "@mui/icons-material/TollOutlined";
import { integraciones } from "@/data/integraciones";

const Integrations = () => {
  return (
    <section className="relative z-10 w-full sectionStyle overflow-hidden">
      <div className="container flex flex-col gap-5 md:flex-row md:justify-between md:gap-10">

        <div className="w-full md:w-[40%]">
          <TextContent
            title={"Integra la firma biométrica"}
            description={
              "La firma biométrica ofrece una serie de beneficios clave que la han convertido en una opción cada vez más popular en sectores como la banca, seguros, medicina y telecomunicaciones"
            }
            subtitle={"Sin límites"}
            icon={TollOutlinedIcon}
            position="left"
          />
          <p className="text-blue-600 mt-5 ">+ 150 integraciones nativas</p>
        </div>

        <div className="grid flex-1 grid-cols-3 grid-rows-3 gap-2 md:gap-4 z-50 md:pb-5">
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
