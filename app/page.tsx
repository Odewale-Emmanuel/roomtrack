"use client";
import { cn } from "@/lib/cn";
import { StatisticsCard } from "@/components/stats-card";
import { RoomCard } from "@/components/room-card";
import { rooms } from "@/constants/rooms";
import { statistics } from "@/constants/stats";
import { ChangeEvent, FormEvent, useState } from "react";
import { RoomType } from "@/types/room";
import Font from "@/public/font";
import { IoClose } from "react-icons/io5";
import SplashCursor from "@/lib/SpalshCursor";

function handleOpenDialog(): void {
  const dialog = document.querySelector("dialog");
  if (dialog) {
    dialog.showModal();
  }
}

function handleCloseDialog(): void {
  const dialog = document.querySelector("dialog");
  if (dialog) {
    dialog.close();
  }
}

function handleAddNewRoom(
  roomDb: RoomType[],
  newRoom: RoomType,
  setRoomList: React.Dispatch<React.SetStateAction<RoomType[]>>
): void {
  setRoomList([...roomDb, newRoom]);
  handleCloseDialog();
}

function handleUpdateNewRoom(
  e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  newRoom: RoomType,
  setNewRoom: React.Dispatch<React.SetStateAction<RoomType>>
): void {
  if (
    e.target instanceof HTMLInputElement ||
    e.target instanceof HTMLSelectElement
  ) {
    setNewRoom({
      ...newRoom,
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value,
    });
  }
}

function handleFormSubmit(
  e: FormEvent<HTMLFormElement>,
  newRoom: RoomType,
  roomsList: RoomType[],
  setRoomList: React.Dispatch<React.SetStateAction<RoomType[]>>,
  setNewRoom: React.Dispatch<React.SetStateAction<RoomType>>
): void {
  e.preventDefault();

  const roomCheck = roomsList.find((room) => room.number === newRoom.number);

  if (roomCheck) {
    alert(`Room ${newRoom.number} Already Exist`);
    console.warn("Trying to add a room that already exits");
    console.info("Try a new or different room number");
    return;
  }

  handleAddNewRoom(roomsList, newRoom, setRoomList);
  e.currentTarget.reset();
  setNewRoom({
    number: 0,
    type: "Single",
    price: 0,
    imageUrl: "",
  });
}

