"use client";
import React, { useEffect, useState } from "react";
import Timeline from "./Timeline";
import DomainVerificationRoundedIcon from "@mui/icons-material/DomainVerificationRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import FileOpenRoundedIcon from "@mui/icons-material/FileOpenRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import Timeline1 from "./Timeline1";

const TimelineList1 = () => {
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

  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) =>
        prevIndex === dataTest.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 3 segundos encendido + 2 segundos apagado = 5 segundos total

    return () => clearInterval(interval);
  }, []);
  return (
    <article className="w-full mt-10">
      {dataTest.map((step, index) => (
        <Timeline1
          key={index}
          icon={step.icon}
          title={step.title}
          description={step.description}
          isHighlighted={index === highlightedIndex}
        />
      ))}
    </article>
  );
};

export default TimelineList1;
