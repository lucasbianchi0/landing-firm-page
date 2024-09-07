// "use client";

// import React, { useEffect, useState } from "react";
// import StepCard from "./StepCard";
// import DomainVerificationTwoToneIcon from "@mui/icons-material/DomainVerificationTwoTone";
// import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
// import FileOpenTwoToneIcon from "@mui/icons-material/FileOpenTwoTone";
// import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
// import Button from "../Button";

// const Steps = () => {
//   const stepData = [
//     {
//       title: "Preparar el Documento y el Dispositivo",
//       description:
//         "Abre el documento que quieres firmar. Conecta y ajusta la tableta Wacom.",
//       // animationData: animationData1,
//       icon: FileOpenTwoToneIcon,
//     },
//     {
//       title: "Configurar el Software de Firma",
//       description: "Abre el software de firma ESignAnywhere.",
//       // animationData: animationData2,
//       icon: SettingsTwoToneIcon,
//     },
//     {
//       title: "Firmar el Documento",
//       description: "Firma con el lápiz de la tableta Wacom.",
//       // animationData: animationData3,
//       icon: DriveFileRenameOutlineTwoToneIcon,
//     },
//     {
//       title: "Finalizar y Enviar",
//       description:
//         "Guarda y envía el documento firmado electrónicamente a las partes pertinentes.",
//       // animationData: animationData4,
//       icon: DomainVerificationTwoToneIcon,
//     },
//   ];

//   const [currentStep, setCurrentStep] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentStep((prevStep) => (prevStep + 1) % stepData.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [stepData.length]);

//   return (
//     <section className="relative bg-[#F5F6F7] !bg-[#EBF3FF] z-10 w-full min-h-[100vh] sectionStyle bottomSection md:pb-0">
//       <div className="container">
//         <p className="text-center subtitle">Como funciona</p>
//         <h2
//           className="text-center text-[48px] title"
//           style={{
//             background: "linear-gradient(to top, #000000, #4C96FF)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           Con Accedra es simple
//         </h2>

//         <div className="justify-center h-full mx-auto mt-10 space-y-3 md:space-y-0 md:flex md:items-stretch">
//           {stepData.map((card, index) => (
//             <StepCard
//               key={index}
//               title={card.title}
//               description={card.description}
//               icon={card.icon}
//             />
//           ))}
//         </div>

//         <div className="flex flex-col items-center w-full gap-2 pt-10 md:flex-row md:justify-center">
//           <div className="">
//             <Button
//               backgroundColor={"transparent"}
//               textColor={"#2A5189"}
//               content={"Ver video"}
//               borderColor="#2A5189"
//             />
//           </div>
//           <div className="">
//             <Button
//               backgroundColor={"#2A5189"}
//               textColor={"white"}
//               content={"Hablar con especialista"}
//               borderColor="#2A5189"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Steps;

// // {stepData.map((card, index) => (
// //   // <div
// //   //   key={index}
// //   //   className=" flex items-center justify-center mx-auto md:justify-normal md:flex-1  md:max-w-[%]"
// //   // >
// //     <StepCard
// //     key={index}
// //       title={card.title}
// //       description={card.description}
// //       // animationData={card.animationData}
// //       icon={card.icon}
// //     />
// //     {/* {index < stepData.length - 1 && (
// //       <div
// //         className={`md:gradient-line md:step-${currentStep}`}
// //       ></div>
// //     )}
// //   </div> */}
// // ))}
