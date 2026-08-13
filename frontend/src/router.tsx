import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";

// import ProtectedLayout from "./layouts/ProtectedLayout";
// import Home from "./pages/home/Home";

// import FinanceLayout from "./pages/finance/FinanceLayout";
// import FinanceOverview from "./pages/finance/overview/FinanceOverview";
// import Transactions from "./pages/finance/transactions/Transactions";
// import Budgets from "./pages/finance/budgets/Budgets";
// import Savings from "./pages/finance/savings/Savings";
// import Analytics from "./pages/finance/analytics/Analytics";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    // element: <Register />,
  },

  // Everything underneath here requires authentication
  {
    // element: <ProtectedLayout />,
    children: [
      {
        path: "/home",
        // element: <Home />,
      },
      {
        path: "/finance",
        // element: <FinanceLayout />,
        children: [
          {
            path: "overview",
            // element: <FinanceOverview />,
          },
          {
            path: "transactions",
            // element: <Transactions />,
          },
          {
            path: "budgets",
            // element: <Budgets />,
          },
          {
            path: "savings",
            // element: <Savings />,
          },
          {
            path: "analytics",
            // element: <Analytics />,
          },
        ],
      },
    ],
  },
]);