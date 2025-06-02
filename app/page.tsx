import Image from "next/image";
import { cn } from "@/lib/cn";
import { StatisticsCard } from "@/components/stats-card";
import { RoomCard } from "@/components/room-card";
import { rooms } from "@/constants/rooms";

export default function Home() {
  return (
    <main className="p-4 md:py-5 grow-1">
      <div className="mx-auto flex flex-col gap-8 w-full lg:max-w-6xl">
        <header className="flex flex-col bordoer border-gray-200">
          <h2
            className={cn(
              "inline-block mb-2 md:mb-4 text-lg md:text-xl font-bold"
              // "text-transparent bg-gradient-to-r from-red-400 via-purple-500 to-pink-500 bg-clip-text"
            )}
          >
            Overview
          </h2>

          <div className="grid gap-4 grid-cols-2 sm:gap-8 sm:grid-cols-4">
            <StatisticsCard
              title=""
              amount={43}
              className="bg-gradient-to-r from-blue-500 to-blue-600"
            />

            <StatisticsCard
              title=" Deluxe"
              amount={1}
              className="bg-gradient-to-r from-green-500 to-green-600"
            />
            <StatisticsCard
              title=" Single"
              amount={8}
              className="bg-gradient-to-r from-purple-500 to-purple-600"
            />
            <StatisticsCard
              title=" Double"
              amount={5}
              className="bg-gradient-to-r from-orange-500 to-orange-600"
            />
          </div>
        </header>

        <section className="flex flex-col gap-4 sm:gap-6 border border-gray-200 bg-white rounded-2xl p-4 sm:p-5">
          <header className="flex justify-between items-center">
            <h2
              className={cn(
                "inline-block mb-2 md:mb-4 text-lg md:text-xl font-bold"
                // "text-transparent bg-gradient-to-r from-red-400 via-purple-500 to-pink-500 bg-clip-text"
              )}
            >
              All Rooms
            </h2>
            <button className="border border-blue-600 text-blue-600 hover:bg-gradient-to-r from-blue-500 to-blue-600 hover:text-white hover:border-transparent text-sm hover:font-bold px-2 py-1 sm:px-4 sm:py-2 rounded-sm sm:rounded-md">
              Add Room
            </button>
          </header>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-3 md:grid-cols-4">
            {rooms.map((room) => (
              <RoomCard
                number={room.number}
                type={room.type}
                price={room.price}
                imageUrl={room.imageUrl}
                key={room.number}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
