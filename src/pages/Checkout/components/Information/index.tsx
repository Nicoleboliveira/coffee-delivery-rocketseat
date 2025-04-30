import { InformationContainer } from "./styles";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";

export function Information() {
  return (
    <InformationContainer>
      <span>
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
          />
          <input type="text" placeholder="Rua" className="road" />

          <div className="line-1">
            <input type="number" placeholder="Número" />

            <input type="text" placeholder="Complemento" />
          </div>

          <div className="line-2">
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" maxLength={2} />
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
            <input type="radio" id="credit" name="payment" hidden />
            <label htmlFor="credit">
              <CreditCard size={16} color="#8047F8" weight="regular" />
              CARTÃO DE CRÉDITO
            </label>

            <input type="radio" id="bank" name="payment" hidden />
            <label htmlFor="bank">
              <Bank size={16} color="#8047F8" weight="regular" />
              TRANSFERÊNCIA BANCÁRIA
            </label>

            <input type="radio" id="cash" name="payment" hidden />
            <label htmlFor="cash">
              <Money size={16} color="#8047F8" weight="regular" />
              DINHEIRO
            </label>
          </div>
        </div>
      </span>
    </InformationContainer>
  );
}
