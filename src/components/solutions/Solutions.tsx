import Image from "next/image";
import React from "react";
import TextContent from "../reusable/TextContent";
import TollOutlinedIcon from "@mui/icons-material/TollOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
const Solutions = () => {
  return (
    <section className="container sectionStyle ">
      <div className="w-full lg:w-full">
        <TextContent
          title={"Soluciones"}
          subtitle={"Para ti"}
          icon={TollOutlinedIcon}
          position="center"
        />
      </div>
      <div className="gap-10 space-y-8 lg:space-y-0 mt-12 lg:grid lg:grid-cols-2 h-full ">

        {[
          {
            title: "Firma remota || (a distancia)",
            description:
              "Con nuestras soluciones de firma vas a poder firmar desde cualquier dispositivo, cualquier navegador, sin tener que descargarte ninguna aplicación. Con nuestra SUITE de firma electrónica digital vas a poder firmar cualquier documento, remitos, recibos de sueldo, contratos, formularios, desde la comodidad de tu casa",

            image: "/soluciones/page2.jpg",
            alt: "Descripción 1",
          },
          {
            title: "Firma presencial || (puntos de venta)",
            description:
              "Con nuestras soluciones de firma biométrica digital, vas a poder firmar a través de dispositivos de firma (PAD) como si firmaras en Papel y Birome. El proceso más natural de firma con validez jurídica y análisis forense de la firma.",
            image: "/soluciones/Wacom.png",
            alt: "Descripción 2",
          },
        ].map((item, index) => (
          <article
            key={index}
            className="bg-[#F6F9FC] flex-1 border-2 h-full border-zinc-200 relative flex flex-col-reverse sm:flex-row lg:grid grid-cols-12  md:gap-7 w-full overflow-hidden transition-all duration-300 ease-in-out transform  lg:border-zinc-200 shadow-md md:shadow-xl rounded-lg md:rounded-2xl group lg:hover:scale-105 lg:hover:filter lg:hover:border-2 lg:hover:border-blue-700/20 lg:hover:shadow-2xl lg:hover:shadow-blue-700/40"
          >
            <div className="border-t-2 border-zinc-200 md:border-none flex-1 p-3 md:pl-7 py-4 md:py-7 relative flex flex-col w-full lg:col-span-7 gap-y-4  gap-3 transition-all duration-300 ease-in-out transform overflow-hidden lg:group-hover:-translate-y-3 ">
              <h3 className="text-[#243657] montserrat text-2xl lg:text-3xl font-semibold text-pretty">
                {item.title.split("||").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < item.title.split("||").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>

              <p className="text-[#425466] text-lg lg:text-base">
                {item.description}
              </p>

              <div className="mt-4 md:mt-auto">
                <Link href="#book-a-call">
                  <button className="overflow-hidden md:mt-4 py-2 px-5 cursor-pointer shine-button bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-base transform transition-all duration-200 ease-in-out  text-white text-specialist lg:hover:scale-105 lg:hover:bg-[#25497a]">
                    Más información
                    <ChevronRightIcon />
                  </button>
                </Link>
              </div>
            </div>
            <figure className="drop-shadow-2xl h-[300px] lg:x-5 mt-5 relative aspect-[16/9] w-auto   transition-all duration-300 ease-in-out lg:aspect-none  lg:translate-x-3 lg:translate-y-8 lg:h-[85%] lg:w-auto lg:mt-auto lg:col-span-5 lg:group-hover:-translate-y-0">
              <Image
                src={item.image}
                alt={item.alt}
                className="filter:shadow-xl object-top lg:object-left w-full mx-auto p-3 md:p-0 h-full object-contain"
                fill
                sizes="100vh"
              />
            </figure>
          </article>
        ))
        }
      </div >
    </section >
  );
};

export default Solutions;