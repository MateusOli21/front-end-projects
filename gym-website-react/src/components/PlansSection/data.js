import { FaDumbbell, FaCrown } from "react-icons/fa";
import { RiBikeLine } from "react-icons/ri";

const plansData = [
  {
    name: "Bronze",
    price: "29.00",
    features: ["Acesso a área de musculação", "Aulas em grupo"],
    icon: FaDumbbell,
  },
  {
    name: "Prata",
    features: ["Tudo do plano bronze", "Acesso a piscina"],
    price: "49.00",
    icon: RiBikeLine,
  },
  {
    name: "Ouro",
    features: ["Acesso liberado para todas as áreas e atividades"],
    price: "79.00",
    icon: FaCrown,
  },
];

export default plansData;
