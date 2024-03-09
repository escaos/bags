// components/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../state/AuthContext";
import { Layout } from "../pages/Layout";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
