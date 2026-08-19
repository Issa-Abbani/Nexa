import type { TransactionCategory } from "./Transaction";

export interface BudgetEntryProps {
  category: TransactionCategory;
  spent: number;
  limit: number;
}