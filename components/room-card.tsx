import { cn } from "@/lib/cn";
import Image from "next/image";
import { RoomType } from "@/types/room";

export function RoomCard({ number, type, price, imageUrl }: RoomType) {
  type RoomTypeKeys = "single" | "deluxe" | "double";
  const roomType: Record<RoomTypeKeys, string> = {
    single:
      "text-green-600 py-1 px-3 rounded-4xl bg-green-600/5 sm:bg-transparent sm:rounded-none sm:p-0",
    deluxe:
      "text-purple-600 py-1 px-3 rounded-4xl bg-purple-600/5 sm:bg-transparent sm:rounded-none sm:p-0",

    double:
      "text-orange-600 py-1 px-3 rounded-4xl bg-orange-600/5 sm:bg-transparent sm:rounded-none sm:p-0",
  };

  const roomHoverShadow: Record<RoomTypeKeys, string> = {
    single: "shadow-green-600",
    deluxe: "shadow-purple-600",
    double: "shadow-orange-600",
  };
  console.log(
    `${roomHoverShadow[type.toLowerCase() as keyof typeof roomHoverShadow]}`
  );
  return (
    <div
      className={cn(
        "overflow-hidden shadow rounded-2xl border border-gray-200 flex items-center gap-4 sm:gap-0 sm:items-start sm:flex-col p-4 sm:p-0",
        "hover:shadow-lg transition-all hover:scale-105",
        type.toLowerCase() === "single" && "hover:shadow-green-600/30",
        type.toLowerCase() === "deluxe" && "hover:shadow-purple-600/30",
        type.toLowerCase() === "double" && "hover:shadow-orange-600/30"
      )}
    >
      <figure className="overflow-hidden">
        <Image
          width={600}
          height={800}
          src={imageUrl}
          alt={`${type} room`}
          placeholder="blur"
          blurDataURL="https://img.freepik.com/free-psd/isometric-bedroom-illustration_23-2151574005.jpg"
          loading="lazy"
          className="w-24 aspect-square object-cover rounded-lg sm:rounded-none sm:w-full sm:aspect-auto sm:object-contain transition-all hover:scale-110"
        />
      </figure>

      <div className="flex items-center grow-1 justify-between sm:block sm:w-full sm:p-3 md:px-4 md:py-3">
        <div>
          <h3 className="text-sm font-medium sm:font-semibold text-gray-500 sm:text-gray-600">
            Room {number}
          </h3>
          <p className="text-sm  font-medium sm:font-semibold text-gray-700 sm:text-gray-600">
            ${price.toFixed(2)}
          </p>
        </div>
        <p
          className={cn(
            "text-sm",
            roomType[type.toLowerCase() as keyof typeof roomType] ||
              "text-gray-600"
          )}
        >
          {type}
        </p>
      </div>
    </div>
  );
}
