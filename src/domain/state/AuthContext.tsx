import {
  PropsWithChildren,
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useTotals } from "../../services/hooks/useTotals";

type ProviderProps = PropsWithChildren;
interface Props {
  isLoading: boolean;
  isAuthenticated: boolean;
  name: string;
  login: () => void;
  logout: () => void;
}

const Context = createContext<Props | undefined>(undefined);

const Provider = ({ children }: ProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { actions } = useTotals();
  const [name] = useState("Test Testos");

  const login = useCallback(() => {
    setIsAuthenticated(true);
    actions.clearTotals();
  }, [actions]);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    actions.clearTotals();
  }, [actions]);

  // Mounted
  useEffect(() => {
    setIsLoading(false);

    return () => {
      setIsAuthenticated(false);
      setIsLoading(true);
    };
  }, []);

  const values = useMemo(
    () => ({ isLoading, isAuthenticated, name, login, logout }),
    [isAuthenticated, isLoading, login, logout, name]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const AuthProvider = memo(Provider);

export const useAuthContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
};
