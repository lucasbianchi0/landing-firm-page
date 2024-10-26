import Image from "next/image";
import React from "react";
import TextContent from "../reusable/TextContent";
import TollOutlinedIcon from "@mui/icons-material/TollOutlined";

const Solutions2 = () => {
  return (
    <section className="container sectionStyle">
      <div className="w-full md:w-full">
        <TextContent
          title={"Soluciones de firma digital"}
          subtitle={"Nuestras soluciones"}
          icon={TollOutlinedIcon}
          position="center"
        />
      </div>
      <div className="md:flex gap-10 mt-12">
        {[
          {
            title: "Firma Remota",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ad libero veritatis ea sed ",
            image: "/AccedraProceso04.jpg",
            alt: "Descripción 1",
          },
          {
            title: "Firma Remota para corporaciones",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ad libero veritatis ea sed ",
            image: "/WACOM2.png",
            alt: "Descripción 2",
          },
        ].map((item, index) => (
          <article
            key={index}
            className="w-full relative  border-2 shadow-xl overflow-hidden rounded-2xl h-[400px] group transition-all  duration-300 ease-in-out transform hover:scale-105 hover:filter hover:border-2 md:hover:border-blue-700/20 md:hover:shadow-2xl md:hover:shadow-blue-700/40"
          >
            {/* v1 */}
            {/* <div className="p-3 relative flex flex-col justify-center w-[55%] gap-3 transition-all duration-300 ease-in-out transform translate-y-5 group-hover:-translate-y-[3%] overflow-hidden">
              <h3 className="text-3xl font-semibold text-pretty">
                {item.title}
              </h3>
              <p className="text-[#425466]">{item.description}</p>
              <p className="text-specialist text-sm text-blue-500 ]">
                Hablar con un especialista +
              </p>
            </div> */}

            {/* v2 */}

            {/* <div className="relative flex flex-col  w-[60%]  gap-3">
              <h3 className="text-3xl font-semibold text-pretty">
                {item.title}
              </h3>
              <p className="text-[#425466]">{item.description}</p>
              <p className="text-specialist text-sm text-blue-500 transition-all duration-400 ease-in-out transform translate-y-20 group-hover:-translate-y-[20] ">
                Hablar con un especialista +
              </p>
            </div> */}

            {/* v3 */}

            {/* <div className="p-3 relative flex flex-col justify-center w-[55%] gap-3 transition-all duration-300 ease-in-out transform translate-y-5 group-hover:-translate-y-[3%] overflow-hidden">
              <h3 className="text-3xl font-semibold text-pretty">
                {item.title}
              </h3>
              <p className="text-[#425466]">{item.description}</p>
              <p className="text-specialist text-sm text-blue-500 ]">
                Hablar con un especialista +
              </p>
            </div>
            <div className="relative flex-1 flex items-end ">
              <div className=" w-full h-auto translate-y-5 rotate-6 transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:-translate-y-0 ">
                <figure className="relative aspect-[16/9] h-auto w-[150%]   ">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                  />
                </figure>
              </div>
            </div> */}
            <div className=" w-full h-auto translate-y-5 transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:-translate-y-0 ">
              <figure className="relative aspect-[16/9] h-auto w-[100%] ml-auto translate-x-20 rotate-6 ">
                <Image src={item.image} alt={item.alt} fill />
              </figure>
            </div>
            <div className="absolute bottom-0  left-0 px-4 pt-2 bg-white bg-opacity-95">
              <div className="z-10 flex flex-col gap-2">
                <h3 className="text-3xl font-semibold text-pretty">
                  {item.title}
                </h3>
                <p className="text-[#425466]">{item.description}</p>
                <p className="text-specialist text-sm text-blue-500 ]">
                  Hablar con especialista
                </p>
              </div>
            </div>

            <div className="z-[-2] absolute gradient bottom-0 right-0 transform translate-x-[5px] h-[50%] w-[45%] blur-[5rem] "></div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Solutions2;
