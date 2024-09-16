"use client";
import React from "react";
import Timeline from "./Timeline";
import TimelineList from "./TimelineList";
import Image from "next/image";
import TextContent from "../reusable/TextContent";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";

const Steps2 = () => {
  return (
    <section className=" bg-[#FFFFFF] sectionStyle overflow-hidden">
      <div className="container">
        {/* <div className="w-full ">
        <TextContent
          title={"Como funciona"}
          subtitle="Especialistas"
          description={
            "La firma biométrica ofrece una serie de beneficios clave que la han convertido en una opción cada vez más popular en sectores como la banca, seguros, medicina y telecomunicaciones.  "
          }
          icon={IntegrationInstructionsTwoToneIcon}
          position={"left"}
        />
      </div> */}
        <div className="md:hidden mb-8 ">
          <TextContent
            title={"Como funciona"}
            subtitle="Especialistas"
            icon={StairsOutlinedIcon}
            position={"left"}
          />
        </div>
        <div className="flex flex-col-reverse gap-2 md:gap-10 md:flex-row md:justify-between justify-center ">
          <div className=" w-full md:w-[50%]">
            <div className="hidden md:flex">
              <TextContent
                title={"Como funciona"}
                subtitle="Especialistas"
                icon={StairsOutlinedIcon}
                position={"left"}
              />
            </div>
            <TimelineList />
          </div>

          <div className="relative md:flex-1 md:mt-0">
            <div className="drop-shadow-lg image-shadow-mobile md:image-shadow-desktop overflow-hidden w-auto relative md:w-[170%] h-auto aspect-[16/9] bg-red border-4 rounded-[12px] md:rounded-[24px] !border-[#1f2937]">
              <Image
                src="/step1.jpg"
                alt="Descripción"
                className="w-full md:h-auto md:object-contain"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps2;
