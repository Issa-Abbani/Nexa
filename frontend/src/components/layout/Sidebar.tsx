import { NavLink } from "react-router-dom";
import {
  House,
  Wallet,
  Dumbbell,
  ListChecks,
  Sparkles,
  LogOut,
} from "lucide-react";

const navItems = [
  {
    label: "Home",
    to: "/home",
    icon: House,
    disabled: true,
  },
  {
    label: "Finance",
    to: "/finance",
    icon: Wallet,
    disabled: false,
  },
  {
    label: "Fitness",
    to: "/fitness",
    icon: Dumbbell,
    disabled: true,
  },
  {
    label: "Habits",
    to: "/habits",
    icon: ListChecks,
    disabled: true,
  },
  {
    label: "AI Assistance",
    to: "/ai-overview",
    icon: Sparkles,
    disabled: true,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden fixed bottom-0 min-h-[calc(100vh-4rem)] w-60 flex-col border-r border-border bg-surface px-4 py-6 lg:flex">
      <nav className="flex flex-col gap-1">
        {navItems.map(({ label, to, icon: Icon , disabled}) => (
          <NavLink
            key={to}
            to={to}
            onClick={(e) => {
              if (disabled) {
                e.preventDefault();
              }
            }}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-text-secondary hover:bg-surface-muted hover:text-text-primary"
              }`
            }
          >
            <Icon size={20} strokeWidth={2} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <button className="mt-auto flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-expense transition-colors hover:bg-expense/10">
        <LogOut size={20} strokeWidth={2} />
        <span>Logout</span>
      </button>
    </aside>
  );
}
