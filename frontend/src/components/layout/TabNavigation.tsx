import type { TabNavigationProps } from "../../types/TabNav";
import { NavLink } from "react-router-dom";

export default function TabNavigation({ tabs }: TabNavigationProps) {
  return (
    <div className="w-3/4 md:w-full md:pr-0 pr-[100vw] overflow-x-auto md:overflow-x-hidden no-scrollbar">
        <nav className="flex w-max md:w-full gap-10 border-b-2 mb-5 text-xl text-primary">
          {tabs.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className="shrink-0 whitespace-nowrap"
            >
              {label}
            </NavLink>
          ))}
        </nav>
    </div>
  );
}