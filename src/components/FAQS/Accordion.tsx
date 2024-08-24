import React from "react";

interface IAccordion {
  summary: string;
  description: string;
}

const Accordion = ({ summary, description }: IAccordion) => {
  return (
    <div className="">
      <details
        className="group [&_summary::-webkit-details-marker]:hidden "
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-[#C0DAFF] p-4 text-gray-900">
          <h2 className="font-medium">{summary} </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700">{description}</p>
      </details>
    </div>
  );
};

export default Accordion;
