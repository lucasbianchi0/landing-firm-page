// import React from "react";
// import IndustryItem from "./IndustryItem";
// import Button from "../Button";
// import { IoMdCard } from "react-icons/io";
// import { BsTruck } from "react-icons/bs";
// import { CiBank, CiShop } from "react-icons/ci";
// import { TbSchool, TbWorld } from "react-icons/tb";
// import { MdOutlineLocalHospital, MdOutlineSecurity } from "react-icons/md";
// import { GoCreditCard } from "react-icons/go";

// const Industries = () => {
//   const industries = [
//     {
//       title: "Logística",
//       icon: BsTruck,
//       color: "#A3C6FF",
//       hoverClass: "industry-item-hover-blue-soft",
//     },
//     {
//       title: "Retail",
//       icon: CiShop,
//       color: "#FFD1A3",
//       hoverClass: "industry-item-hover-orange-soft",
//     },
//     {
//       title: "Educación",
//       icon: TbSchool,
//       color: "#A3FFD1",
//       hoverClass: "industry-item-hover-green-soft",
//     },
//     {
//       title: "Automotriz",
//       icon: BsTruck,
//       color: "#FFC6A3",
//       hoverClass: "industry-item-hover-pink-soft",
//     },
//     {
//       title: "Farmacéutica",
//       icon: MdOutlineLocalHospital,
//       color: "#D1A3FF",
//       hoverClass: "industry-item-hover-purple-soft",
//     },
//     {
//       title: "Banca",
//       icon: CiBank,
//       color: "#FFD1D1",
//       hoverClass: "industry-item-hover-pale-pink",
//     },
//     {
//       title: "Fintech",
//       icon: GoCreditCard,
//       color: "#A3D1FF",
//       hoverClass: "industry-item-hover-light-blue",
//     },
//     {
//       title: "Seguros",
//       icon: MdOutlineSecurity,
//       color: "#FFE6A3",
//       hoverClass: "industry-item-hover-yellow-soft",
//     },
//     {
//       title: "Medicina",
//       icon: MdOutlineLocalHospital,
//       color: "#FFA3A3",
//       hoverClass: "industry-item-hover-red-soft",
//     },
//     {
//       title: "Telecomunicaciones",
//       icon: TbWorld,
//       color: "#A3FFE6",
//       hoverClass: "industry-item-hover-teal",
//     },
//   ];

//   return (
//     <section className="relative z-50 pt-16 bg-white sectionStyle bottomSection">
//       <div className="container gap-2 md:flex md:justify-between">
//         <div className="flex-1 space-y-4 ">
//           <p className="text-left subtitle">Especialistas</p>
//           <h2 className="text-[42px] md:text-[60px] title">
//             <span className="text-[#172B4D]">Especialistas</span>

//             <br />
//             <span className="text-[#172B4D]">en estas</span>
//             <br />
//             <span
//               style={{
//                 background: "linear-gradient(to top, #000000, #4C96FF)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               industrias
//             </span>
//           </h2>

//           <p className="text-xl text-left mt-15 ">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
//             veniam sed doloremque minus dolore aliquid temporibus quaerat, quam
//             perspiciatis porro itaque eveniet hic natus magnam.
//           </p>
//           <div className="pt-2">
//             <Button
//               backgroundColor={"#2A5189"}
//               textColor={"white"}
//               content={"Hablar con especialista"}
//               borderColor="#2A5189"
//             />
//           </div>
//         </div>
//         <div className="grid flex-1 grid-cols-2 gap-6 mt-10 md:mt-0 md:grid-cols-3 md:p-10">
//           {industries.map((industry, index) => (
//             <div
//               key={index}
//               className="flex items-center h-full p-4 transition border border-gray-100 shadow-md rounded-xl hover:shadow-xl hover:border-blue-700/20 hover:shadow-blue-700/20"
//               // className={`h-full flex items-center rounded-xl border border-gray-100 p-4 shadow-md transition  ${industry.hoverClass}`}
//             >
//               <IndustryItem
//                 title={industry.title}
//                 icon={industry.icon}
//                 color={industry.color}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Industries;
