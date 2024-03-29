import {
  IconButton,
  IconButtonProps,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

import Icon from "../assets/Icon";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");

  return (
    <Tooltip label={`Change  color mode to ${text}`}>
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<Icon name={text === "dark" ? "Moon" : "Sun"} />}
        aria-label={`Switch to ${text} mode`}
        {...props}
      />
    </Tooltip>
  );
};
