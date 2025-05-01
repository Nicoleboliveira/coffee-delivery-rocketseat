import { useState } from "react";
import { CheckoutContainer } from "./styles";
import { Information } from "./components/Information";
import { Order } from "./components/Order";
import { OrderConfirmed } from "./components/OrderConfirmed";

export function Checkout() {
  const [pedidoConfirmado, setPedidoConfirmado] = useState(false);

  return (
    <CheckoutContainer>
      {pedidoConfirmado ? (
        <OrderConfirmed />
      ) : (
        <>
          <Information />
          <Order onConfirmar={() => setPedidoConfirmado(true)} />
        </>
      )}
    </CheckoutContainer>
  );
}
