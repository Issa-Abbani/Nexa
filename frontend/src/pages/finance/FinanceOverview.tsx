import SummaryCard from "../../components/finance/SummaryCard";
import BalanceCard from "../../components/finance/BalanceCard";
import IncomeExpenseChart from "../../components/finance/IncomeExpenseChart";
import SpendingCategoryChart from "../../components/finance/SpendingCategoryChart";

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
    <div className="flex flex-col justify-center  mb-15">
      {/* Header */}
      <div className="flex justify-between items-baseline mb-5">
        <h2 className="text-text-primary lg:text-5xl text-3xl">Overview</h2>
        <span className="text-2xl text-text-primary">This month</span>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 gap-2 md:gap4 md:grid-cols-12 w-full mb-3 self-center">
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
      <div className="grid grid-cols-1 gap-4 md:gap4 md:grid-cols-12 w-full mb-3 self-center">
        <div className="col-span-1 md:col-span-12 xl:col-span-6 lg:col-span-12">
          <IncomeExpenseChart />
        </div>
        <div className="col-span-1 md:col-span-12 xl:col-span-6 lg:col-span-12">
          <SpendingCategoryChart />
        </div>
      </div>

      {/* Transactions */}
      <div>{/* Recent Transactions */}</div>

      {/* Budgets + Savings */}
      <div>{/* Budget Progress + Savings Goals */}</div>
    </div>
  );
}
