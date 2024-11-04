import Image from "next/image";
import React from "react";
import Company from "./company/Company";

const CompanyList = () => {
  const companyLogos = [
    "/companias/accentureLOGO.png",
    "/companias/accentureLOGO.png",
    "/companias/fordlogo.png",
    "/companias/fordlogo.png",
    "/companias/bcoprovinciaLOGO.png",
    "/companias/vwn.png",
    "/companias/macro.png",
    "/companias/chubut.png",
    "/companias/bancocredicoopLOGO.png",
    "/companias/andreani.png",
    "/companias/aon.png",
    "/companias/bcoprovinciaLOGO.png",
    "/companias/bcoprovinciaLOGO.png",
  ];
  return (
    <div className="mt-12 stock-ticker">
      <div className="list">
        {companyLogos.map((item, index) => (
          <Company key={index} companyLogo={item} />
        ))}
      </div>

      <div className="list" aria-hidden="true">
        {companyLogos.map((item, index) => (
          <Company key={index} companyLogo={item} />
        ))}
      </div>
    </div>
  );
};

export default CompanyList;

// v2
// import Image from "next/image";
// import React from "react";
// import Company from "./company/Company";

// const CompanyList = () => {
//   const companyLogos = [
//     "/logos/accentureLOGO.png",
//     "/logos/accentureLOGO.png",
//     "/logos/bcoprovinciaLOGO.png",
//     "/logos/bcoprovinciaLOGO.png",
//     "/logos/bancocredicoopLOGO.png",
//     "/logos/bancocredicoopLOGO.png",
//     "/logos/bcoprovinciaLOGO.png",
//     "/logos/bcoprovinciaLOGO.png",
//     "/logos/bcoprovinciaLOGO.png",
//     "/logos/bcoprovinciaLOGO.png",
//   ];
//   return (
//     <section className="relative bg-[#E4EDF7] z-10 w-full md:sectionStyle pt-[40px] pb-[120px]  md:py-[140px]">
//       <div className="stock-ticker ">
//         <div className="list">
//           {companyLogos.map((item, index) => (
//             <Company key={index} companyLogo={item} />
//           ))}
//         </div>

//         <div className="list" aria-hidden="true">
//           {companyLogos.map((item, index) => (
//             <Company key={index} companyLogo={item} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompanyList;
