import {
  Box,
  Card,
  CardBody,
  Divider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useTotals } from "../services/hooks/useTotals";
import styles from "./CardTotals.module.scss";
import { formatCurrency } from "../lib/amountUtils";

export const CardTotals = () => {
  const { totals } = useTotals();

  return (
    <Card className={styles.card}>
      <CardBody>
        <Tabs variant="app-red" h="100%">
          <TabList gap="0.5rem">
            <Tab>Debt</Tab>
            <Tab>Payments</Tab>
          </TabList>
          <TabPanels h="80%">
            <TabPanel className={styles.tab}>
              <Box>
                <span>Total Debt</span>
                <Divider m="0.5rem 0" />
                <span>{formatCurrency(totals?.totalDebt)}</span>
              </Box>
            </TabPanel>
            <TabPanel className={styles.tab}>
              <Box>
                <span>Total Minimum Monthly Payment</span>
                <Divider m="0.5rem 0" />
                <span>{formatCurrency(totals?.minMonthlyPayment)}</span>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CardBody>
    </Card>
  );
};
