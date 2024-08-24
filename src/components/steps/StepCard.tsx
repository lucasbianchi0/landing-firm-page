import Lottie from "lottie-react";

interface IStep {
  title: string;
  description: string;
  animationData: any;
}

const StepCard = ({ title, description, animationData }: IStep) => {
  return (
    <article className="p-5 px-6 bg-[#F9F9FA] border border-white shadow-md flex flex-col justify-start gap-2 rounded-xl w-[90%] text-center h-full">
      <figure className="relative h-[120px] w-[120px] mx-auto">
        <Lottie
          animationData={animationData}
          className="absolute inset-0 w-full h-full object-contain"
          loop={true}
        />
      </figure>
      <h3 className="font-bold text-md h-[20%] flex items-center w-[80%] mx-auto leading-tight">
        {title}
      </h3>
      <span className="text-md flex-grow">{description}</span>
    </article>
  );
};

export default StepCard;
