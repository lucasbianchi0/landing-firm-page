import DomainVerificationRoundedIcon from "@mui/icons-material/DomainVerificationRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import FileOpenRoundedIcon from "@mui/icons-material/FileOpenRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

export const pasos = [
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
