import { useState } from "react";
import EmojiPicker, { type EmojiClickData } from "emoji-picker-react";
import { X, ChevronDown } from "lucide-react";

import type {
  TransactionCategory,
  TransactionType,
} from "../../../types/Transaction";

interface AddTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddTransactionModal({
  isOpen,
  onClose,
}: AddTransactionModalProps) {
  const [type, setType] = useState<TransactionType>("expense");
  const [icon, setIcon] = useState("🎬");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const [category, setCategory] =
    useState<TransactionCategory>("Entertainment");

  const [date, setDate] = useState("2026-08-20");

  const categories: TransactionCategory[] = [
    "Food",
    "Transport",
    "Entertainment",
    "Bills",
    "Shopping",
    "Other",
    "Income",
  ];

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setIcon(emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      type,
      icon,
      amount: Number(amount),
      description,
      category,
      date: new Date(date),
    });
  };

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4
        transition-all duration-200
        ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }
      `}
    >
      {/* Overlay */}
      <div onClick={onClose} className="absolute inset-0 bg-black/50" />

      {/* Modal */}
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
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-text-primary">
            Add Transaction
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="cursor-pointer rounded-full p-2 hover:bg-surface-muted"
          >
            <X size={20} color="red" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Type */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-primary">
              Type
            </label>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setType("income")}
                className={`
                  flex-1 rounded-xl border p-3
                  font-medium transition
                  ${
                    type === "income"
                      ? "border-income bg-income/10 text-income"
                      : "border-surface-muted text-text-secondary hover:bg-surface-muted"
                  }
                `}
              >
                Income
              </button>

              <button
                type="button"
                onClick={() => setType("expense")}
                className={`
                  flex-1 rounded-xl border p-3
                  font-medium transition
                  ${
                    type === "expense"
                      ? "border-expense bg-expense/10 text-expense"
                      : "border-surface-muted text-text-secondary hover:bg-surface-muted"
                  }
                `}
              >
                Expense
              </button>
            </div>
          </div>

          {/* Icon */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-text-primary">
              Icon
            </label>

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowEmojiPicker((prev) => !prev)}
                className="
                  flex h-14 w-14 cursor-pointer
                  items-center justify-center
                  rounded-xl border border-surface-muted
                  bg-background text-2xl
                  hover:bg-surface-muted
                "
              >
                {icon}
              </button>

              {showEmojiPicker && (
                <div className="absolute left-0 top-full z-20 mt-2">
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
              )}
            </div>
          </div>

          {/* Amount */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="amount"
              className="text-sm font-medium text-text-primary"
            >
              Amount
            </label>

            <div className="flex items-center rounded-xl border border-surface-muted bg-background px-4">
              <span className="text-text-secondary">$</span>

              <input
                id="amount"
                type="number"
                min="0"
                step="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="
                  w-full bg-transparent p-3
                  text-text-primary outline-none
                  no-spinner
                "
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-sm font-medium text-text-primary"
            >
              Description
            </label>

            <input
              id="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Movie tickets"
              className="
                rounded-xl border border-surface-muted
                bg-background p-3
                text-text-primary outline-none
                focus:border-text-secondary
              "
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="category"
              className="text-sm font-medium text-text-primary"
            >
              Category
            </label>

            <div className="relative">
              <select
                id="category"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value as TransactionCategory)
                }
                className="
                  w-full appearance-none
                  rounded-xl border border-surface-muted
                  bg-background p-3 pr-10
                  text-text-primary outline-none
                "
              >
                {categories
                  .filter((item) =>
                    type === "income" ? item === "Income" : item !== "Income",
                  )
                  .map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
              </select>

              <ChevronDown
                size={18}
                className="
                  pointer-events-none
                  absolute right-3 top-1/2
                  -translate-y-1/2
                "
              />
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="date"
              className="text-sm font-medium text-text-primary"
            >
              Date
            </label>

            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="
                w-full rounded-xl
                border border-surface-muted
                bg-background p-3
                text-text-primary outline-none
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              mt-2 w-full rounded-xl
              bg-primary p-3
              font-semibold text-white
              transition hover:opacity-90
              cursor-pointer
            "
          >
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
}
