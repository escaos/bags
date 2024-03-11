// hooks/useRevenue.ts
import { useEffect } from "react";
import { useStore } from "../../domain/state/store";

export const useTotals = () => {
  const { totals, actions } = useStore((state) => ({
    totals: state.totals,
    actions: state.totalsActions,
  }));

  useEffect(() => {
    if (!totals) {
      actions.setTotals({
        minMonthlyPayment: 3299.59,
        totalDebt: 121974.06,
      });
    }
  }, [actions, totals]);

  return {
    totals,
    actions,
  };
};
