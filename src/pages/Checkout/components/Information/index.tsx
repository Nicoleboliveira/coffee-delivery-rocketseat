import { useState, useEffect } from "react";
import { InformationContainer } from "./styles";
import { useOrder } from "../../../../context/OrderContext";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";

type InformationProps = {
  onSubmit: (address: any, paymentMethod: string) => void;
};

export function Information({ onSubmit }: InformationProps) {
  const { setOrderData } = useOrder();

  const [address, setAddress] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const isAddressComplete =
      address.rua &&
      address.numero &&
      address.bairro &&
      address.cidade &&
      address.estado;
    const isPaymentMethodSelected = paymentMethod !== "";

    if (isAddressComplete && isPaymentMethodSelected) {
      onSubmit(address, paymentMethod);
    }
  }, [address, paymentMethod, onSubmit]);

  function handleUpdateOrderData(updatedAddress: any, updatedPayment: string) {
    const isAddressComplete =
      updatedAddress.rua &&
      updatedAddress.numero &&
      updatedAddress.bairro &&
      updatedAddress.cidade &&
      updatedAddress.estado;

    if (isAddressComplete && updatedPayment) {
      setOrderData(updatedAddress, updatedPayment);
    }
  }

  function handleAddressChange(field: string, value: string) {
    const updated = { ...address, [field]: value };
    setAddress(updated);
    handleUpdateOrderData(updated, paymentMethod);
  }

  function handlePaymentChange(method: string) {
    setPaymentMethod(method);
    handleUpdateOrderData(address, method);
  }

  return (
    <InformationContainer>
      <div className="content">
        <h2>Complete seu pedido</h2>

        <div className="address">
          <div className="intro-1">
            <MapPinLine size={22} color="#C47F17" weight="regular" />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <input
            type="text"
            name="cep"
            id="cep"
            placeholder="CEP"
            maxLength={9}
            className="cep"
            onChange={(e) => handleAddressChange("cep", e.target.value)}
          />
          <input
            type="text"
            placeholder="Rua"
            className="road"
            onChange={(e) => handleAddressChange("rua", e.target.value)}
          />

          <div className="line-1">
            <input
              type="number"
              placeholder="Número"
              onChange={(e) => handleAddressChange("numero", e.target.value)}
            />
            <input
              type="text"
              placeholder="Complemento"
              onChange={(e) =>
                handleAddressChange("complemento", e.target.value)
              }
            />
          </div>

          <div className="line-2">
            <input
              type="text"
              placeholder="Bairro"
              onChange={(e) => handleAddressChange("bairro", e.target.value)}
            />
            <input
              type="text"
              placeholder="Cidade"
              onChange={(e) => handleAddressChange("cidade", e.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              maxLength={2}
              onChange={(e) => handleAddressChange("estado", e.target.value)}
            />
          </div>
        </div>

        <div className="payment">
          <div className="intro-2">
            <CurrencyDollar size={22} color="#8047F8" weight="regular" />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <div className="payment-options">
            <input
              type="radio"
              id="credit"
              name="payment"
              hidden
              onChange={() => handlePaymentChange("Cartão de Crédito")}
            />
            <label htmlFor="credit">
              <CreditCard size={16} color="#8047F8" weight="regular" /> CARTÃO
              DE CRÉDITO
            </label>
            <input
              type="radio"
              id="bank"
              name="payment"
              hidden
              onChange={() => handlePaymentChange("Transferência")}
            />
            <label htmlFor="bank">
              <Bank size={16} color="#8047F8" weight="regular" /> TRANSFERÊNCIA
            </label>
            <input
              type="radio"
              id="cash"
              name="payment"
              hidden
              onChange={() => handlePaymentChange("Dinheiro")}
            />
            <label htmlFor="cash">
              <Money size={16} color="#8047F8" weight="regular" /> DINHEIRO
            </label>
          </div>
        </div>
      </div>
    </InformationContainer>
  );
}
