import { StateCreator } from "zustand";

export interface ITotals {
  minMonthlyPayment: number;
  totalDebt: number;
}

type State = {
  totals?: ITotals;
};

type Actions = {
  totalsActions: {
    setTotals: (totals: ITotals) => void;
    clearTotals: () => void;
  };
};

export type TotalsSlice = State & Actions;

export const createTotalsSlice: StateCreator<TotalsSlice> = (set) => {
  return {
    totalsActions: {
      setTotals: (totals: ITotals) => set(() => ({ totals })),
      clearTotals: () => set(() => ({ totals: undefined })),
    },
  };
};
