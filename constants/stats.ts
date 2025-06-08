import { StatisticsCardProps } from "@/types/stats";

const statistics: Omit<StatisticsCardProps, "amount">[] = [
  {
    title: "",
    className:
      "bg-gradient-to-r from-blue-500 to-blue-600 dark:bg-black/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm",
    key: "total_rooms",
  },
  {
    title: "Deluxe",
    className:
      "bg-gradient-to-r from-green-500 to-green-600 dark:bg-black/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm",
    key: "total_deluxe_rooms",
  },
  {
    title: "Single",
    className:
      "bg-gradient-to-r from-purple-500 to-purple-600 dark:bg-black/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm",
    key: "total_single_rooms",
  },
  {
    title: "Double",
    className:
      "bg-gradient-to-r from-orange-500 to-orange-600 dark:bg-black/20 dark:from-transparent dark:to-transparent dark:backdrop-blur-sm",
    key: "total_double_rooms",
  },
];

export { statistics };
