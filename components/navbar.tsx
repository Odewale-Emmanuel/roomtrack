import Font from "@/public/font";
import { cn } from "@/lib/cn";

export default function Navbar() {
  return (
    <nav className="p-4 md:p-5 bg-white/5 sticky top-0 left-0  backdrop-blur-sm text-black border-b shadow border-gray-50 z-50">
      <div className="mx-auto w-full lg:max-w-6xl ">
        <h1
          className={cn(
            "text-md sm:text-lg font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text inline-block",
            Font.robotoSlab.className
          )}
        >
          RoomTrack
        </h1>
      </div>
    </nav>
  );
}
