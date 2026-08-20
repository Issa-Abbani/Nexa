import { Wallet } from "lucide-react";
import type { IBalanceCard } from "../../types/Card";

export default function BalanceCard(props: IBalanceCard) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-5 shadow-sm cursor-pointer transition duration-300 ease-in hover:scale-[1.02] hover:bg-surface-muted">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-text-primary">Total Balance</h2>

        <div className="text-text-primary">
          <Wallet/>
        </div>
      </div>

      <div className="text-3xl font-semibold text-text-primary">
        ${props.balance.toLocaleString()}
      </div>

      <div className="flex items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-2">
          <span className={props.change > 0 ? "text-income" : "text-expense"}>
            ●
          </span>

          <span className="text-text-secondary">
            <span className={props.change > 0 ? "text-income" : "text-expense"}>
              {props.change > 0 ? "+" : ""}
              {props.change}%
            </span>{" "}
            vs. last month
          </span>
        </div>

        <span className="text-text-secondary">
          {props.changeAmount > 0 ? "+" : ""}$
          {props.changeAmount.toLocaleString()} this month
        </span>
      </div>
    </div>
  );
}
