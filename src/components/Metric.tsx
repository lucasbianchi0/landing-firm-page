"use client";
import { useEffect, useState } from "react";

interface IMetric {
  content: string;
  target: number;
}

const Metric = ({ content, target }: IMetric) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1000;

    const animate = () => {
      const elapsedTime = performance.now() - startTime;
      const progress = elapsedTime / duration;
      const currentCount = Math.floor(progress * target);

      setCount(currentCount);

      if (elapsedTime < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animate();
  }, [target]);

  return (
    <article className="bg-[#F1F4F7] !bg-[#F7FAFD] p-4 rounded-2xl shadow-md border-2 border-white">
      <h3 className="text-4xl font-bold mb-2 text-[#2A5189]">
        +{count.toLocaleString()}
      </h3>
      <p className="text-gray-600">{content}</p>
    </article>
  );
};

export default Metric;

// opcion 2

// import { useEffect, useState } from "react";

// interface IMetric {
//   content: string;
//   target: number;
// }

// const Metric = ({ content, target }: IMetric) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const startTime = performance.now();
//     const duration = 1000;

//     const animate = () => {
//       const elapsedTime = performance.now() - startTime;
//       const progress = elapsedTime / duration;
//       const currentCount = Math.floor(progress * target);

//       setCount(currentCount);

//       if (elapsedTime < duration) {
//         requestAnimationFrame(animate);
//       } else {
//         setCount(target);
//       }
//     };

//     animate();
//   }, [target]);

//   return (
//     <article className="bg-[#F1F4F7] p-4 rounded-lg shadow-md  border border-white">
//       <h3 className="text-xl md:text-4xl font-bold mb-2 text-[#2A5189]">
//         +{count.toLocaleString()}
//       </h3>
//       <p className="text-gray-600 text-md md:text-sm">{content}</p>
//     </article>
//   );
// };

// export default Metric;
