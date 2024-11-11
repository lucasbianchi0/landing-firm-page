import { Industry } from "@/types";
import {
  AccountBalanceRounded,
  PaymentRounded,
  HealthAndSafetyRounded,
  WifiRounded,
  LocalShippingRounded,
  EditRounded,
  DirectionsCarFilledRounded,
  MedicalServicesRounded,
  StoreRounded,
} from "@mui/icons-material";

export const industrias: Industry[] = [
  {
    title: "Logística",
    icon: LocalShippingRounded,
    color: "#A3C6FF",
    hoverClass: "industry-item-hover-blue-soft",
    beneficios: [
      "Identifica a los transportistas y personal logístico sin demoras, mejorando la eficiencia operativa.",
      "Asegura la entrega correcta al destinatario gracias a la identificación biométrica en tiempo real.",
      "Minimiza el riesgo de fraude en la cadena de suministro al utilizar datos biométricos para verificar la identidad.",
    ],
  },
  {
    title: "Retail",
    icon: StoreRounded,
    color: "#FFD1A3",
    hoverClass: "industry-item-hover-orange-soft",
    beneficios: [
      "Ofrece a los clientes una autenticación sin contraseñas, evitando fraudes y mejorando la seguridad en el pago.",
      "Facilita el acceso de los clientes a sus cuentas y procesos de pago de manera rápida y segura.",
      "Utiliza la biometría para controlar el acceso a áreas restringidas y para la gestión eficiente del personal.",
    ],
  },
  {
    title: "Educación",
    icon: EditRounded,
    color: "#A3FFD1",
    hoverClass: "industry-item-hover-green-soft",
    beneficios: [
      "Garantiza el acceso seguro a instalaciones educativas, limitando el ingreso a personal y estudiantes autorizados.",
      "Simplifica el seguimiento de asistencia de estudiantes y personal con identificación biométrica.",
      "Asegura que los datos personales y académicos de los estudiantes estén protegidos con autenticación biométrica.",
    ],
  },
  {
    title: "Automotriz",
    icon: DirectionsCarFilledRounded,
    color: "#FFC6A3",
    hoverClass: "industry-item-hover-pink-soft",
    beneficios: [
      "Limita el acceso a áreas restringidas en plantas de fabricación y oficinas mediante autenticación biométrica.",
      "Protege las transacciones de ventas de vehículos con autenticación biométrica para evitar fraudes.",
      "Controla de forma eficiente la entrada y salida del personal a través de sistemas biométricos.",
    ],
  },
  {
    title: "Farmacéutica",
    icon: MedicalServicesRounded,
    color: "#D1A3FF",
    hoverClass: "industry-item-hover-purple-soft",
    beneficios: [
      "Asegura que solo el personal autorizado pueda acceder a áreas críticas de investigación y fabricación.",
      "Garantiza que los datos confidenciales de investigación y desarrollo estén protegidos mediante autenticación biométrica.",
      "Facilita auditorías y controles con registros de acceso biométricos, asegurando transparencia y control.",
    ],
  },
  {
    title: "Banca",
    icon: AccountBalanceRounded,
    color: "#FFD1D1",
    hoverClass: "industry-item-hover-pale-pink",
    beneficios: [
      "Facilita la identificación rápida y segura de los clientes durante transacciones bancarias.",
      "Reduce el riesgo de fraude financiero mediante la identificación biométrica de clientes y empleados.",
      "Permite a los clientes acceder de forma más segura y eficiente a sus cuentas sin necesidad de contraseñas.",
    ],
  },
  {
    title: "Fintech",
    icon: PaymentRounded,
    color: "#A3D1FF",
    hoverClass: "industry-item-hover-light-blue",
    beneficios: [
      "Elimina la necesidad de contraseñas, permitiendo un acceso seguro y conveniente a plataformas financieras.",
      "Protege las transacciones digitales y cuentas financieras mediante autenticación biométrica avanzada.",
      "Permite que los usuarios accedan a sus cuentas desde cualquier dispositivo sin comprometer la seguridad.",
    ],
  },
  {
    title: "Seguros",
    icon: HealthAndSafetyRounded,
    color: "#FFE6A3",
    hoverClass: "industry-item-hover-yellow-soft",
    beneficios: [
      "Asegura que los clientes puedan firmar documentos y gestionar sus pólizas de forma segura.",
      "Minimiza los casos de fraude mediante la validación biométrica en la firma de contratos y reclamaciones.",
      "Facilita la gestión digital de pólizas y documentos aseguradores con autenticación biométrica segura.",
    ],
  },

  {
    title: "Telecoms",
    icon: WifiRounded,
    color: "#A3FFE6",
    hoverClass: "industry-item-hover-teal",
    beneficios: [
      "Garantiza que solo los usuarios autorizados puedan acceder a servicios de telecomunicaciones protegidos.",
      "Asegura que los datos personales y de clientes estén protegidos mediante autenticación biométrica.",
      "Facilita el acceso rápido y seguro a plataformas de telecomunicaciones, mejorando la experiencia del cliente.",
    ],
  },
];
