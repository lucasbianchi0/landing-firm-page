import React from "react";
import IndustryItem from "./IndustryItem";

const Industries = () => {
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
    <section className="relative bg-white z-50 mt-[-100px] rounded-t-[70px] w-full pt-16 pb-[200px]">
      <div className=" w-[90%] mx-auto flex justify-between gap-2">
        <div className="grid grid-cols-2 gap-6 flex-1 p-10">
          {industries.map((industry, index) => (
            <div key={index} className="h-full flex items-center">
              <IndustryItem title={industry.title} icon={industry.icon} />
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-4 ">
          <p className="text-right text-[hsl(215,76%,73%)] font-bold">
            Especialistas
          </p>
          <h2 className="text-[60px] font-bold leading-none text-right">
            <span className="text-[#172B4D]">Especialistas</span>

            <br />
            <span className="text-[#172B4D]">en estas</span>
            <br />
            <span
              style={{
                background: "linear-gradient(to top, #000000, #4C96FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              industrias
            </span>
          </h2>

          <p className="text-right">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            veniam sed doloremque minus dolore aliquid temporibus quaerat, quam
            perspiciatis porro itaque eveniet hic natus magnam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
