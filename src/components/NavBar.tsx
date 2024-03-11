import { Box, Divider, IconButton, Tooltip, VStack } from "@chakra-ui/react";

import { Icon } from "../assets/Icon";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import styles from "./NavBar.module.scss";
import { NavBarItem } from "./NavBarItem";
import { useAuthContext } from "../domain/state/AuthContext";

export const NavBar = () => {
  const { logout } = useAuthContext();

  return (
    <VStack className={styles.navContainer}>
      <Box display="flex" flexDirection="column">
        <IconButton
          aria-label="Logo"
          icon={<Icon name="Logo" className={styles.logo} />}
          variant="ghost"
          className={styles.iconButton}
        />
        <Divider m="1rem 0 0" />
        <NavBarItem name="Dashboard" href="/dashboard" />
        <NavBarItem name="Documents" href="/documents" />
      </Box>
      <Box display="flex" flexDirection="column" alignItems={"center"}>
        <ColorModeSwitcher />
        <Tooltip label="Logout">
          <IconButton
            aria-label="Log out"
            icon={<Icon name="Logout" className={styles.iconButton} />}
            variant="ghost"
            className={styles.iconButton}
            onClick={logout}
          />
        </Tooltip>
      </Box>
    </VStack>
  );
};
