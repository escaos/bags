import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./state/AuthContext";
import Routes from "./routes/Routes";
import theme from "./styles/Theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  </ChakraProvider>
);
