import React from "react";
import IndustryItem from "./IndustryItem";
import Button from "../Button";

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
    // {
    //   title: "Telecomunicaciones",
    //   icon: "/industrias/telecomunicaciones.png",
    // },
  ];

  return (
    <section className="relative bg-white z-50 pt-16 sectionStyle bottomSection">
      <div className="md:flex md:justify-between gap-2 container">
        <div className="flex-1 space-y-4 ">
          <p className="text-left subtitle">Especialistas</p>
          <h2 className="text-[42px] md:text-[60px] title">
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

          <p className="text-left">
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
        <div className="mt-10 md:mt-0 grid grid-cols-2 md:grid-cols-3 gap-6 flex-1 md:p-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="h-full flex items-center rounded-xl border border-gray-100 p-4 shadow-md transition hover:shadow-xl hover:border-blue-700/20 hover:shadow-blue-700/20"
            >
              <IndustryItem title={industry.title} icon={industry.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
