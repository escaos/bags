import { Box } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import styles from "./Layout.module.scss";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display="flex" flexDirection="row" p="1.5rem" gap="1.5rem">
      <NavBar />
      <main className={styles.main}>{children}</main>
    </Box>
  );
};
