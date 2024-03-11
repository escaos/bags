export const formatCurrency = (amount?: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount ?? 0);
};

export const formatPercentage = (
  amount?: number,
  decimals?: number
): string => {
  console.log("🚀 ~ formatPercentage ~ amount:", amount);
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: decimals ?? 0,
  }).format(amount ?? 0); // Divide the amount by 100
};

export const formatCurrencyShort = (amount?: number): string => {
  if (!amount) {
    return "$0";
  }

  if (amount >= 1000 && amount % 1000 === 0) {
    return `${(amount / 1000).toFixed(0)}K`;
  } else if (amount >= 1000 && amount % 100 === 0) {
    return `${(amount / 1000).toFixed(1)}K`;
  } else {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  }
};
