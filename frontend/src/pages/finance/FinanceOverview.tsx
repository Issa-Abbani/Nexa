import SummaryCard from "../../components/finance/SummaryCard";
import BalanceCard from "../../components/finance/BalanceCard";

import type { ISummaryCard, IBalanceCard } from "../../types/Card";

export default function FinanceOverview() {
  const summaryCards: ISummaryCard[] = [
    {
      title: "Income",
      value: 2850,
      change: 12.3,
      type: "positive",
    },
    {
      title: "Expenses",
      value: 1420,
      change: -4.8,
      type: "negative",
    },
    {
      title: "Savings",
      value: 1430,
      change: 18.2,
      type: "positive",
    },
  ];

  const balanceData: IBalanceCard = {
    balance: 4250,
    change: 8.4,
    changeAmount: 320,
  };

  /*
  Some more text balance data
  */

  /*
  const balanceDataNegative: IBalanceCard = {
    balance: 3720,
    change: -5.6,
    changeAmount: -250,
  };
  */

  /*
  const balanceDataNeutral: IBalanceCard = {
    balance: 4000,
    change: 0,
    changeAmount: 0,
  };
  */
  return (
    <div className="flex flex-col justify-center">
      {/* Header */}
      <div>
        <h2 className="text-text-primary text-5xl">Overview</h2>
        <p>This month</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 gap-2 md:gap4 md:grid-cols-12 w-1/3 md:w-full ml-4 md:ml-0">
        <div className="col-span-1 md:col-span-12 xl:col-span-6 lg:col-span-12">
          <BalanceCard {...balanceData} />
        </div>

        {summaryCards.map((card) => (
          <div
            key={card.title}
            className="col-span-1 md:col-span-4 xl:col-span-2 lg:col-span-4"
          >
            <SummaryCard
              title={card.title}
              value={card.value}
              change={card.change}
              type={card.type}
            />
          </div>
        ))}
      </div>

      {/* Charts */}
      <div>{/* Income/Expenses + Spending Categories */}</div>

      {/* Transactions */}
      <div>{/* Recent Transactions */}</div>

      {/* Budgets + Savings */}
      <div>{/* Budget Progress + Savings Goals */}</div>
    </div>
  );
}
