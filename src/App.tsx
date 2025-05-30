import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <OrderProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </OrderProvider>
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
