import Image from "next/image";
import React from "react";
import TextContent from "../reusable/TextContent";
import TollOutlinedIcon from "@mui/icons-material/TollOutlined";

const Solutions = () => {
  return (
    <section className="container sectionStyle ">
      <div className="w-full lg:w-full">
        <TextContent
          title={"Soluciones de firma digital"}
          subtitle={"Para ti"}
          icon={TollOutlinedIcon}
          position="center"
        />
      </div>
      <div className="gap-10 space-y-8 lg:space-y-0 mt-12 lg:flex">
        {[
          {
            title: "Firma Remota",
            description:
              "Simplifica el proceso de firma de documentos, asegurando que sea rápido, seguro y accesible desde cualquier ubicación.",

            image: "/AccedraProceso04.jpg",
            alt: "Descripción 1",
          },
          {
            title: "Firma Biometrica",
            description:
              "Garantiza la autenticidad de tus documentos con una firma única y segura basada en datos biométricos.",
            image: "/Wacom2.0.png",
            alt: "Descripción 2",
          },
        ].map((item, index) => (
          <article
            key={index}
            className="border-4 border-white relative flex gap-y-2 md:gap-2 sm:flex-row w-full overflow-hidden transition-all duration-300 ease-in-out transform  lg:border-zinc-100 shadow-xl rounded-2xl group lg:hover:scale-105 lg:hover:filter lg:hover:border-4 lg:hover:border-blue-700/20 lg:hover:shadow-2xl lg:hover:shadow-blue-700/40"
          >
            <div className="p-3 md:px-3 pb-8 md:py-14 relative flex flex-col w-[60%]  gap-3 transition-all duration-300 ease-in-out transform overflow-hidden lg:group-hover:-translate-y-5 ">
              <h3 className=" text-[#243657]  montserrat text-2xl lg:text-3xl font-semibold text-pretty">
                {item.title}
              </h3>
              <p className="text-[#425466] text-sm md:text-base">
                {item.description}
              </p>
              {/* <p className="hidden md:block lg:mt-4 text-sm md:text-base text-blue-500 text-specialist translate-y-5 group-hover:translate-y-0  ">
                Hablar con especialista
              </p> */}

              <span className=" z-[10] mt-2 lg:mt-0 lg:absolute lg:bottom-0 text-center lg:w-[80%] py-1.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-xs md:text-base transform transition-all duration-200 ease-in-out  lg:translate-y-20 lg:group-hover:-translate-y-2 text-white text-specialist lg:hover:scale-105 lg:hover:bg-[#25497a]">
                Hablar con especialista
              </span>
            </div>

            <div className="relative flex-1 flex items-end ">
              <figure className="absolute bottom-0 right-0 transition-all duration-300 ease-in-out translate-x-3 md:translate-y-8  h-[80%] w-full rotate-12 lg:group-hover:rotate-0 lg:group-hover:-translate-y-0">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="shadow-xl object-cover"
                  fill
                  style={{ objectPosition: "left" }}
                />
              </figure>
            </div>

            <div className="z-[-2] absolute gradient bottom-0 right-0 transform translate-x-[5px] h-[50%] w-[45%] blur-[5rem] "></div>
          </article>
          // <article
          //   key={index}
          //   className=" relative flex flex-col-reverse gap-y-2 sm:flex-row w-full min-h-[240px] overflow-hidden transition-all duration-300 ease-in-out transform  lg:border-zinc-100 md:shadow-xl rounded-2xl group lg:hover:scale-105 lg:hover:filter lg:hover:border-2 lg:hover:border-blue-700/20 lg:hover:shadow-2xl lg:hover:shadow-blue-700/40"
          // >
          //   <div className="pt-3 md:p-3 relative flex flex-col w-full lg:justify-end sm:w-[55%] gap-3 lg:translate-y-10 transition-all duration-300 ease-in-out transform   overflow-hidden lg:group-hover:translate-y-0">
          //     <h3 className="text-[#243657] montserrat text-xl lg:text-3xl font-semibold text-pretty">
          //       {item.title}
          //     </h3>
          //     <p className="text-[#425466]">{item.description}</p>
          //     <p className="lg:mt-4 text-sm text-blue-500 text-specialist ">
          //       Hablar con un especialista +
          //     </p>
          //   </div>
          //   <div className=" bg-slate-200 relative flex items-end flex-1 ] lg:h-full overflow-hidden">
          //     <div className="z-10 w-full h-[40%] lg:h-[90%] lg:mt-auto lg:absolute lg:bottom-0 lg:right-0 transition-all duration-300 ease-in-out translate-x-5 lg:translate-y-5 lg:rotate-6 lg:group-hover:rotate-0 lg:group-hover:-translate-y-0">
          //       <figure className=" relative ml-auto pt-5 lg:m-0 w-[80%] h-auto lg:w-[130%] lg:h-full  ">
          //         <Image
          //           src={item.image}
          //           alt={item.alt}
          //           className="w-full h-full object-cover shadow-xl"
          //           layout="responsive"
          //           width={16}
          //           height={9}
          //         />
          //       </figure>
          //     </div>
          //     <div className=" absolute gradient bottom-0 left-0  h-[20%] w-[25%] blur-[2rem] "></div>
          //     <div className=" absolute gradient top-0 right-0  h-[20%] w-[25%] blur-[2rem] "></div>
          //   </div>

          //   <div className="z-[-2] absolute md:gradient bottom-0 right-0 transform translate-x-[5px] h-[50%] w-[45%] blur-[5rem] "></div>
          // </article>
        ))}
      </div>
    </section>
  );
};

