import { cn } from "@/lib/cn";

type StatisticsCardProps = {
  title: string;
  amount: number;
};

export function StatisticsCard({ title, amount }: StatisticsCardProps) {
  return (
    <div className="">
      <span className="">Total</span>
      <h2 className="text-lg font-bold">{amount}</h2>
      <p>{title}</p>
    </div>
  );
}
