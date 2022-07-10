import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { defaultTheme } from "./styles/theme";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement!);

root.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);
