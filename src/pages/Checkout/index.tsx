import { CheckoutContainer } from "./styles";
import { Information } from "./components/Information";
import { Order } from "./components/Order";

export function Checkout() {
  return (
    <CheckoutContainer>
      <Information />
      <Order />
    </CheckoutContainer>
  );
}
