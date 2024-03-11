import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useRevenue } from "../services/hooks/useRevenue";
import { IRevenueItem } from "../domain/slices/Revenue.slice";
import { Box, Text } from "@chakra-ui/react";

export const RevenueChart = () => {
  const { revenueItems } = useRevenue();

  if (!revenueItems) return null;

  const revenueItemsArray = Object.values(revenueItems);

  const formatLabel = (item: IRevenueItem) => {
    return item.percentage !== 0
      ? `${item.label} +${(item.percentage * 100).toFixed(0)}%`
      : item.label;
  };

  const flattenedData = revenueItemsArray.flatMap((item) =>
    item.growthYear.map((growth) => ({
      ...growth,
      monthYear: `${growth.month}/${growth.year}`, // Adjust format if needed
      label: formatLabel(item),
    }))
  );

  const formatYAxis = (tickItem: number) => {
    return `${tickItem / 1000}K`;
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  if (flattenedData.length === 0) {
    return (
      <Box
        width="100%"
        height="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="lg">No Data</Text>
      </Box>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={flattenedData}
        margin={{
          top: 5,
          right: 30, // Adjust right margin if needed
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="monthYear" />
        <YAxis tickFormatter={formatYAxis} />
        <Tooltip />
        <Legend align="left" verticalAlign="top" />
        {revenueItemsArray.map((item, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey="growth"
            data={item.growthYear}
            name={formatLabel(item)}
            stroke={getRandomColor()} // Random color for each line
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
