import { StateCreator } from "zustand";

export interface GrowthYear {
  month: number;
  year: number;
  growth: number;
}

export interface IRevenueItem {
  label: string;
  percentage: number;
  growthYear: GrowthYear[];
}

type State = {
  revenueItems?: IRevenueItem[];
};

type Actions = {
  revenueActions: {
    setRevenue: (revenueItems: IRevenueItem[]) => void;
    clearRevenue: () => void;
  };
};

export type RevenueSlice = State & Actions;

export const createRevenueSlice: StateCreator<RevenueSlice> = (set) => {
  return {
    revenueActions: {
      setRevenue: (revenueItems: IRevenueItem[]) =>
        set(() => ({ revenueItems })),
      clearRevenue: () => set(() => ({ revenueItems: undefined })),
    },
  };
};
