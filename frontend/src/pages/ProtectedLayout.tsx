import { Outlet } from "react-router-dom";
import TopBar from "../components/layout/TopBar";
import Sidebar from "../components/layout/Sidebar";
import MobileNavigation from "../components/layout/MobileNavigation";
export default function ProtectedLayout() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <TopBar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 lg:ml-70 mt-20 p-5">
          <Outlet />
        </main>
      </div>

      <MobileNavigation />
    </div>
  );
}