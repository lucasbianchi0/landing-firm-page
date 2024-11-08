"use client";
import React, { useEffect, useState } from "react";
import Timeline from "./Timeline";
import DomainVerificationRoundedIcon from "@mui/icons-material/DomainVerificationRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import FileOpenRoundedIcon from "@mui/icons-material/FileOpenRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import TimelineDark from "./TimelineDark";
import Timeline2 from "./Timeline2";
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
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
      title: "Iniciar sesión",
      description: [{ text: "Inicie sesión con usuario y contraseña" }],
    },
    {
      icon: SettingsRoundedIcon,
      title: "Elija el documento",
      description: [
        {
          text: "Elija el documento a firmar y prepare el workflow de los firmantes",
        },
      ],
    },
    {
      icon: DriveFileRenameOutlineRoundedIcon,
      title: "Configurar el documento",
      description: [
        {
          text: "Prepare el documento en el diseñador, ajuste la posición de firma y campos de formulario.",
        },
      ],
    },
    {
      icon: ForwardToInboxIcon,
      title: "Notificaciones y enviar",
      description: [
        {
          text: "Configure las notificaciones automáticas y envíe el documento a los destinatarios ",
        },
      ],
    },
    {
      icon: DomainVerificationRoundedIcon,
      title: "Firmar y finalizar",
      description: [
        { text: "Una vez recibido el correo electrónico, firme el documento" },
      ],
    },
  ];

  return (
    <article className="px-1 mb-8 w-full space-y-5 z-10 ">
      {dataTest.map((step, index) => (
        <div className="md:hover:scale-105 transition-all duration-200" key={index} onClick={() => onChangeImage(index)}>
          <Timeline2
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
