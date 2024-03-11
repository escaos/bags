import Icon, { IconNames } from "../assets/Icon";
import { Level } from "../domain/types/common";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

type Props = {
  icon: IconNames;
  title: string;
  subtitle: string;
  level: Level;
};

export const CardItem = ({ icon, title, subtitle, level }: Props) => {
  const bgColor: Record<Level, string> = {
    failure: "red.100",
    warning: "orange.50",
    info: "blue.100",
    success: "green.100",
  };

  const borderColor: Record<Level, string> = {
    failure: "red.600",
    warning: "orange.500",
    info: "blue.600",
    success: "green.600",
  };

  return (
    <Box
      bg={bgColor[level]}
      borderColor={borderColor[level]}
      borderWidth="1px"
      p="4"
      rounded="md"
      display={"flex"}
      flexDirection="row"
      gap={"var(--chakra-space-2)"}
      fontSize={"var(--chakra-fontSizes-3xs)"}
    >
      <Box
        color={borderColor[level]}
        h="100%"
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <Icon name={icon} style={{ fontSize: "1.1rem" }} />
      </Box>
      <Box>
        <Text fontWeight="bold" fontSize={"var(--chakra-fontSizes-3xs)"}>
          {title}
        </Text>
        <Text>{subtitle}</Text>
      </Box>
    </Box>
  );
};
