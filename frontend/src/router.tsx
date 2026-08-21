import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

import AuthLayout from "./pages/auth/AuthLayout";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import ForgetPasswordForm from "./components/auth/ForgetPasswordForm";

import ProtectedLayout from "./pages/ProtectedLayout";

import HomeLayout from "./pages/main/HomeLayout";
import FinanceLayout from "./pages/main/FinanceLayout";
import FitnessLayout from "./pages/main/FitnessLayout";
import AIOverviewLayout from "./pages/main/AIOverviewLayout";
import HabitsLayout from "./pages/main/HabitsLayout";
import ProfileLayout from "./pages/main/ProfileLayout";
import SettingsLayout from "./pages/main/SettingsLayout";

import FinanceOverview from "./pages/finance/FinanceOverview";
import Transactions from "./pages/finance/Transactions";
import Budgets from "./pages/finance/Budgets";
import Savings from "./pages/finance/Savings";
import Analytics from "./pages/finance/Analytics";

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
      {
        path: "/reset-password",
        element: <ForgetPasswordForm />,
      },
    ],
  },

  // Everything underneath here requires authentication
  {
    element: <ProtectedLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/finance" replace />,
      },
      {
        path: "/home",
        element: <HomeLayout />,
      },
      {
        path: "/finance",
        element: <FinanceLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="overview" replace />,
          },
          {
            path: "overview",
            element: <FinanceOverview />,
          },
          {
            path: "transactions",
            element: <Transactions />,
          },
          {
            path: "budgets",
            element: <Budgets />,
          },
          {
            path: "savings",
            element: <Savings />,
          },
          {
            path: "analytics",
            element: <Analytics />,
          },
        ],
      },
      {
        path: "/fitness",
        element: <FitnessLayout />,
      },
      {
        path: "/habits",
        element: <HabitsLayout />,
      },
      {
        path: "/ai-overview",
        element: <AIOverviewLayout />,
      },
      {
        path: "/settings",
        element: <SettingsLayout />,
      },
      {
        path: "/profile",
        element: <ProfileLayout />,
      },
    ],
  },
]);
