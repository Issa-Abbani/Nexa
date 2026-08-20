/*
===================================================================================
Note that this component will also be used in the Transactions tab!               |
===================================================================================
*/

import type { TransactionRowProps } from "../../../types/Transaction";

export default function TransactionEntry(props: TransactionRowProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span>{props.icon}</span>

        <div className="flex flex-col">
          <span className="text-text-primary">{props.name}</span>
          <span className="text-text-secondary">
            {props.date.toDateString()} · {props.category}
          </span>
        </div>
      </div>

      <span
        className={`${props.type === "expense" ? "text-expense" : "text-income"}`}
      >
        {props.type === "expense" ? "-" : ""} ${props.amount}
      </span>
    </div>
  );
}
