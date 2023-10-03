import { COLORS } from "../constants/colors";
import harinasPuras from "../assets/harinasPuras.png";
import ceramica from "../assets/ceramica.jpg";

export const CATEGORIES = [
  {
    id: "1",
    title: "Productos en cerámica",
    img: ceramica,
    color: COLORS.secondary,
    icon: "home",
    imageSize: { width: 200, height: 200 }, //
    cardStyles: { width: 250, height: 250 }, //
  },
  {
    id: "2",
    title: "Totinas",
    img: harinasPuras,
    color: COLORS.secondary,
    icon: "home",
    imageSize: { width: 200, height: 200 }, //
    cardStyles: { width: 250, height: 250 }, //
  },
];
