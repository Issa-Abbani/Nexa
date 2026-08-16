export default function TopBar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-surface px-6">
      <div className="font-bold text-xl text-primary">
        NEXA
      </div>

      <div className="flex items-center gap-6">
        <button>⚙ Settings</button>
        <button>👤 User ▾</button>
      </div>
    </header>
  );
}