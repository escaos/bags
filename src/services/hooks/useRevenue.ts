// hooks/useRevenue.ts
import { useEffect } from "react";
import { useStore } from "../../domain/state/store";

const DEFAULT_REVENUE = [
  {
    label: "Current Growth",
    percentage: 0,
    growthYear: [
      {
        month: 3,
        year: 2024,
        growth: 25000,
      },
      {
        month: 4,
        year: 2024,
        growth: 25000,
      },
      {
        month: 5,
        year: 2024,
        growth: 35000,
      },
      {
        month: 6,
        year: 2024,
        growth: 45000,
      },
      {
        month: 7,
        year: 2024,
        growth: 55000,
      },
      {
        month: 8,
        year: 2024,
        growth: 65000,
      },
      {
        month: 9,
        year: 2024,
        growth: 75000,
      },
      {
        month: 10,
        year: 2024,
        growth: 85000,
      },
      {
        month: 11,
        year: 2024,
        growth: 95000,
      },
      {
        month: 12,
        year: 2024,
        growth: 105000,
      },
      {
        month: 1,
        year: 2025,
        growth: 115000,
      },
      {
        month: 2,
        year: 2025,
        growth: 125000,
      },
    ],
  },
  {
    label: "Projected Growth",
    percentage: 0.1,
    growthYear: [
      {
        month: 3,
        year: 2024,
        growth: 35000,
      },
      {
        month: 4,
        year: 2024,
        growth: 45000,
      },
      {
        month: 5,
        year: 2024,
        growth: 55000,
      },
      {
        month: 6,
        year: 2024,
        growth: 65000,
      },
      {
        month: 7,
        year: 2024,
        growth: 75000,
      },
      {
        month: 8,
        year: 2024,
        growth: 85000,
      },
      {
        month: 9,
        year: 2024,
        growth: 95000,
      },
      {
        month: 10,
        year: 2024,
        growth: 105000,
      },
      {
        month: 11,
        year: 2024,
        growth: 115000,
      },
      {
        month: 12,
        year: 2024,
        growth: 125000,
      },
      {
        month: 1,
        year: 2025,
        growth: 135000,
      },
      {
        month: 2,
        year: 2025,
        growth: 145000,
      },
    ],
  },
  {
    label: "Total Growth",
    percentage: 0.1,
    growthYear: [
      {
        month: 3,
        year: 2024,
        growth: 60000,
      },
      {
        month: 4,
        year: 2024,
        growth: 70000,
      },
      {
        month: 5,
        year: 2024,
        growth: 90000,
      },
      {
        month: 6,
        year: 2024,
        growth: 110000,
      },
      {
        month: 7,
        year: 2024,
        growth: 130000,
      },
      {
        month: 8,
        year: 2024,
        growth: 150000,
      },
      {
        month: 9,
        year: 2024,
        growth: 170000,
      },
      {
        month: 10,
        year: 2024,
        growth: 190000,
      },
      {
        month: 11,
        year: 2024,
        growth: 210000,
      },
      {
        month: 12,
        year: 2024,
        growth: 230000,
      },
      {
        month: 1,
        year: 2025,
        growth: 250000,
      },
      {
        month: 2,
        year: 2025,
        growth: 270000,
      },
    ],
  },
];

export const useRevenue = () => {
  const { revenueItems, actions } = useStore((state) => ({
    revenueItems: state.revenueItems,
    actions: state.revenueActions,
  }));

  useEffect(() => {
    if (!revenueItems) {
      actions.setRevenue({
        ...DEFAULT_REVENUE,
      });
    }
  }, [actions, revenueItems]);

  return {
    revenueItems,
    actions,
  };
};
