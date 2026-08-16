export default function MobileNavigation() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 border-t border-border bg-surface p-4">
      <div className="flex justify-around">
        <button>🏠</button>
        <button>💰</button>
        <button>🏋</button>
        <button>✓</button>
        <button>🤖</button>
      </div>
    </nav>
  );
}