"use client";
import Lottie from "lottie-react";

interface IStep {
  title: string;
  description: string;
  // animationData: any;
  icon: any;
}

const StepCard = ({ title, description, icon: Icon }: IStep) => {
  return (
    <article className="p-8 px-2 bg-[#F9F9FA] !bg-[#EBF5FF] border border-white shadow-md flex md:flex-col md:justify-start gap-2 rounded-xl w-[90%]  md:w-full text-center h-full flex-1">
      <Icon className="h-[60px] text-white md:w-[60px] p-3 rounded-full mx-auto bg-[#4C96FF]" />
      <div className="flex-col items-center justify-start min-h-full mt-5 md:pb-4 md:justify-center text-start md:text-center">
        <h3 className="font-bold text-md md:text-md md:h-[45%] w-full md:w-[80%] mx-0 md:mx-auto leading-tight">
          {title}
        </h3>
        <p className="mt-3 text-md md:text-md text-grow leading-light">
          {description}
        </p>
      </div>
    </article>
  );
};

export default StepCard;

// "use client";
// import Lottie from "lottie-react";

// interface IStep {
//   title: string;
//   description: string;
//   // animationData: any;
//   icon: any;
// }

// const StepCard = ({ title, description, icon: Icon }: IStep) => {
//   return (
//     <article className="p-8 px-2 bg-[#F9F9FA] !bg-[#EBF5FF] border border-white shadow-md flex md:flex-col md:justify-start gap-2 rounded-xl w-[90%]  md:w-full text-center h-full flex-1">
//       {/* <figure className="relative h-[120px] w-[30%] md:w-[120px]  mx-auto"> */}
//       {/* <Lottie
//           animationData={animationData}
//           className="absolute inset-0 object-contain w-full h-full"
//           loop={true}
//         /> */}
//       {/* <Icon className="text-[#569BFF]" style={{ fontSize: "2rem" }} /> */}
//       <Icon
//         className="h-[60px] text-white md:w-[60px] p-3 rounded-full  mx-auto bg-[#4C96FF]"
//         // style={{
//         //   background:
//         //     "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(76,150,255,1) 30%)",
//         // }}
//       />

//       {/* </figure> */}
//       <div className="flex-col items-center justify-start mt-5 md:pb-4 md:justify-center text-start md:text-center">
//         <h3 className="font-bold text-md md:text-md md:h-[45%] w-full md:w-[80%] mx-0 md:mx-auto leading-tight">
//           {title}
//         </h3>
//         <p className="mt-3 text-md md:text-md text-grow leading-light">
//           {description}
//         </p>
//       </div>
//     </article>
//   );
// };

// export default StepCard;
