import { Box, Divider, IconButton, Link, VStack } from "@chakra-ui/react";
import {
  FiFileText,
  FiHome,
  FiLogOut,
  FiMenu,
  FiSettings,
} from "react-icons/fi";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const NavBar = () => {
  return (
    <VStack
      bg="gray.100"
      color="black"
      p={4}
      spacing={4}
      align="stretch"
      border="var(--chakra-colors-chakra-border-color)"
    >
      <IconButton aria-label="Settings" icon={<FiSettings />} variant="ghost" />
      <IconButton aria-label="Menu" icon={<FiMenu />} variant="ghost" />
      <Divider />
      <Link href="/dashboard">
        <Box display="flex" alignItems="center">
          <FiHome />
        </Box>
      </Link>
      <Link href="/documents">
        <Box display="flex" alignItems="center">
          <FiFileText />
        </Box>
      </Link>
      <Divider />
      <ColorModeSwitcher />
      <IconButton aria-label="Log out" icon={<FiLogOut />} variant="ghost" />
    </VStack>
  );
};
