import React from "react";
import IndustryItem from "../industrias/IndustryItem";

const Integrations = () => {
  const industries = [
    {
      title: "Logística",
      icon: "/industrias/logistica.png",
    },
    {
      title: "Retail",
      icon: "/industrias/retail.png",
    },
    {
      title: "Educación",
      icon: "/industrias/educacion.png",
    },
    {
      title: "Automotriz",
      icon: "/industrias/automotriz.png",
    },
    {
      title: "Farmacéutica",
      icon: "/industrias/farmaceutica.png",
    },
    {
      title: "Banca",
      icon: "/industrias/banca.png",
    },
    {
      title: "Fintech",
      icon: "/industrias/fintech.png",
    },
    {
      title: "Seguros",
      icon: "/industrias/seguros.png",
    },
    {
      title: "Medicina",
      icon: "/industrias/medicina.png",
    },
    {
      title: "Telecomunicaciones",
      icon: "/industrias/telecomunicaciones.png",
    },
  ];

  return (
    <section className=" hidden pb-[300px] relative bg-[#E4EDF7] z-40 mt-[-100px] rounded-t-[70px] w-full pt-16">
      <div className=" w-[90%] mx-auto flex justify-between gap-2">
        <div className="flex-1 space-y-4 ">
          <p className="text-left text-[hsl(215,76%,73%)]  font-bold">
            Especialistas
          </p>
          <h2
            className="text-left text-[48px] font-medium"
            style={{
              background: "linear-gradient(to top, #000000, #4C96FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Nuestras integraciones
          </h2>
          <p className="text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            veniam sed doloremque minus dolore aliquid temporibus quaerat, quam
            perspiciatis porro itaque eveniet hic natus magnam.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 flex-1">
          {industries.map((industry, index) => (
            <div key={index} className="h-full flex items-center">
              <IndustryItem title={industry.title} icon={industry.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
