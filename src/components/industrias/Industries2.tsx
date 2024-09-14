import React from "react";
import IndustryItem from "./IndustryItem";
import Button from "../Button";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import PaymentTwoToneIcon from "@mui/icons-material/PaymentTwoTone";
import TextContent from "../reusable/TextContent";
import IntegrationInstructionsRoundedIcon from "@mui/icons-material/IntegrationInstructionsRounded";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";

const Industries2 = () => {
  const industries = [
    {
      title: "Logística",
      icon: LocalShippingRoundedIcon,
      color: "#A3C6FF",
      hoverClass: "industry-item-hover-blue-soft",
    },
    {
      title: "Retail",
      icon: StoreRoundedIcon,
      color: "#FFD1A3",
      hoverClass: "industry-item-hover-orange-soft",
    },
    {
      title: "Educación",
      icon: EditRoundedIcon,
      color: "#A3FFD1",
      hoverClass: "industry-item-hover-green-soft",
    },
    {
      title: "Automotriz",
      icon: DirectionsCarFilledRoundedIcon,
      color: "#FFC6A3",
      hoverClass: "industry-item-hover-pink-soft",
    },
    {
      title: "Farmacéutica",
      icon: MedicalServicesRoundedIcon,
      color: "#D1A3FF",
      hoverClass: "industry-item-hover-purple-soft",
    },
    {
      title: "Banca",
      icon: AccountBalanceRoundedIcon,
      color: "#FFD1D1",
      hoverClass: "industry-item-hover-pale-pink",
    },
    {
      title: "Fintech",
      icon: PaymentTwoToneIcon,
      color: "#A3D1FF",
      hoverClass: "industry-item-hover-light-blue",
    },
    {
      title: "Seguros",
      icon: HealthAndSafetyRoundedIcon,
      color: "#FFE6A3",
      hoverClass: "industry-item-hover-yellow-soft",
    },

    {
      title: "Telecoms",
      icon: WifiRoundedIcon,
      color: "#A3FFE6",
      hoverClass: "industry-item-hover-teal",
    },
  ];

  return (
    <section className="relative z-50 bg-[#1D293B] overflow-hidden sectionStyle">
      <div className="absolute inset-0 bg-black/60 " style={{ zIndex: -5 }} />
      <video
        className="hidden md:block absolute top-0 left-0 object-cover w-full h-full -z-10"
        autoPlay
        loop
        muted
        preload="auto"
        style={{
          animation: "slowVideo 60s linear infinite",
          WebkitAnimation: "slowVideo 60s linear infinite",
        }}
      >
        <source src="/background1.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      {/* <div className=" absolute gradient bottom-0 right-40 h-[450px] rounded-full w-[400px] blur-[7rem] z-1"></div> */}

      <div className="container flex flex-col-reverse gap-5 md:gap-10 md:flex-row md:justify-between">
        <div className="flex-1 ">
          <div className="md:w-[70%] mx-auto grid grid-cols-2 gap-4 mt-10 md:mt-0 md:grid-cols-3">
            {industries.map((industry, index) => (
              <IndustryItem
                key={index}
                title={industry.title}
                icon={industry.icon}
                color={industry.color}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
        <div className="z-10 flex flex-col w-full md:w-[40%] space-y-4 md:items-end">
          <TextContent
            title={"Especialistas en estas industrias"}
            description={
              "La firma biométrica ofrece una serie de beneficios clave que la han convertido en una opción cada vez más popular en sectores como la banca, seguros, medicina y telecomunicaciones. Uno de los principales beneficios es la seguridad: al utilizar características biométricas únicas"
            }
            subtitle={"Technology"}
            icon={InventoryOutlinedIcon}
            position="right"
            color={"white"}
          />
          {/* <div className="pt-2">
            <Button
              backgroundColor={"#2A5189"}
              textColor={"white"}
              content={"Hablar con especialista"}
              borderColor="#2A5189"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Industries2;
