import React from "react";
import Accordion from "./Accordion";

const Faqs2 = () => {
  const faqs = [
    {
      summary: "¿Qué es la transformación digital?",
      description:
        "La transformación digital implica la integración de tecnología digital en todas las áreas de una empresa, cambiando fundamentalmente cómo operas y brindas valor a los clientes.",
    },
    {
      summary: "¿Cómo se valida la autenticidad de los documentos?",
      description:
        "La validación de documentos se realiza a través de procesos jurídicos que aseguran el cumplimiento de todas las normativas legales aplicables.",
    },
    {
      summary: "¿Qué es la accesibilidad digital?",
      description:
        "La accesibilidad digital se refiere a la capacidad de un sistema para ser usado por cualquier persona, independientemente de sus capacidades técnicas o físicas.",
    },
    {
      summary: "¿Qué es la integridad documental?",
      description:
        "La integridad documental asegura que un documento no ha sido alterado desde su creación, manteniendo su autenticidad y confiabilidad.",
    },
  ];

  return (
    <section className="relative bg-white z-10 min-h-[100vh] h-full bottomSection sectionStyle overflow-hidden">
      <div className="container flex flex-col  md:flex-row justify-between gap-10">
        <div className="flex flex-col flex-1 h-full ">
          <p className="text-left subtitle">Alguna duda?</p>
          <h2
            className="text-left text-[48px] title"
            style={{
              background: "linear-gradient(to top, #000000, #4C96FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Preguntas frequentes
          </h2>
          <p className="text-xl text-left mt-6 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            veniam sed doloremque minus dolore aliquid temporibus quaerat, quam
            perspiciatis porro itaque eveniet hic natus magnam.
          </p>
        </div>

        <div className=" flex gap-10 flex-1">
          <div className=" flex-1 space-y-6">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                summary={faq.summary}
                description={faq.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute gradient top-1/2 right-1/3 transform translate-x-[500px] -translate-y-1/2 h-[400px] w-[500px] blur-[20rem] z-10"></div>
    </section>
  );
};

export default Faqs2;

{
  /* <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4">
              <div>
                <label className="sr-only" for="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" for="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" for="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label
                    for="Option1"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabindex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option1"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <span className="text-sm"> Option 1 </span>
                  </label>
                </div>

                <div>
                  <label
                    for="Option2"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabindex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option2"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <span className="text-sm"> Option 2 </span>
                  </label>
                </div>

                <div>
                  <label
                    for="Option3"
                    className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                    tabindex="0"
                  >
                    <input
                      className="sr-only"
                      id="Option3"
                      type="radio"
                      tabindex="-1"
                      name="option"
                    />

                    <span className="text-sm"> Option 3 </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" for="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div> */
}
