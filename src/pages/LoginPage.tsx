import { useAuthContext } from "../state/AuthContext";
import { Button } from "@chakra-ui/react";

export const LoginPage = () => {
  const { login } = useAuthContext();

  return (
    <div>
      <h1>Login</h1>
      <Button onClick={login}>Login</Button>
    </div>
  );
};
