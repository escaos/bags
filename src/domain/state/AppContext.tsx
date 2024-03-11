import { useTotals } from "../../services/hooks/useTotals";
import {
  PropsWithChildren,
  createContext,
  memo,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ProviderProps = PropsWithChildren;
interface Props {
  isLoading: boolean;
}

const Context = createContext<Props | undefined>(undefined);

const Provider = ({ children }: ProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  useTotals();

  // Mounted
  useEffect(() => {
    setIsLoading(false);

    return () => {
      setIsLoading(true);
    };
  }, []);

  const values = useMemo(() => ({ isLoading }), [isLoading]);

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const AppProvider = memo(Provider);

export const useAppContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};