export default Solutions;

//   <article
//             key={index}
//             className=" relative flex flex-col-reverse gap-y-2 sm:flex-row w-full min-h-[240px] overflow-hidden transition-all duration-300 ease-in-out transform  lg:border-zinc-100 md:shadow-xl rounded-2xl group hover:scale-105 hover:filter hover:border-2 lg:hover:border-blue-700/20 lg:hover:shadow-2xl lg:hover:shadow-blue-700/40"
//           >
//             <div className="pt-3 md:p-3 relative flex flex-col w-full lg:justify-end sm:w-[55%] gap-3 lg:translate-y-10 transition-all duration-300 ease-in-out transform   overflow-hidden lg:group-hover:translate-y-0">
//               <h3 className="text-[#243657] montserrat text-2xl lg:text-3xl font-semibold text-pretty">
//                 {item.title}
//               </h3>
//               <p className="text-[#425466]">{item.description}</p>
//               <p className="lg:mt-4 text-sm text-blue-500 text-specialist ">
//                 Hablar con un especialista +
//               </p>
//             </div>
//             <div className=" bg-slate-200 relative flex items-end flex-1 ] lg:h-full">
//               <div className="w-full h-[40%] lg:h-[90%]  lg:mt-auto lg:absolute lg:bottom-0 lg:right-0 transition-all duration-300 ease-in-out translate-x-5 lg:translate-y-5 lg:rotate-6 lg:group-hover:rotate-0 lg:group-hover:-translate-y-0">
//                 <figure className="relative ml-auto pt-5 lg:m-0 w-[80%] h-auto lg:w-[130%] lg:h-full  ">
//                   <Image
//                     src={item.image}
//                     alt={item.alt}
//                     className="w-full h-full object-cover shadow-xl"
//                     layout="responsive"
//                     width={16}
//                     height={9}
//                   />
//                 </figure>
//               </div>
//               <div  className="z-[-2] absolute gradient bottom-0 left-0 transform translate-x-[5px] h-[50%] w-[45%] blur-[5rem] "></div>
//               <div className="z-[-2] absolute gradient top-0 right-0 transform translate-x-[5px] h-[50%] w-[45%] blur-[5rem] "></div>
//             </div>

//             <div className="z-[-2] absolute md:gradient bottom-0 right-0 transform translate-x-[5px] h-[50%] w-[45%] blur-[5rem] "></div>
//           </article>
// }
