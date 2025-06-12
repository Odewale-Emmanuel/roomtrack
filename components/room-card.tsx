import { cn } from "@/lib/cn";
import Image from "next/image";
import { RoomType } from "@/types/room";
import { roomHoverShadow, roomTypeClassName } from "@/constants/rooms";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function RoomCard({
  number,
  type,
  price,
  imageUrl,
  handleDelete,
}: RoomType & { handleDelete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  function handleClick(): void {
    setIsVisible(false);
  }

  return (
    <AnimatePresence initial={false} onExitComplete={handleDelete}>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div
            className={cn(
              "overflow-hidden shadow rounded-2xl border border-gray-200 dark:border-transparent dark:bg-black/25 dark:shadow-black/50 dark:shadow-xl dark:backdrop-blur-sm flex items-center gap-4 sm:gap-0 sm:items-start sm:flex-col p-4 sm:p-0",
              "hover:shadow-lg transition-all duration-[500ms] hover:scale-105 group hover:cursor-pointer",
              roomHoverShadow[
                type.toLowerCase() as keyof typeof roomHoverShadow
              ]
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
                className={cn(
                  "w-24 aspect-square object-cover rounded-lg sm:rounded-none sm:w-full sm:aspect-auto sm:object-contain transition-all duration-[300ms] sm:group-hover:scale-110",
                  "dark:border dark:border-white dark:sm:border-0"
                )}
              />
              <button
                className="hidden sm:group-hover:inline-block absolute top-3 right-3 text-xl text-red-500 bg-white/80 rounded-full p-1 hover:bg-red-400 hover:text-white group-hover:cursor-pointer"
                aria-label="Delete Room"
                title="Delete Room"
                onClick={handleClick}
              >
                <MdOutlineDeleteForever />
              </button>
            </figure>

            <div className="flex items-center grow-1 justify-between sm:block sm:w-full sm:p-3 md:px-4 md:py-3">
              <div>
                <h3 className="text-sm font-medium sm:font-semibold dark:text-white text-gray-500 sm:text-gray-600">
                  Room {number}
                </h3>
                <p className="text-sm font-medium sm:font-semibold dark:text-white/70 text-gray-700 sm:text-gray-600">
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
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
