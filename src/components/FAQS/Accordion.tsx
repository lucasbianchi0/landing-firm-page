import React from "react";

interface IAccordion {
  summary: string;
  description: string;
}

const Accordion = ({ summary, description }: IAccordion) => {
  return (
    <div className="">
      <details
        className="group [&_summary::-webkit-details-marker]:hidden shadow-lg border !border-blue-700/30 shadow-blue-700/30 rounded-xl"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-3 text-gray-900 font-semibold">
          <h2 className="font-medium text-xl">{summary} </h2>

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

        <p className="mt-1 px-4 leading-relaxed text-gray-800 text-xl pb-4">
          {description}
        </p>
      </details>
    </div>
  );
};

export default Accordion;
