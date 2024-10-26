"use client";
import React, { useEffect, useState } from "react";
import Timeline from "./Timeline";
import DomainVerificationRoundedIcon from "@mui/icons-material/DomainVerificationRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import FileOpenRoundedIcon from "@mui/icons-material/FileOpenRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import TimelineDark from "./TimelineDark";

// interface ITimelineListProps {
//   highlightedIndex: number;
// }

interface ITimelineListProps {
  onChangeImage: (index: number) => void;
  highlightedIndex: number;
}

// const TimelineList = ({ highlightedIndex }: ITimelineListProps) => {
const TimelineListDark = ({
  onChangeImage,
  highlightedIndex,
}: ITimelineListProps) => {
  const dataTest = [
    {
      icon: FileOpenRoundedIcon,
      title: "Prepara el documento y el dispositivo",
      description: [
        { text: "Abre el documento que quieres firmar. Conecta y ajusta " },
        { text: "la tableta Wacom", highlight: true },
        { text: "." },
      ],
    },
    {
      icon: SettingsRoundedIcon,
      title: "Configurar el software de firma",
      description: [
        { text: "Abre el software " },
        { text: "ESignAnywhere", highlight: true },
        { text: "." },
      ],
    },
    {
      icon: DriveFileRenameOutlineRoundedIcon,
      title: "Firmar el documento",
      description: [
        { text: "Firma con " },
        { text: "el lápiz de la tableta Wacom", highlight: true },
        { text: "." },
      ],
    },
    {
      icon: DomainVerificationRoundedIcon,
      title: "Finalizar y Enviar",
      description: [
        { text: "Guarda y envía " },
        { text: "el documento firmado electrónicamente", highlight: true },
        { text: "." },
      ],
    },
  ];

  return (
    <article className="w-full mt-10 space-y-5">
      {dataTest.map((step, index) => (
        <div key={index} onClick={() => onChangeImage(index)}>
          <TimelineDark
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

export default TimelineListDark;
