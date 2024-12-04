import Image from "next/image";
import React from "react";
import TextContent from "../reusable/TextContent";
import TollOutlinedIcon from "@mui/icons-material/TollOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import { soluciones } from "@/data/3-soluciones";
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

        {soluciones.map((item, index) => (
          <article
            key={index}
            className="bg-[#F6F9FC] flex-1 border-2 h-full border-zinc-200 relative flex flex-col-reverse md:flex-row md:grid grid-cols-12  md:gap-7 w-full overflow-hidden transition-all duration-300 ease-in-out transform  lg:border-zinc-200 shadow-md md:shadow-xl rounded-lg md:rounded-2xl group lg:hover:scale-105 lg:hover:filter lg:hover:border-2 lg:hover:border-blue-700/20 lg:hover:shadow-2xl lg:hover:shadow-blue-700/40"
          >
            <div className="border-t-2 border-zinc-200 md:border-none flex-1 p-3 md:pl-7 py-4 md:py-7 relative flex flex-col w-full md:col-span-7 gap-y-4  gap-3 transition-all duration-300 ease-in-out transform overflow-hidden lg:group-hover:-translate-y-3 ">
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
            <figure className="w-full drop-shadow-2xl h-[18.75rem] mt-5 relative aspect-[16/9] mx-auto lg:mx-0 transition-all duration-300 ease-in-out lg:aspect-none md:translate-x-8 lg:translate-x-3 md:translate-y-14 md:h-[85%] md:w-auto lg:mt-auto md:col-span-5 lg:group-hover:-translate-y-0">
              <Image
                src={item.image}
                alt={item.alt}
                className="filter:shadow-xl w-full md:object-left mx-auto md:mx-0  p-3 md:p-0 h-full object-contain"
                fill
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