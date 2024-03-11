import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./domain/state/AppContext";
import { AuthProvider } from "./domain/state/AuthContext";
import Routes from "./routes/Routes";
import theme from "./styles/Theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppProvider>
      <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>
    </AppProvider>
  </ChakraProvider>
);
