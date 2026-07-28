import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/layout/AppLayout";
import AuthLayout from "@/layout/AuthLayout";
import DashboardPage from "@/pages/DashboardPage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { ROUTES } from "@/constants/routes";
import SettingsPage from "@/pages/SettingsPage";
import IssuesPage from "@/pages/IssuesPage";
import CreateIssuesPage from "@/pages/CreateIssuesPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.SETTINGS,
        element: <SettingsPage />,
      },
      {
        path: ROUTES.DASHBOARD,
        element: <DashboardPage />,
      },
      {
        path: ROUTES.ISSUES,
        element: <IssuesPage />,
      },
      {
        path: ROUTES.CREATE_ISSUE,
        element: <CreateIssuesPage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.SIGNUP,
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
