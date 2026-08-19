import type { TabNavigationProps } from "../../types/TabNav";
import { NavLink } from "react-router-dom";

export default function TabNavigation({ tabs }: TabNavigationProps) {
  return (
    <div className="overflow-x-auto no-scrollbar">
      <nav className="flex w-full gap-10 border-b-2 border-surface-muted mb-5 text-xl text-text-primary">
        {tabs.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive })=>`shrink-0 whitespace-nowrap p-1.5 transition-colors duration-150 ${isActive ? "text-primary bg-surface-muted rounded-t-lg rounded-b-none" : ""}`}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
