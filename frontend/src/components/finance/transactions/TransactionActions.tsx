import { Pencil, Trash2 } from "lucide-react";
import type { TransactionActionsProps } from "../../../types/Transaction";
export default function TransactionActions({
  id,
  onEdit,
  onDelete,
}: TransactionActionsProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => onEdit(id)}
        aria-label="Edit transaction"
        className="cursor-pointer"
      >
        <Pencil size={18} color="white" />
      </button>

      <button
        onClick={() => onDelete(id)}
        aria-label="Delete transaction"
        className="cursor-pointer"
      >
        <Trash2 size={18} color="red"/>
      </button>
    </div>
  );
}