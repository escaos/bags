// Routes.tsx
import { useRoutes } from "react-router-dom";
import { ProtectedRoute } from "../routes/ProtectedRoute";
import {
  LoginPage,
  DashboardPage,
  DocumentsPage,
  NotFoundPage,
} from "../pages";
import { PublicRoute } from "./PublicRoute";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/login",
      element: (
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      ),
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        { path: "dashboard", element: <DashboardPage /> },
        { path: "pages", element: <DocumentsPage /> },
      ],
    },
    { path: "*", element: <NotFoundPage /> },
  ]);

  return routes;
};

export default AppRoutes;
