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

type ProviderProps = PropsWithChildren;
interface Props {
  isLoading: boolean;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const Context = createContext<Props | undefined>(undefined);

const Provider = ({ children }: ProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
  }, []);

  // Mounted
  useEffect(() => {
    setIsLoading(false);

    return () => {
      setIsAuthenticated(false);
      setIsLoading(true);
    };
  }, []);

  const values = useMemo(
    () => ({ isLoading, isAuthenticated, login, logout }),
    [isAuthenticated, isLoading, login, logout]
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
