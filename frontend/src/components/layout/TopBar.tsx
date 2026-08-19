import { NavLink } from "react-router-dom";
import { Settings, User, ChevronDown } from "lucide-react";
import logo from "../../assets/Logos/nexaLogo.svg";

export default function TopBar() {
  return (
    <header className="fixed right-0 left-0 flex h-16 items-center justify-between border-b border-border bg-surface px-4 z-10">
      <NavLink
        to="/home"
        className="flex items-center gap-2 rounded-md transition-opacity hover:opacity-80 cursor-pointer"
      >
        <img
          className="h-9 w-9"
          src={logo}
          alt="Nexa"
        />

        <span className="font-nexa text-2xl text-primary">
          NEXA
        </span>
      </NavLink>

      <div className="items-center gap-2 text-text-primary hidden lg:flex">
        <NavLink
          to="/settings"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-muted hover:text-text-primary"
        >
          <Settings size={18} />

          <span className="hidden lg:inline">
            Settings
          </span>
        </NavLink>

        <button
          className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-muted hover:text-text-primary"
        >
          <User size={18} />

          <span className="hidden lg:inline">
            Username Placeholder
          </span>

          <ChevronDown size={16} />
        </button>
      </div>
    </header>
  );
}