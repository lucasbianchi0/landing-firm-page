import Image from "next/image";
import React from "react";
import TextContent from "../reusable/TextContent";
import TollOutlinedIcon from "@mui/icons-material/TollOutlined";

const Solutions = () => {
  return (
    <section className="container sectionStyle">
      <div className="w-full md:w-full">
        <TextContent
          title={"Soluciones de firma digital"}
          subtitle={"Technology"}
          icon={TollOutlinedIcon}
          position="center"
        />
      </div>
      <div className="gap-10 mt-12 md:flex">
        {[
          {
            title: "Firma Remota",
            description:
              "Simplifica la firma de documentos de forma segura y rápida desde cualquier lugar.",

            image: "/AccedraProceso04.jpg",
            alt: "Descripción 1",
          },
          {
            title: "Firma Biometrica",
            description:
              "Garantiza la autenticidad de tus documentos con una firma única y segura basada en datos biométricos.",
            image: "/WACOM2.png",
            alt: "Descripción 2",
          },
        ].map((item, index) => (
          <article
            key={index}
            className="relative flex w-full min-h-[240px]  overflow-hidden transition-all duration-300 ease-in-out transform border-2 border-white shadow-xl rounded-2xl group hover:scale-105 hover:filter hover:border-2 md:hover:border-blue-700/20 md:hover:shadow-2xl md:hover:shadow-blue-700/40"
          >
            <div className="p-3 relative flex flex-col justify-end w-[55%] gap-3 translate-y-10 transition-all duration-300 ease-in-out transform   overflow-hidden group-hover:translate-y-0">
              <h3 className=" text-3xl font-semibold text-pretty">
                {item.title}
              </h3>
              <p className="text-[#425466]">{item.description}</p>
              <p className="mt-4 text-sm text-blue-500 text-specialist ">
                Hablar con un especialista +
              </p>
            </div>
            <div className="relative flex items-end flex-1 ">
              <div className="w-full h-auto transition-all duration-300 ease-in-out translate-y-6 rotate-6 group-hover:rotate-0 group-hover:-translate-y-0">
                <figure className=" relative aspect-[16/9] h-auto w-[190%]  max-h-[200px] ">
                  <Image src={item.image} alt={item.alt} fill />
                </figure>
              </div>
            </div>

            <div className="z-[-2] absolute gradient bottom-0 right-0 transform translate-x-[5px] h-[50%] w-[45%] blur-[5rem] "></div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Solutions;

{
  /* <article
key={index}
className="w-full relative flex  min-h-[280px]  border-2 shadow-xl overflow-hidden rounded-2xl group transition-all duration-300 ease-in-out transform hover:scale-105 hover:filter hover:border-2 md:hover:border-blue-700/20 md:hover:shadow-2xl md:hover:shadow-blue-700/40"
>
<div className="p-3 relative flex flex-col justify-center  w-[55%] gap-3 transition-all duration-300 ease-in-out transform   overflow-hidden">
  <h3 className="text-3xl font-semibold text-pretty">
    {item.title}
  </h3>
  <p className="text-[#425466]">{item.description}</p>
  <p className="mt-4 text-sm text-blue-500 text-specialist ">
    Hablar con un especialista +
  </p>
</div>
<div className="relative flex items-end flex-1 ">
  <div className="w-full h-auto transition-all duration-300 ease-in-out translate-y-6 rotate-6 group-hover:rotate-0 group-hover:-translate-y-0">
    <figure className=" relative aspect-[16/9] h-auto w-[190%]  max-h-[200px] ">
      <Image src={item.image} alt={item.alt} fill />
    </figure>
  </div>
</div>

<div className="z-[-2] absolute gradient bottom-0 right-0 transform translate-x-[5px] h-[50%] w-[45%] blur-[5rem] "></div>
</article> */
}
