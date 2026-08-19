import { NavLink } from "react-router-dom";
import type { TransactionRowProps } from "../../types/Transaction";
import TransactionEntry from "./TransactionEntry";
import { ArrowUpRightFromSquare } from "lucide-react";
export default function TransactionsSummary() {
  const transactions: TransactionRowProps[] = [
    {
      id: crypto.randomUUID(),
      icon: "🛒",
      name: "Groceries",
      date: new Date("2026-08-19"),
      category: "Food",
      type: "expense",
      amount: 45.75,
    },
    {
      id: crypto.randomUUID(),
      icon: "🚗",
      name: "Fuel",
      date: new Date("2026-08-18"),
      category: "Transport",
      type: "expense",
      amount: 32.5,
    },
    {
      id: crypto.randomUUID(),
      icon: "💰",
      name: "Salary",
      date: new Date("2026-08-17"),
      category: "Income",
      type: "income",
      amount: 1200,
    },
  ];
  return (
    <div className="flex flex-col bg-surface rounded-2xl border border-border p-5 shadow-sm cursor-pointer transition duration-300 ease-in hover:scale-[1.02] hover:bg-surface-muted">
      {/* Header */}
      <div className="flex items-center justify-between text-text-primary">
        <h2 className="text-2xl font-semibold">Recent Transactions</h2>

        <NavLink
          to="/finance/transactions"
          className="bg-primary rounded-2xl flex justify-between items-center gap:3 px-2 py-1 md:gap-3 md:px-5 md:py-2"
        >
          <span className="">
            View all
          </span>{" "}
          <ArrowUpRightFromSquare size={16} />
        </NavLink>
      </div>

      {/* Transactions */}
      <div className="flex flex-col gap-3 mt-5">
        {transactions.map((item) => (
          <TransactionEntry key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
