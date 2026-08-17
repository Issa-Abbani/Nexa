import { Outlet } from "react-router-dom";
import TabNavigation from "../../components/layout/TabNavigation";
import type { Tab } from "../../types/TabNav";

export default function FinanceLayout() {
  const navTabs: Tab[] = [
    { label: "Overview", path: "/finance/overview" },
    { label: "Transactions", path: "/finance/transactions" },
    { label: "Budgets", path: "/finance/budgets" },
    { label: "Savings", path: "/finance/savings" },
    { label: "Analytics", path: "/finance/analytics" },
  ]
    
  return( 
  <section className="">
    <h1 className="text-text-primary lg:text-6xl text-4xl font-nexa mb-5">Finance</h1>
    <TabNavigation tabs={navTabs} />
    <Outlet/>
  </section>
  );

}