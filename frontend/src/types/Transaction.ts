  //Transaction Entry props

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

//Edit and Delete props
export interface TransactionActionsProps {
  id: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  activeDropdown: string | null;
  setActiveDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  setEdit: ()=>void;
  setDelete: ()=>void;
  entry?: TransactionRowProps;
}


//Transaction Table props
export interface TableModificationProps {
  onOpenEdit: ()=>void;
  onOpenDelete: ()=>void;
  setTransactionType: (type:TransactionModalTypes) => void
}


//Modal props
export interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  transactionAction: TransactionModalTypes;
}

export type TransactionModalTypes = "add" | "edit" | "delete";

