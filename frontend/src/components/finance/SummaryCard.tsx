import type { ISummaryCard } from "../../types/Card";
import { ArrowUp, ArrowDown, PiggyBank } from "lucide-react";

export default function SummaryCard(props: ISummaryCard) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-5 shadow-sm cursor-pointer transition duration-300 ease-in hover:scale-[1.02] hover:bg-surface-muted">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-text-primary">{props.title}</h2>

        <div className="text-text-primary">
          {props.title === "Savings" ? (
            <PiggyBank />
          ) : props.change > 0 ? (
            <ArrowUp />
          ) : (
            <ArrowDown />
          )}
        </div>
      </div>

      <div
        className={`text-3xl font-semibold ${props.type === "positive" ? "text-income" : "text-expense"}`}
      >
        ${props.value.toLocaleString()}
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span
          className={
            props.type === "positive"
              ? "text-income"
              : props.type === "negative"
                ? "text-expense"
                : "text-text-secondary"
          }
        >
          ●
        </span>

        <span className="text-text-secondary">
          <span
            className={
              props.type === "positive"
                ? "text-income"
                : props.type === "negative"
                  ? "text-expense"
                  : "text-text-primary"
            }
          >
            {props.change > 0 ? "+" : ""}
            {props.change}%
          </span>{" "}
          vs. last month
        </span>
      </div>
    </div>
  );
}
