"use client";
import React from "react";
import Timeline from "./Timeline";
import TimelineList from "./TimelineList";
import Image from "next/image";
import TextContent from "../reusable/TextContent";
import IntegrationInstructionsTwoToneIcon from "@mui/icons-material/IntegrationInstructionsTwoTone";
import Blog from "@/app/blog/page";

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
            icon={IntegrationInstructionsTwoToneIcon}
            position={"left"}
          />
        </div>
        <div className="flex flex-col-reverse gap-2 md:gap-10 md:flex-row md:justify-between flex flex-col justify-center ">
          <div className=" w-full md:w-[50%]">
            <div className="hidden md:flex">
              <TextContent
                title={"Como funciona"}
                subtitle="Especialistas"
                icon={IntegrationInstructionsTwoToneIcon}
                position={"left"}
              />
            </div>
            <TimelineList />
          </div>

          <div className="relative md:flex-1 md:mt-0">
            <div
              style={{
                boxShadow: "10px 10px 20px 6px rgba(14, 116, 255, 0.5)",
              }}
              className="drop-shadow-lg overflow-hidden w-auto  relative  md:w-[170%] h-auto aspect-[16/9] bg-red border-2 rounded-xl border-gray-800 !border-[#0E74FF] "
            >
              {/* Gradiente detrás de la imagen */}
              {/* <div className="absolute bottom-0 right-300 h-[510px] w-[630px] rounded-xl blur-[5rem] z-[-1] bg-gradient-to-r from-blue-200 to-blue-200"></div> */}

              <Image
                src="/step1.jpg"
                alt="Descripción"
                className="w-full md:h-auto  md:object-contain"
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

{
  /* <figure className="relative h-[500px] w-full rounded-xl"> */
}
{
  /* <Image src="/firmaex.jpg" fill alt="" className="object-cover" /> */
}
{
  /* <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[582px] md:max-w-[512px]">
            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[554px] bg-white dark:bg-gray-800">
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[582px] md:max-w-[512px]">
                <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[554px] bg-white dark:bg-gray-800">
                  <img
                    src="/firmaex.jpg"
                    className="object-cover h-full"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>
          </div> */
}

{
  /* </figure> */
}

// estoy haciendo una pagina de firma biometrica y las secciones son:

// 1- paso a paso como funciona la solucion
// 2- beneficios
// 3- integraciones
// 4- industrias
// 5- preguntas frecuentes
// 6 - un preview de noticias del Blog

// dime titulos cortos pero especificos y que llamen la atencion para poner en la pagina de firma biometrica
