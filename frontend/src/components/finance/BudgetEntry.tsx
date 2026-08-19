import type { BudgetEntryProps } from "../../types/Budget";
import ProgressBar from "../general/ProgressBar";
export default function BudgetEntry(props: BudgetEntryProps) {
  const percentage = Math.min((props.spent / props.limit) * 100, 100).toFixed(2);
  return (
    <div className="flex justify-between gap-3">
      <div className="flex flex-col gap-2.5 justify-baseline items-start">
        <h2 className="text-xl text-text-primary">{props.category}</h2>
        <ProgressBar value={props.spent} max={props.limit} />
      </div>

      <div className="flex flex-col justify-center items-end">
        <h2 className={`text-md ${props.spent >= props.limit ? "text-expense" : "text-income"}`}>${props.spent} / ${props.limit}</h2>
        <span className="text-text-secondary">%{percentage}</span>
      </div>
    </div>
  );
}
