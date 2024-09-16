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
      <div className="md:flex gap-10 mt-12">
        {[
          {
            title: "Firma Remota para corporaciones",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ad libero veritatis ea sed quisquam.",
            image: "/step1.jpg",
            alt: "Descripción 1",
          },
          {
            title: "Firma Remota para corporaciones",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ad libero veritatis ea sed quisquam.",
            image: "/wacom1.png",
            alt: "Descripción 2",
          },
        ].map((item, index) => (
          <article
            key={index}
            className="relative flex p-3 border-2 shadow-xl overflow-hidden rounded-2xl h-[300px] group transition-all duration-300 ease-in-out transform hover:scale-105  hover:filter  hover:border-2  md:hover:border-blue-700/20 md:hover:shadow-2xl md:hover:shadow-blue-700/40 "
          >
            <div className="relative flex flex-col justify-end w-[50%] gap-3 transition-all duration-300 ease-in-out transform translate-y-[15%] group-hover:-translate-y-[3%]  overflow-hidden">
              <h3 className="text-3xl font-semibold text-pretty">
                {item.title}
              </h3>
              <p className="text-[#425466]">{item.description}</p>
              <p className="text-specialist text-sm text-blue-500  h-[10%] ">
                Hablar con un especialista +
              </p>
            </div>
            <figure className="relative flex-1 translate-x-10 translate-y-6 group-hover:filter group-hover:blur-sm">
              <Image src={item.image} alt={item.alt} className="w-full" fill />
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
// hover:shadow-[0_4px_20px_0_rgba(0,0,255,0.5)]
