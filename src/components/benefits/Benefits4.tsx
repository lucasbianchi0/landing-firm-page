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

const Benefits4 = () => {
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
    <section className="relative w-full pt-20 bg-[#FEFEFE] sectionStyle">
      <div className="container flex flex-col-reverse items-start  md:h-[900px] gap-20 md:flex-row md:justify-between">
        <div className="relative z-10 grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className="flex flex-col justify-center w-full gap-2 p-8 text-left bg-white border rounded-lg shadow-lg hover:shadow-xl border-zinc-100 hover:border-blue-700/20 hover:shadow-blue-700/20"
            >
              <benefit.icon
                style={{ fontSize: "2.8rem" }}
                className="text-[#006BFC]  "
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
        <div className="relative h-full md:w-[40%] ">
          <article className="md:sticky md:top-0 md:left-0 md:w-full ">
            <div className="flex items-center gap-3 md:flex-row-reverse md:justify-start">
              <Image src="/tituloPasos.png" alt="tit" height={60} width={60} />{" "}
              <p className="text-right text-[hsl(215,76%,73%)] font-bold">
                Lorem ipsum
              </p>
            </div>

            <h2 className="text-[44px] text-left md:text-[56px] md:text-right title ">
              <span className="text-[#172B4D] w-full">Beneficios</span>
              <span
                style={{
                  background: "linear-gradient(to top, #000000, #4C96FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Lorem, ipsum dolor.
              </span>
            </h2>
            <div className="text-left md:text-right text-description">
              <p>
                La firma biométrica ofrece una serie de beneficios clave que la
                han convertido en una opción cada vez más popular en sectores
                como la banca, seguros, medicina y telecomunicaciones. Uno de
                los principales beneficios es la seguridad: al utilizar
                características biométricas únicas, como la huella dactilar o la
                forma de la firma, se reduce significativamente el riesgo de
                fraude o suplantación de identidad.
              </p>

              <span className="inline-flex gap-3 mt-20 py-2 px-5 bg-[#2A5189] text-white rounded-lg md:justify-end items-center">
                <BiMessageRoundedDetail className="h-[30px] w-[30px]" />
                <span className="text-lg font-semibold">
                  Hablar con especialista
                </span>
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Benefits4;
{
  /* Sección de texto con sticky */
}
{
  /* <div className="relative h-full bg-green-300 md:flex-1 h-min-screen ">
          <article className="w-full sticky top-0 left-0 h-[200px] bg-red-200">
            <div className="flex items-center justify-end gap-3">
              <p className="text-right text-[hsl(215,76%,73%)] font-bold">
                Lorem ipsum
              </p>
              <Image src="/tituloPasos.png" alt="tit" height={60} width={60} />{" "}
            </div>

            <h2
              className="text-right text-[58px] font-bold leading-none"
              style={{
                background: "linear-gradient(to top, #000000, #4C96FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Beneficios Lorem, ipsum.
            </h2>
            <div className="mt-5 text-right text-md space-y-7 text-zinc-800 ">
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

              <span className="inline-flex gap-3 mt-20 py-2 px-5 bg-[#2A5189] text-white rounded-lg justify-end items-center">
                <BiMessageRoundedDetail className="h-[30px] w-[30px]" />
                <span className="text-lg font-semibold">
                  Hablar con especialista
                </span>
              </span>
            </div>
          </article>
        </div> */
}
