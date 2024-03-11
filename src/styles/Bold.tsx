import { Text } from "@chakra-ui/react";
import { ComponentProps } from "react";

export const Bold = ({ children, ...props }: ComponentProps<typeof Text>) => {
  return (
    <Text as="span" {...props} fontWeight="bold">
      {children}
    </Text>
  );
};
