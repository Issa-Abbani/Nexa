import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import type { HamburgerNavigationProps } from "../../types/TabNav";


export default function MobileHamburgerTabNav({tabs, title}: HamburgerNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-text-primary"
        aria-label="Open menu"
      >
        <Menu size={26} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-surface/60 backdrop-blur-sm"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-72
          bg-background border-l border-border
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="text-2xl font-nexa text-text-primary">
            {title}
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-text-primary"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Section navigation */}
        <nav className="p-5">
          <div className="flex flex-col gap-2">
            {tabs.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-text-primary hover:bg-surface-muted"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Account actions */}
        <div className="absolute bottom-0 left-0 w-full border-t border-border p-5">
          <div className="flex flex-col gap-2 mb-15">
            <NavLink
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-text-primary hover:bg-surface-muted"
            >
              <User size={20} />
              Username
            </NavLink>

            <NavLink
              to="/settings"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-text-primary hover:bg-surface-muted"
            >
              <Settings size={20} />
              Settings
            </NavLink>

            <button
              onClick={() => {
                setIsOpen(false);
                // logout()
              }}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-expense hover:bg-surface-muted"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}