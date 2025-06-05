import type { RoomType, RoomTypeKeys } from "@/types/room";

export const rooms: RoomType[] = [
  {
    number: 101,
    type: "Deluxe",
    price: 250,
    imageUrl:
      "https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg",
  },
  {
    number: 102,
    type: "Double",
    price: 180,
    imageUrl:
      "https://img.freepik.com/free-photo/interior-modern-comfortable-hotel-room_1232-1822.jpg",
  },
  {
    number: 103,
    type: "Single",
    price: 120,
    imageUrl:
      "https://img.freepik.com/free-photo/small-hotel-room-interior-with-double-bed-bathroom_1262-12489.jpg",
  },
  {
    number: 104,
    type: "Double",
    price: 170,
    imageUrl:
      "https://img.freepik.com/free-photo/one-king-size-bed-hotel-room_114579-12159.jpg",
  },
  {
    number: 105,
    type: "Single",
    price: 110,
    imageUrl:
      "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg",
  },
  {
    number: 106,
    type: "Deluxe",
    price: 260,
    imageUrl:
      "https://img.freepik.com/free-photo/interior-modern-comfortable-hotel-room_1232-1823.jpg",
  },
  {
    number: 107,
    type: "Double",
    price: 190,
    imageUrl:
      "https://img.freepik.com/free-photo/3d-rendering-luxury-bedroom-suite-resort-hotel-with-twin-bed-living_105762-2018.jpg",
  },
  {
    number: 108,
    type: "Single",
    price: 115,
    imageUrl:
      "https://img.freepik.com/free-photo/hotel-room-interior-with-bedroom-area-living-space-kitchen_1262-12288.jpg",
  },
  {
    number: 109,
    type: "Deluxe",
    price: 270,
    imageUrl:
      "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int_1203-2724.jpg",
  },
  {
    number: 110,
    type: "Double",
    price: 200,
    imageUrl:
      "https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg",
  },
  {
    number: 111,
    type: "Deluxe",
    price: 280,
    imageUrl:
      "https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2064.jpg",
  },
  {
    number: 112,
    type: "Single",
    price: 130,
    imageUrl:
      "https://img.freepik.com/free-photo/cozy-studio-apartment-with-bedroom-living-space_1262-12323.jpg",
  },
];

export const roomTypeClassName: Record<RoomTypeKeys, string> = {
  single:
    "text-purple-600 py-1 px-3 rounded-4xl bg-green-600/5 sm:bg-transparent sm:rounded-none sm:p-0",
  deluxe:
    "text-green-600 py-1 px-3 rounded-4xl bg-purple-600/5 sm:bg-transparent sm:rounded-none sm:p-0",

  double:
    "text-orange-600 py-1 px-3 rounded-4xl bg-orange-600/5 sm:bg-transparent sm:rounded-none sm:p-0",
};

export const roomHoverShadow: Record<RoomTypeKeys, string> = {
  single: "hover:shadow-purple-600/35",
  deluxe: "hover:shadow-green-600/35",
  double: "hover:shadow-orange-600/35",
};
