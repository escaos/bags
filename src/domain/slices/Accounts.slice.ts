import { StateCreator } from "zustand";

export interface IAccount {
  bankName: string;
  balance: number;
}

export interface ICreditCard {
  cardName: string;
  creditLimit: number;
  balance: number;
  interestRate: number;
  minPayment: number;
  paymentDate: string;
}

export interface ILoan {
  name: string;
  type: string;
  monthlyPayment: number;
  remainingBalance: number;
  paymentDate: string;
}

export interface IAccounts {
  bankAccounts: IAccount[];
  creditCards: ICreditCard[];
  loans: ILoan[];
}

type State = {
  accounts?: IAccounts;
};

type Actions = {
  accountsActions: {
    setAccounts: (accounts: IAccounts) => void;
    clearAccounts: () => void;
  };
};

export type AccountsSlice = State & Actions;

export const createAccountsSlice: StateCreator<AccountsSlice> = (set) => {
  return {
    accountsActions: {
      setAccounts: (accounts: IAccounts) => set(() => ({ accounts })),
      clearAccounts: () => set(() => ({ accounts: undefined })),
    },
  };
};
