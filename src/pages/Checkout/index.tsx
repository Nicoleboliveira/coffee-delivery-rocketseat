import { useState } from "react";
import { CheckoutContainer } from "./styles";
import { Information } from "./components/Information";
import { Order } from "./components/Order";
import { OrderConfirmed } from "./components/OrderConfirmed";

export function Checkout() {
  const [pedidoConfirmado, setPedidoConfirmado] = useState(false);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  const handleConfirmOrder = (address: any, paymentMethod: string) => {
    // Aqui você pode fazer a lógica de confirmação do pedido e salvar os dados
    setOrderDetails({ address, paymentMethod });
    //setPedidoConfirmado(true);
  };

  // Verifica se os dados estão completos
  const isOrderDataComplete =
    orderDetails?.address?.rua &&
    orderDetails?.address?.numero &&
    orderDetails?.address?.bairro &&
    orderDetails?.address?.cidade &&
    orderDetails?.address?.estado &&
    orderDetails?.paymentMethod;

  return (
    <CheckoutContainer>
      {pedidoConfirmado ? (
        <OrderConfirmed orderDetails={orderDetails} /> // Exibe a confirmação do pedido
      ) : (
        <>
          <Information onSubmit={handleConfirmOrder} />
          <Order
            isOrderDataComplete={!!isOrderDataComplete}
            onConfirmar={() => setPedidoConfirmado(true)}
          />
        </>
      )}
    </CheckoutContainer>
  );
}
