import { Box, Divider, Heading, VStack, Text } from "@chakra-ui/react";

import styles from "./BusinessCard.module.scss";

export const BusinessCard = () => {
  const handleClick = () => {
    console.log("Talk to Funding Coach");
  };

  return (
    <VStack className={styles.container}>
      <Heading as="h1" size="sm" className={styles.title}>
        Your Business Health
      </Heading>
      <Divider />
      <Box>
        <Text>YOUR GOAL</Text>
        To secure a loan
      </Box>
    </VStack>
  );
};
