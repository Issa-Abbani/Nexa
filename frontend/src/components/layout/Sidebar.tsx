export default function Sidebar() {
  return (
    <aside className="lg:flex hidden min-h-[calc(100vh-4rem)] w-56 flex-col border-r border-border bg-surface p-4">
      <div className="mb-8 font-bold text-xl text-primary">
        NEXA
      </div>

      <nav className="flex flex-col gap-2">
        <button>🏠 Home</button>
        <button>💰 Finance</button>
        <button>🏋 Fitness</button>
        <button>✓ Habits</button>
        <button>🤖 AI Assistance</button>
      </nav>

      <button className="mt-auto">
        Logout
      </button>
    </aside>
  );
}