export type TransactionType = "income" | "expense";

export type TransactionCategory =
  | "Food"
  | "Transport"
  | "Entertainment"
  | "Bills"
  | "Shopping"
  | "Other"
  | "Income";

  //Configuration issues don't allow enums

export interface TransactionRowProps {
  id: string;
  icon: string;
  name: string;
  amount: number;
  type: TransactionType;
  date: Date;
  category: TransactionCategory;
}
export interface TransactionActionsProps {
  id: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}
