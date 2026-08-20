import type { TransactionRowProps } from "../../../types/Transaction";
import TransactionEntry from "../overview/TransactionEntry";
import TransactionActions from "./TransactionActions";
import { useState } from "react";

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
    icon: "🍕",
    name: "Pizza Dinner",
    date: new Date("2026-08-17"),
    category: "Food",
    type: "expense",
    amount: 24.99,
  },
  {
    id: crypto.randomUUID(),
    icon: "🎬",
    name: "Cinema Tickets",
    date: new Date("2026-08-16"),
    category: "Entertainment",
    type: "expense",
    amount: 28,
  },
  {
    id: crypto.randomUUID(),
    icon: "🎮",
    name: "Video Game",
    date: new Date("2026-08-15"),
    category: "Entertainment",
    type: "expense",
    amount: 59.99,
  },
  {
    id: crypto.randomUUID(),
    icon: "🛍️",
    name: "New Clothes",
    date: new Date("2026-08-14"),
    category: "Shopping",
    type: "expense",
    amount: 85.4,
  },
  {
    id: crypto.randomUUID(),
    icon: "💡",
    name: "Electricity Bill",
    date: new Date("2026-08-13"),
    category: "Bills",
    type: "expense",
    amount: 72.3,
  },
  {
    id: crypto.randomUUID(),
    icon: "📱",
    name: "Phone Bill",
    date: new Date("2026-08-12"),
    category: "Bills",
    type: "expense",
    amount: 25,
  },
  {
    id: crypto.randomUUID(),
    icon: "☕",
    name: "Coffee",
    date: new Date("2026-08-11"),
    category: "Food",
    type: "expense",
    amount: 4.5,
  },
  {
    id: crypto.randomUUID(),
    icon: "🚕",
    name: "Taxi",
    date: new Date("2026-08-10"),
    category: "Transport",
    type: "expense",
    amount: 18,
  },
  {
    id: crypto.randomUUID(),
    icon: "💰",
    name: "Salary",
    date: new Date("2026-08-17"),
    category: "Income",
    type: "income",
    amount: 120000,
  },
  {
    id: crypto.randomUUID(),
    icon: "🎁",
    name: "Performance Bonus",
    date: new Date("2026-08-19"),
    category: "Income",
    type: "income",
    amount: 1200,
  },
  {
    id: crypto.randomUUID(),
    icon: "💻",
    name: "Freelance Project",
    date: new Date("2026-08-16"),
    category: "Income",
    type: "income",
    amount: 450,
  },
  {
    id: crypto.randomUUID(),
    icon: "💵",
    name: "Cash Gift",
    date: new Date("2026-08-09"),
    category: "Income",
    type: "income",
    amount: 100,
  },
  {
    id: crypto.randomUUID(),
    icon: "↩️",
    name: "Refund",
    date: new Date("2026-08-08"),
    category: "Income",
    type: "income",
    amount: 75.5,
  },
  {
    id: crypto.randomUUID(),
    icon: "📈",
    name: "Investment Return",
    date: new Date("2026-08-05"),
    category: "Income",
    type: "income",
    amount: 180,
  },
];

export default function TransactionTable() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleEdit = () => {
    console.log("Edit");
  };

  const handleDelete = () => {
    console.log("Delete");
  };

  const totalExpenses: number = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalIncome: number = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance: number = totalIncome - totalExpenses;

  return (
    <div className="bg-surface rounded-2xl p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-5 border-b border-surface-muted">
        {/* Income */}
        <section className="flex flex-col gap-4 md:border-r md:border-surface-muted p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-income">Income</h2>

              <p className="text-sm text-text-secondary">Money coming in</p>
            </div>

            <span className="text-income font-semibold">
              +${totalIncome.toFixed(2)}
            </span>
          </div>

          <div className="flex flex-col divide-y divide-border">
            {transactions
              .filter((item) => item.type === "income")
              .map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center gap-4 py-4"
                >
                  <div className="flex-1 min-w-0">
                    <TransactionEntry {...transaction} />
                  </div>

                  <TransactionActions
                    id={transaction.id}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                  />
                </div>
              ))}
          </div>
        </section>

        {/* Expenses */}
        <section className="flex flex-col gap-4 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-expense">Expenses</h2>

              <p className="text-sm text-text-secondary">Money going out</p>
            </div>

            <span className="text-expense font-semibold">
              -${totalExpenses.toFixed(2)}
            </span>
          </div>

          <div className="flex flex-col divide-y divide-border ">
            {transactions
              .filter((item) => item.type === "expense")
              .map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center gap-2 py-4"
                >
                  <div className="flex-1 min-w-0">
                    <TransactionEntry {...transaction} />
                  </div>

                  <TransactionActions
                    id={transaction.id}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                  />
                </div>
              ))}
          </div>
        </section>
      </div>
      <div className="bg-surface rounded-2xl p-6 flex justify-center items-center">
        <h3 className="md:text-2xl sm:text-xl text-lg font-semibold text-text-primary">
          Total Balance ={" "}
          <span className={`${balance >= 0 ? "text-income" : "text-expense"}`}>
            {balance >= 0 ? "+" : "-"}${balance}
          </span>
        </h3>
      </div>
    </div>
  );
}
