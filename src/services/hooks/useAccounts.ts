// hooks/useRevenue.ts
import { useEffect } from "react";

import { IAccounts } from "../../domain/slices/Accounts.slice";
import { useStore } from "../../domain/state/store";

const DEFAULT_ACCOUNTS: IAccounts = {
  bankAccounts: [
    { bankName: "Chase", balance: 1000 },
    { bankName: "Bank of America", balance: 2000 },
    { bankName: "Wells Fargo", balance: 3000 },
  ],
  creditCards: [
    {
      cardName: "Chase",
      creditLimit: 10000,
      balance: 1000,
      interestRate: 0.15,
      minPayment: 25,
      paymentDate: "2021-07-01",
    },
    {
      cardName: "Discover",
      creditLimit: 5000,
      balance: 2000,
      interestRate: 0.2,
      minPayment: 25,
      paymentDate: "2021-07-01",
    },
    {
      cardName: "Capital One",
      creditLimit: 3000,
      balance: 3000,
      interestRate: 0.25,
      minPayment: 25,
      paymentDate: "2021-07-01",
    },
  ],
  loans: [
    {
      name: "Car Loan",
      type: "Auto",
      monthlyPayment: 300,
      remainingBalance: 10000,
      paymentDate: "2021-07-01",
    },
    {
      name: "Student Loan",
      type: "Education",
      monthlyPayment: 200,
      remainingBalance: 20000,
      paymentDate: "2021-07-01",
    },
  ],
};

export const useAccounts = () => {
  const { accounts, actions } = useStore((state) => ({
    accounts: state.accounts,
    actions: state.accountsActions,
  }));

  useEffect(() => {
    if (!accounts) {
      actions.setAccounts({ ...DEFAULT_ACCOUNTS });
    }
  }, [accounts, actions]);

  return {
    accounts,
    actions,
  };
};
