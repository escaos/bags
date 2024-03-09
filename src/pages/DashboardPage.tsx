import { useAuthContext } from "../state/AuthContext";
import { Button } from "@chakra-ui/react";

export const DashboardPage = () => {
  const { logout } = useAuthContext();

  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};
