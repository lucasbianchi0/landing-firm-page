import React from "react";
import IntegrationItem from "./IntegrationItem";
import Button from "../Button";

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
    <section className="relative bg-[#E4EDF7] z-40  w-full sectionStyle bottomSection">
      <div className="container flex justify-between gap-2">
        <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-4">
          {integrations.map((integration, index) => (
            <IntegrationItem
              key={index}
              image={integration.image}
              style={integration.style}
              delay={index * 0.2}
            />
          ))}
        </div>
        <div className="flex-1 space-y-4 flex flex-col items-end">
          <p className="text-right subtitle">Especialistas</p>
          <h2 className="text-[44px] text-right md:text-[44px] title ">
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
              con tus Aplicaciones y CRMs
            </span>
          </h2>
          <p className="text-right">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            veniam sed doloremque minus dolore aliquid temporibus quaerat, quam
            perspiciatis porro itaque eveniet hic natus magnam.
          </p>
          <div className="pt-2">
            <Button
              backgroundColor={"#2A5189"}
              textColor={"white"}
              content={"Hablar con especialista"}
              borderColor="#2A5189"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
