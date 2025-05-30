import { cn } from "@/lib/cn";
import Image from "next/image";
type RoomCardProps = {
  number: number;
  type: string;
  price: number;
  imageUrl?: string;
};

export function RoomCard({ number, type, price, imageUrl }: RoomCardProps) {
  return (
    <div className="">
      <figure className="">
        <Image
          src={
            imageUrl ||
            "https://img.freepik.com/free-vector/vector-cartoon-interior-hotel-bedroom-night_33099-1217.jpg"
          }
          alt={`${type} room`}
        />
        <figcaption
          className={cn(!imageUrl && "hidden")}
        >{`${type} room`}</figcaption>
      </figure>
      <div className="">
        <h3 className="text-lg font-bold">Room {number}</h3>
        <p className="text-sm text-gray-500">{type}</p>
        <p className="text-lg font-semibold">${price.toFixed(2)} per night</p>
      </div>
    </div>
  );
}
