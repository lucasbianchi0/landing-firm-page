"use client";
import Lottie from "lottie-react";

interface IStep {
  title: string;
  description: string;
  animationData: any;
}

const StepCard = ({ title, description, animationData }: IStep) => {
  return (
    <article className="p-5 px-6 bg-[#F9F9FA] border border-white shadow-md flex md:flex-col md:justify-start gap-2 rounded-xl w-[90%] text-center h-full">
      <figure className="relative h-[120px] w-[30%] md:w-[120px]  mx-auto">
        <Lottie
          animationData={animationData}
          className="absolute inset-0 w-full h-full object-contain"
          loop={true}
        />
      </figure>
      <div className="md:pb-4 flex-col justify-start items-center md:justify-center text-start md:text-center">
        <h3 className="font-bold text-md md:text-md md:h-[45%] w-full md:w-[80%] mx-0 md:mx-auto leading-tight">
          {title}
        </h3>
        <p className="text-md md:text-md text-grow mt-3 leading-light">
          {description}
        </p>
      </div>
    </article>
  );
};

export default StepCard;
