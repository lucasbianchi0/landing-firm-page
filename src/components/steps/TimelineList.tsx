"use client";
import React, { useEffect, useState } from "react";
import Timeline from "./Timeline";
import DomainVerificationTwoToneIcon from "@mui/icons-material/DomainVerificationTwoTone";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import FileOpenTwoToneIcon from "@mui/icons-material/FileOpenTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

const TimelineList = () => {
  const dataTest = [
    {
      icon: FileOpenTwoToneIcon,
      title: "Prepara el documento y el dispositivo",
      description:
        "Abre el documento que quieres firmar.Conecta y ajusta la tableta Wacom.",
    },
    {
      icon: SettingsTwoToneIcon,
      title: "Configurar el software de firma",
      description: "Abre el software de firma ESignAnywhere.",
    },
    {
      icon: DriveFileRenameOutlineTwoToneIcon,
      title: "Firmar el documento",
      description: "Firma con el lápiz de la tableta Wacom.",
    },
    {
      icon: SettingsTwoToneIcon,
      title: "Finalizar y Enviar",
      description:
        "Verifica la claridad y ubicación de la firma. Guarda y envía el documento firmado electrónicamente.",
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
    <article className="w-full md:w-[40%]">
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
