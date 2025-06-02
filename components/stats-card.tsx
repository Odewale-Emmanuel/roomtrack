import { cn } from "@/lib/cn";
import Font from "@/lib/font";
import { StatisticsCardProps } from "@/types/stats";

export function StatisticsCard({
  title,
  amount,
  className,
}: StatisticsCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 sm:gap-2.5",
        "p-4 sm:p-5",
        "shadow bg-white",
        "rounded-2xl",

        className
      )}
    >
      <span className="text-gray-100 text-sm">{title ? title : "Total"}</span>
      <h2
        className={cn(
          "text-2xl sm:text-4xl lg:text-5xl text-white font-bold",
          Font.geistSans
        )}
      >
        {amount}
      </h2>
      <p className="text-gray-100 text-sm">
        {title} {amount > 1 ? "Rooms" : "Room"}
      </p>
    </div>
  );
}
