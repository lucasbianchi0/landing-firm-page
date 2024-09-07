import Image from "next/image";
import React from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { GrMoney } from "react-icons/gr";
import { IoAccessibility, IoDocumentsOutline } from "react-icons/io5";
import {
  MdOnlinePrediction,
  MdOutlineIntegrationInstructions,
} from "react-icons/md";
import { VscLaw } from "react-icons/vsc";

const Benefits3 = () => {
  const benefits = [
    {
      title: "Transformación Digital",
      description:
        "Transforma tu empresa con soluciones digitales innovadoras que optimizan procesos y mejoran la eficiencia operativa.",
      icon: MdOnlinePrediction,
    },
    {
      title: "Validación Jurídica",
      description:
        "Asegura que todos tus documentos y procesos cumplan con los requisitos legales vigentes, protegiendo a tu empresa de riesgos legales.",
      icon: VscLaw,
    },
    {
      title: "Accesibilidad",
      description:
        "Facilita el acceso y manejo de tus documentos desde cualquier dispositivo, en cualquier lugar, asegurando disponibilidad continua.",
      icon: IoAccessibility,
    },
    {
      title: "Integridad Documental",
      description:
        "Garantiza la integridad, autenticidad y seguridad de tus documentos, evitando alteraciones no autorizadas y manteniendo su valor legal.",
      icon: IoDocumentsOutline,
    },
    {
      title: "Integración Multicanal",
      description:
        "Conecta tus procesos a través de múltiples canales y plataformas, asegurando una experiencia fluida y sin interrupciones para tus usuarios.",
      icon: MdOutlineIntegrationInstructions,
    },
    {
      title: "Alto Retorno de Inversión",
      description:
        "Maximiza el retorno de inversión mediante soluciones eficaces y eficientes que impulsan el crecimiento y la rentabilidad de tu empresa.",
      icon: GrMoney,
    },
  ];

  return (
    <section className="relative w-full pt-20 overflow-hidden bg-white bottomSection">
      <div className="container flex flex-col items-start w-full h-full gap-20 md:flex-row md:justify-between">
        {/* Sección de texto con sticky */}
        <div className="relative w-full md:flex-1 ">
          <p className="text-left text-[hsl(215,76%,73%)] font-bold">
            Lorem ipsum
          </p>
          <h2
            className="text-left text-[58px] font-bold leading-none"
            style={{
              background: "linear-gradient(to top, #000000, #4C96FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Beneficios Lorem, ipsum.
          </h2>
          <div className="mt-5 text-md space-y-7 text-zinc-800 ">
            {/* <p className="text-xl text-left mt-15 "> */}

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              consequuntur nemo molestiae in. Quas eius sed placeat
              consequuntur? Nisi impedit velit distinctio dolore doloremque
              repellat, quidem cum minus libero ali
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              consequuntur nemo molestiae in. Quas eius sed placeat
              consequuntur? Nisi impedit velit distinctio dolore doloremque
              repellat, quidem cum minus libero ali
            </p>

            <span className="inline-flex gap-3 mt-20 py-2 px-5 bg-[#2A5189] text-white rounded-lg items-center">
              <BiMessageRoundedDetail className="h-[30px] w-[30px]" />
              <span className="text-lg font-semibold">
                Hablar con especialista
              </span>
            </span>
          </div>
        </div>

        {/* Sección de beneficios */}
        <div className="relative z-10 grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className="flex flex-col justify-center w-full gap-2 text-left bg-white rounded-lg"
            >
              <benefit.icon
                style={{ fontSize: "2.8rem" }}
                className="text-[#569BFF] border p-2 shadow-2xl bg-[#569BFF]/20 border-[#569BFF] shadow-[#569BFF] rounded-md"
              />
              <h3 className="py-0 text-lg font-semibold text-black">
                {benefit.title}
              </h3>
              <p className="leading-tight text-md text-pretty text-zinc-400">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits3;

// <div className="relative z-10 grid flex-1 grid-cols-2 md:gap-8">
//           {benefits.map((benefit, index) => (
//             <article
//               key={index}
//               className="relative flex flex-col justify-center gap-2 text-left bg-white rounded-lg md:px-3"
//             >
//               <div className="flex">
//                 <benefit.icon
//                   style={{ fontSize: "1rem" }}
//                   className="  text-[#569BFF]"
//                 />
//                 <h3 className=" border-l-2 border-l-[#569BFF] font-semibold text-black px-2 py-0">
//                   {benefit.title}
//                 </h3>
//               </div>

//               <p className="px-2 leading-tight text-md text-pretty text-zinc-400">
//                 {benefit.description}
//               </p>
//             </article>
//           ))}
//         </div>
