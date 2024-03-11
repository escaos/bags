// store.ts
import { create } from "zustand";

import { createTotalsSlice, TotalsSlice } from "../slices/Totals.slice";
import { createSummarySlice, SummarySlice } from "../slices/Summary.slice";
import { createRevenueSlice, RevenueSlice } from "../slices/Revenue.slice";
import { createAccountsSlice, AccountsSlice } from "../slices/Accounts.slice";
import {
  createDocumentsSlice,
  DocumentsSlice,
} from "../slices/Documents.slice";

type Store = TotalsSlice &
  SummarySlice &
  RevenueSlice &
  AccountsSlice &
  DocumentsSlice;

export const useStore = create<Store>()((...a) => ({
  ...createTotalsSlice(...a),
  ...createSummarySlice(...a),
  ...createRevenueSlice(...a),
  ...createAccountsSlice(...a),
  ...createDocumentsSlice(...a),
}));

export type IStore = ReturnType<typeof useStore>;
