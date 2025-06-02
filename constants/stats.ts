import { StatisticsCardProps } from "@/types/stats";
import { rooms } from "./rooms";

const deluxe = rooms.filter((room) => room.type.toLowerCase() === "deluxe");
const single = rooms.filter((room) => room.type.toLowerCase() === "single");
const double = rooms.filter((room) => room.type.toLowerCase() === "double");

const statistics: StatisticsCardProps[] = [
  {
    title: "",
    amount: rooms.length,
    className: "bg-gradient-to-r from-blue-500 to-blue-600",
    key: "total_rooms",
  },
  {
    title: "Deluxe",
    amount: deluxe.length,
    className: "bg-gradient-to-r from-green-500 to-green-600",
    key: "total_deluxe_rooms",
  },
  {
    title: "Single",
    amount: single.length,
    className: "bg-gradient-to-r from-purple-500 to-purple-600",
    key: "total_single_rooms",
  },
  {
    title: "Double",
    amount: double.length,
    className: "bg-gradient-to-r from-orange-500 to-orange-600",
    key: "total_double_rooms",
  },
];

export { statistics };
