import { NavLink } from "react-router-dom";
import { ArrowUpRightFromSquare } from "lucide-react";
import BudgetEntry from "./BudgetEntry";
import type { BudgetEntryProps } from "../../../types/Budget";
export default function BudgetSumary() {
  const budgets: BudgetEntryProps[] = [
    {
      category: "Food",
      spent: 520,
      limit: 500,
    },
    {
      category: "Transport",
      spent: 275,
      limit: 300,
    },
    {
      category: "Entertainment",
      spent: 100,
      limit: 200,
    },
  ];

  return (
    <div className="flex flex-col bg-surface rounded-2xl border border-border p-5 shadow-sm cursor-pointer transition duration-300 ease-in hover:scale-[1.02] hover:bg-surface-muted">
      {/* Header */}
      <div className="flex items-center justify-between text-text-primary">
        <h2 className="text-2xl font-semibold">Budget Summary</h2>

        <NavLink
          to="/finance/budgets"
          className="bg-primary rounded-2xl flex justify-between items-center gap:3 px-2 py-1 md:gap-3 md:px-5 md:py-2"
        >
          <span className="">View all</span>{" "}
          <ArrowUpRightFromSquare size={16} />
        </NavLink>
      </div>

      {/* Transactions */}
      <div className="flex flex-col gap-3 mt-5">
        {budgets.map((item) => (
          <BudgetEntry key={item.category} {...item} />
        ))}
      </div>
    </div>
  );
}
