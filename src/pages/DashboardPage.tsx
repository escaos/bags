import { Grid, GridItem, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { CardTotals } from "../components/CardTotals";
import { useAuthContext } from "../domain/state/AuthContext";
import { BusinessCard } from "../components/BusinessCard";
import { RevenueChart } from "../components/RevenueChart";

export const DashboardPage = () => {
  const { name } = useAuthContext();

  return (
    <Grid
      templateAreas={`"header header header header"
                  "banner banner banner business"
                  "totals revenue revenue business"
                  "table table table table"`}
      gridTemplateColumns={"1fr 1fr 1fr 1fr"}
      gap="var(--chakra-space-4)"
      color="blackAlpha.700"
      w="100%"
    >
      <GridItem area={"header"} display="flex" flexDir={"row"} gap="0.5rem">
        <Text>Welcome </Text>
        <Text fontWeight="bold">{name}</Text>
      </GridItem>
      <GridItem area={"banner"}>
        <Banner />
      </GridItem>
      <GridItem area={"revenue"}>
        <RevenueChart />
      </GridItem>
      <GridItem area={"totals"}>
        <CardTotals />
      </GridItem>
      <GridItem area={"business"}>
        <BusinessCard />
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"table"}>
        Table
      </GridItem>
    </Grid>
  );
};
