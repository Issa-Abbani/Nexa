import { Pencil, Trash2 } from "lucide-react";
import type { TransactionActionsProps } from "../../../types/Transaction";
import { EllipsisVertical } from "lucide-react";
export default function TransactionActions({
  id,
  // onEdit,
  // onDelete,
  activeDropdown,
  setActiveDropdown,
  setEdit,
  setDelete
}: TransactionActionsProps) {
  const isOpen = activeDropdown === id;
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={()=>{
          console.log("Editted")
          setEdit()
        }}
        aria-label="Edit transaction"
        className="cursor-pointer hidden md:block"
      >
        <Pencil size={18} color="white" />
      </button>

      <button
        onClick={setDelete}
        aria-label="Delete transaction"
        className="cursor-pointer hidden md:block"
      >
        <Trash2 size={18} color="red" />
      </button>
      <div className="relative flex md:hidden">
        <button
          className="cursor-pointer focus:bg-surface-muted active:bg-surface-muted rounded-2xl p-1.5"
          onClick={() => {
            setActiveDropdown(isOpen ? null : id);
          }}
        >
          <EllipsisVertical size={18} color="white" />
        </button>

        {isOpen && (
          <>
            <div
              onClick={() => setActiveDropdown(null)}
              className="fixed inset-0 z-40"
            />

            <div className="absolute right-0 top-full z-50 mt-2 w-max rounded-lg border border-surface-muted bg-surface p-1">
              <button
                onClick={setEdit}
                className="flex cursor-pointer items-center gap-2 rounded-md p-2 text-text-primary hover:bg-surface-muted"
              >
                <Pencil size={18} />
                Edit
              </button>

              <button
                onClick={setDelete}
                className="flex cursor-pointer items-center gap-2 rounded-md p-2 text-expense hover:bg-surface-muted"
              >
                <Trash2 size={18} color="red" />
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
