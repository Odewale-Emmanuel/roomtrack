import { StaticImageData } from "next/image";

export type RoomType = {
  number: number;
  type: "Deluxe" | "Single" | "Double";
  price: number;
  imageUrl?: string | StaticImageData;
  key?: number | string;
};

export type RoomTypeKeys = "single" | "deluxe" | "double";
export type RoomTypeRecord = Record<RoomTypeKeys, string>;