export default function Home() {
  const [newRoom, setNewRoom] = useState<RoomType>({
    number: 0,
    type: "Single",
    price: 0,
    imageUrl: "",
  });
  const [roomsList, setRoomList] = useState<RoomType[]>(rooms);

  const statisticsWithAmount = statistics.map((stat) => ({
    ...stat,
    amount:
      stat.title === ""
        ? roomsList.length
        : roomsList.filter(
            (room) => room.type.toLowerCase() === stat.title.toLowerCase()
          ).length,
  }));
  const sortedStatistics = [...statisticsWithAmount].sort(
    (a, b) => b.amount - a.amount
  );

  return (
    <main className="p-4 md:py-5 grow-1">
      <span className="hidden dark:block">
        <SplashCursor />
      </span>
      <div className="mx-auto flex flex-col gap-8 w-full lg:max-w-6xl">
        <header className="flex flex-col">
          <h2
            className={cn(
              "inline-block text-black/85 dark:text-white/85 mb-2 md:mb-4 text-lg md:text-xl font-bold",
              Font.inter.className
            )}
          >
            Overview
          </h2>

          <div className="grid gap-4 grid-cols-2 sm:gap-8 sm:grid-cols-4">
            {roomsList &&
              sortedStatistics.map((stat) => (
                <StatisticsCard
                  title={stat.title}
                  amount={stat.amount}
                  className={stat.className}
                  key={stat.key}
                />
              ))}
          </div>
        </header>

        <section className="flex flex-col gap-4 sm:gap-6 border border-gray-200 bg-white dark:bg-black/30 dark:border-gray-50/10 rounded-2xl p-4 sm:p-5">
          <header className="flex justify-between items-center">
            <h2
              className={cn(
                "inline-block text-black/85 dark:text-white/85 mb-2 md:mb-4 text-lg md:text-xl font-bold",
                Font.inter.className
              )}
            >
              All Rooms
            </h2>

            <button
              className="border border-blue-600 dark:border-white text-blue-600 dark:text-white hover:bg-gradient-to-r from-blue-500 to-blue-600 dark:from-transparent dark:to-transparent dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-transparent  text-sm hover:font-bold px-2 py-1 sm:px-4 sm:py-2 rounded-sm sm:rounded-md hover:cursor-pointer"
              onClick={handleOpenDialog}
              type="button"
              aria-label="Add New Room"
              title="Add New Room"
              data-testid="add-room-button"
            >
              Add Room
            </button>

            <dialog className="mx-auto translate-y-[-50%] fixed top-1/2 w-10/12 max-w-md p-6 bg-white dark:bg-black dark:text-white  rounded-xl z-50 backdrop:bg-black/20 backdrop:backdrop-blur-sm">
              <form
                method="dialog"
                className="flex flex-col gap-4"
                onSubmit={(e) =>
                  handleFormSubmit(
                    e,
                    newRoom,
                    roomsList,
                    setRoomList,
                    setNewRoom
                  )
                }
              >
                <h3 className="text-lg font-bold flex items-center justify-between mb-2">
                  Add New Room{" "}
                  <span onClick={handleCloseDialog}>
                    <IoClose className="cursor-pointer text-2xl hover:scale-125 transition-all text-red-500" />
                  </span>
                </h3>
                <label
                  className="flex flex-col gap-2 sm:grid sm:grid-cols-[1fr_2.3fr] sm:items-center"
                  htmlFor="number"
                >
                  <span className="text-gray-700 dark:text-gray-400 after:ml-0.5 after:text-red-500 after:content-['*']">
                    Room Number:
                  </span>
                  <input
                    onChange={(e) =>
                      handleUpdateNewRoom(e, newRoom, setNewRoom)
                    }
                    placeholder="e.g. 101"
                    type="number"
                    name="number"
                    id="number"
                    min={100}
                    required
                    className="border border-gray-300 grow-1 rounded-md p-2 placeholder:text-sm"
                  />
                </label>
                <label
                  className="flex flex-col gap-2 sm:grid sm:grid-cols-[1fr_2.3fr] sm:items-center"
                  htmlFor="type"
                >
                  <span className="text-gray-700 dark:text-gray-400 after:ml-0.5 after:text-red-500 after:content-['*']">
                    Room Type:
                  </span>
                  <select
                    onChange={(e) =>
                      handleUpdateNewRoom(e, newRoom, setNewRoom)
                    }
                    value={newRoom.type}
                    name="type"
                    id="type"
                    required
                    className="border border-gray-300 grow-1 rounded-md p-2 dark:bg-black/90"
                  >
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Deluxe">Deluxe</option>
                  </select>
                </label>
                <label
                  className="flex flex-col gap-2 sm:grid sm:grid-cols-[1fr_2.3fr] sm:items-center"
                  htmlFor="price"
                >
                  <span className="text-gray-700 dark:text-gray-400 after:ml-0.5 after:text-red-500 after:content-['*']">
                    Price:
                  </span>
                  <input
                    onChange={(e) =>
                      handleUpdateNewRoom(e, newRoom, setNewRoom)
                    }
                    placeholder="e.g. 150"
                    type="text"
                    name="price"
                    id="price"
                    required
                    className="border border-gray-300 grow-1 rounded-md p-2 placeholder:text-sm"
                  />
                </label>
                <label
                  className="flex flex-col gap-2 sm:grid sm:grid-cols-[1fr_2.3fr] sm:items-center"
                  htmlFor="imageUrl"
                >
                  <span className="text-gray-700 dark:text-gray-400">
                    Image URL:
                  </span>
                  <input
                    onChange={(e) =>
                      handleUpdateNewRoom(e, newRoom, setNewRoom)
                    }
                    placeholder="img.freepik.com/free-photo/..."
                    type="url"
                    name="imageUrl"
                    id="imageUrl"
                    className="border border-gray-300 grow-1 rounded-md p-2 placeholder:text-sm"
                  />
                </label>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white dark:text-black dark:bg-white dark:hover:bg-white/80 rounded-md px-4 py-2 w-full hover:bg-blue-600/80 hover:cursor-pointer font-semibold"
                  >
                    Add Room
                  </button>
                </div>
              </form>
            </dialog>
          </header>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-3 md:grid-cols-4">
            {roomsList &&
              [...roomsList].reverse().map((room: RoomType) => (
                <RoomCard
                  number={room.number}
                  type={room.type}
                  price={room.price}
                  imageUrl={room.imageUrl}
                  key={room.number}
                  handleDelete={() => {
                    setRoomList((prevRooms) =>
                      prevRooms.filter(
                        (preRoom) => preRoom.number !== room.number
                      )
                    );
                  }}
                />
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
