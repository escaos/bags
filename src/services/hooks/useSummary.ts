// hooks/useRevenue.ts
import { useEffect } from "react";
import { useStore } from "../../domain/state/store";

export const useSummary = () => {
  const { summary, actions } = useStore((state) => ({
    summary: state.summary,
    actions: state.summaryActions,
  }));

  useEffect(() => {
    if (!summary) {
      actions.setSummary({
        maxLoan: 100000,
        range: [1000, 100000],
        rangeType: "days",
        goal: "Purchase Equipment",
        eligibilityPercentage: 100,
        creditScore: { value: 600, level: "warning" },
        profit: { value: 1000, level: "success" },
        monthlyRevenue: { value: 14000, level: "success" },
      });
    }
  }, [actions, summary]);

  return {
    summary,
    actions,
  };
};
