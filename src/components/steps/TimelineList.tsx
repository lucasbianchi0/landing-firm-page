"use client";
import React, { useEffect, useState } from "react";
import Timeline from "./Timeline";
import DomainVerificationRoundedIcon from "@mui/icons-material/DomainVerificationRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import FileOpenRoundedIcon from "@mui/icons-material/FileOpenRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const TimelineList = () => {
  const dataTest = [
    {
      icon: FileOpenRoundedIcon,
      title: "Prepara el documento y el dispositivo",
      description:
        "Abre el documento que quieres firmar. Conecta y ajusta la tableta Wacom.",
    },
    {
      icon: SettingsRoundedIcon,
      title: "Configurar el software de firma",
      description: "Abre el software de firma ESignAnywhere.",
    },
    {
      icon: DriveFileRenameOutlineRoundedIcon,
      title: "Firmar el documento",
      description: "Firma con el lápiz de la tableta Wacom.",
    },
    {
      icon: DomainVerificationRoundedIcon,
      title: "Finalizar y Enviar",
      description: "Guarda y envía el documento firmado electrónicamente.",
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
        <Timeline
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

export default TimelineList;
