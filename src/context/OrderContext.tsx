import { createContext, useContext, useState, ReactNode } from "react";

type Address = {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
};

type OrderData = {
  address: Address;
  paymentMethod: string;
};

type OrderContextType = {
  orderData: OrderData;
  setOrderData: (address: Address, paymentMethod: string) => void;
};

const OrderContext = createContext({} as OrderContextType);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orderData, setOrderDataState] = useState<OrderData>({
    address: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
    },
    paymentMethod: "",
  });

  function setOrderData(address: Address, paymentMethod: string) {
    setOrderDataState({
      address,
      paymentMethod,
    });
  }

  return (
    <OrderContext.Provider value={{ orderData, setOrderData }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  return useContext(OrderContext);
}
