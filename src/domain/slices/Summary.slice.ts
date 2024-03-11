import { RangeType, ValueLevel } from "../types/common";
import { StateCreator } from "zustand";

export interface ISummary {
  maxLoan: number;
  range: [number, number];
  rangeType: RangeType;
  goal: string;
  eligibilityPercentage: number;
  creditScore?: ValueLevel;
  profit?: ValueLevel;
  monthlyRevenue?: ValueLevel;
}

type State = {
  summary?: ISummary;
};

type Actions = {
  summaryActions: {
    setSummary: (summary: ISummary) => void;
  };
};

export type SummarySlice = State & Actions;

export const createSummarySlice: StateCreator<SummarySlice> = (set) => {
  return {
    summaryActions: {
      setSummary: (summary: ISummary) => set((state: State) => ({ summary })),
    },
  };
};
