import { NavLink } from "react-router-dom";
import {
  House,
  Wallet,
  Dumbbell,
  ListChecks,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", to: "/home", Icon: House },
  { label: "Finance", to: "/finance", Icon: Wallet },
  { label: "Fitness", to: "/fitness", Icon: Dumbbell },
  { label: "Habits", to: "/habits", Icon: ListChecks },
  { label: "AI", to: "/ai-overview", Icon: Sparkles },
];

export default function MobileNavigation() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 px-2 py-2 backdrop-blur-sm lg:hidden">
      <div className="flex items-center justify-around">
        {navItems.map(({ label, to, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className="relative flex min-w-16 flex-col items-center gap-1 rounded-lg px-3 py-2 text-xs font-medium text-text-secondary"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-active"
                    className="absolute inset-0 rounded-lg bg-primary/10"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}

                <Icon
                  size={21}
                  strokeWidth={2}
                  className={`relative z-10 ${
                    isActive ? "text-primary" : ""
                  }`}
                />

                <span
                  className={`relative z-10 ${
                    isActive ? "text-primary" : "hidden"
                  }`}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}