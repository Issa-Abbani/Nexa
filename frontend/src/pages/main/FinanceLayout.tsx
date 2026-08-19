import { Outlet } from "react-router-dom";
import TabNavigation from "../../components/layout/TabNavigation";
import MobileHamburgerTabNav from "../../components/layout/MobileHamburgerTabNav";
import type { Tab } from "../../types/TabNav";

export default function FinanceLayout() {
  const navTabs: Tab[] = [
    { label: "Overview", path: "/finance/overview" },
    { label: "Transactions", path: "/finance/transactions" },
    { label: "Budgets", path: "/finance/budgets" },
    { label: "Savings", path: "/finance/savings" },
    { label: "Analytics", path: "/finance/analytics" },
  ];

  return (
    <section className="">
      <div className="flex justify-between mb-10">
        <h1 className="text-text-primary lg:text-6xl text-4xl font-nexa">Finance</h1>
        <div className="block lg:hidden fixed right-3 top-3 z-50">
          <MobileHamburgerTabNav tabs={navTabs} title="Finance" />
        </div>
      </div>
      <div className="hidden md:block">
        <TabNavigation tabs={navTabs} />
      </div>
      <Outlet />
    </section>
  );
}
