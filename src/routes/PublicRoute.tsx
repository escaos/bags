// components/PublicRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../domain/state/AuthContext";
import { PropsWithChildren, ReactElement } from "react";

export const PublicRoute = ({
  children,
}: PropsWithChildren): ReactElement | null => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
