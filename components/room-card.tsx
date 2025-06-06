import { cn } from "@/lib/cn";
import Image from "next/image";
import { RoomType } from "@/types/room";
import { roomHoverShadow, roomTypeClassName } from "@/constants/rooms";
import { MdOutlineDeleteForever } from "react-icons/md";

export function RoomCard({
  number,
  type,
  price,
  imageUrl,
  handleDelete,
}: RoomType & { handleDelete: () => void }) {
  return (
    <div
      className={cn(
        "overflow-hidden shadow rounded-2xl border border-gray-200 flex items-center gap-4 sm:gap-0 sm:items-start sm:flex-col p-4 sm:p-0",
        "hover:shadow-lg transition-all duration-[500ms] hover:scale-105 group",
        roomHoverShadow[type.toLowerCase() as keyof typeof roomHoverShadow]
      )}
    >
      <figure className="overflow-hidden relative">
        <Image
          width={600}
          height={800}
          src={
            imageUrl ||
            "https://img.freepik.com/free-psd/isometric-bedroom-illustration_23-2151574005.jpg"
          }
          alt={`${type} room`}
          placeholder="blur"
          blurDataURL="https://img.freepik.com/free-psd/isometric-bedroom-illustration_23-2151574005.jpg"
          loading="lazy"
          className="w-24 aspect-square object-cover rounded-lg sm:rounded-none sm:w-full sm:aspect-auto sm:object-contain transition-all duration-[300ms] sm:group-hover:scale-110"
        />
        <button
          className="hidden sm:group-hover:inline-block absolute top-3 right-3 text-xl text-red-500 bg-white/80 rounded-full p-1 hover:bg-red-400 hover:text-white"
          aria-label="Delete Room"
          title="Delete Room"
          onClick={handleDelete}
        >
          <MdOutlineDeleteForever />
        </button>
      </figure>

      <div className="flex items-center grow-1 justify-between sm:block sm:w-full sm:p-3 md:px-4 md:py-3">
        <div>
          <h3 className="text-sm font-medium sm:font-semibold text-gray-500 sm:text-gray-600">
            Room {number}
          </h3>
          <p className="text-sm  font-medium sm:font-semibold text-gray-700 sm:text-gray-600">
            ${Number(price).toFixed(2)}
          </p>
        </div>
        <p
          className={cn(
            "text-sm",
            roomTypeClassName[
              type.toLowerCase() as keyof typeof roomTypeClassName
            ] || "text-gray-600"
          )}
        >
          {type}
        </p>
      </div>
    </div>
  );
}
