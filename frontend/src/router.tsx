import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "./pages/auth/AuthLayout";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";

// import ProtectedLayout from "./layouts/ProtectedLayout";
// import Home from "./pages/home/Home";

// import FinanceLayout from "./pages/finance/FinanceLayout";
// import FinanceOverview from "./pages/finance/overview/FinanceOverview";
// import Transactions from "./pages/finance/transactions/Transactions";
// import Budgets from "./pages/finance/budgets/Budgets";
// import Savings from "./pages/finance/savings/Savings";
// import Analytics from "./pages/finance/analytics/Analytics";

export const router = createBrowserRouter([
  // Authentication routes
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/signup",
        element: <SignUpForm />,
      },
    ],
  },

  // Everything underneath here requires authentication
  {
    // element: <ProtectedLayout />,
    children: [
      {
        path: "/",
        // element: <Home />,
      },
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
