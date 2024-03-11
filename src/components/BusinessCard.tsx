import {
  Box,
  Divider,
  Heading,
  VStack,
  Text,
  Progress,
} from "@chakra-ui/react";

import styles from "./BusinessCard.module.scss";
import { Bold } from "../styles/Bold";
import { useSummary } from "../services/hooks/useSummary";
import {
  formatCurrency,
  formatCurrencyShort,
  formatPercentage,
} from "../lib/amountUtils";
import { CardItem } from "./CardItem";

export const BusinessCard = () => {
  const { summary } = useSummary();

  return (
    <VStack className={styles.container}>
      <Heading as="h1" size="sm" className={styles.title}>
        Your Business Health
      </Heading>
      <Divider />
      <Box w="100%">
        <Text fontSize="var(--chakra-fontSizes-3xs)">YOUR GOAL</Text>
        <p>
          To secure a loan of <Bold>{formatCurrency(summary?.maxLoan)}</Bold> in
          the next{" "}
          <Bold>{`${summary?.range[0]} to ${summary?.range[1]} ${summary?.rangeType}`}</Bold>{" "}
          to <Bold>{summary?.goal}</Bold>.
        </p>
      </Box>
      <Box w="100%">
        <Box
          fontSize="var(--chakra-fontSizes-3xs)"
          display="flex"
          flexDir={"row"}
          justifyContent={"space-between"}
        >
          <Text>ELIGIBILITY FOR LOANS</Text>
          <Text fontSize="var(--chakra-fontSizes-3xs)">
            {formatPercentage(summary?.eligibilityPercentage)}
          </Text>
        </Box>
        <Progress
          colorScheme="green"
          size="sm"
          value={(summary?.eligibilityPercentage ?? 0) * 100}
          borderRadius={"var(--chakra-radii-md)"}
        />
      </Box>
      <Divider />
      <Text fontSize="var(--chakra-fontSizes-3xs)">
        FACTORS ABOUT YOUR FUNDING READINESS:
      </Text>
      <CardItem
        icon="Star"
        title={`Your credit score is below ${summary?.creditScore?.value}`}
        subtitle={`Lenders usually require a score over ${summary?.creditScore?.value}`}
        level={summary?.creditScore?.level ?? "info"}
      />
      <CardItem
        icon="GraphUp"
        title="You are profitable."
        subtitle={`Your current monthly profit is ${formatCurrency(
          summary?.profit?.value
        )}`}
        level={summary?.profit?.level ?? "info"}
      />
      <CardItem
        icon="MoneyBill"
        title={`Your Monthly Revenue is above ${formatCurrencyShort(
          summary?.monthlyRevenue?.value
        )}`}
        subtitle={`Loans usually require over ${formatCurrencyShort(
          summary?.monthlyRevenue?.value
        )} monthly revenue.`}
        level={summary?.monthlyRevenue?.level ?? "info"}
      />
    </VStack>
  );
};
