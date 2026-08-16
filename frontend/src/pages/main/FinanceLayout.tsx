import { Outlet } from "react-router-dom";

export default function FinanceLayout() {
  return( 
  <section>
    <h1 className="text-text-primary text-5xl">Finance</h1>

    <Outlet/>
  </section>
  );

}