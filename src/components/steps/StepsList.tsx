"use client";
import React, { useEffect, useState } from "react";

import StepItem from "./StepItem";
import { pasos } from "@/data/pasos";

interface ITimelineListProps {
  onChangeImage: (index: number) => void;
  highlightedIndex: number;
}

const StepsList = ({
  onChangeImage,
  highlightedIndex,
}: ITimelineListProps) => {


  return (
    <article className="px-1 mb-8 w-full space-y-5 z-10 ">
      {pasos.map((step, index) => (
        <div className="md:hover:scale-105 transition-all duration-200" key={index} onClick={() => onChangeImage(index)}>
          <StepItem
            icon={step.icon}
            title={step.title}
            description={step.description}
            isHighlighted={index === highlightedIndex}
          />
        </div>
      ))}
    </article>
  );
};

export default StepsList;
