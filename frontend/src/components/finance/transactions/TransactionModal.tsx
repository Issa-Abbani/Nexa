import type {
  TransactionModalProps,
} from "../../../types/Transaction";
import AddTransactionModal from "./AddTransactionModal";
import EditTransactionModal from "./EditTransactionModal";
import DeleteTransactionModal from "./DeleteTransactionModal"

export default function TransactionModal({
  isOpen,
  onClose,
  transactionAction,
}: TransactionModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-200 ${isOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}`}
    >
      <div onClick={onClose} className="absolute inset-0 bg-black/50"></div>
      <div
        className={`
        relative z-10 w-full max-w-lg
        max-h-[90dvh] overflow-y-auto
        rounded-2xl bg-surface p-4 sm:p-6
        shadow-xl mb-15 md:mb-0
          transition-all duration-200 ease-out
          ${isOpen ? "translate-y-0 scale-100" : "translate-y-4 scale-95"}
        `}
      >
        {transactionAction === "add" && <AddTransactionModal onClose={onClose} />}
        {transactionAction === "edit" && <EditTransactionModal onClose={onClose} />}
        {transactionAction === "delete" && <DeleteTransactionModal onClose={onClose} />}
      </div>
    </div>
  );
}
