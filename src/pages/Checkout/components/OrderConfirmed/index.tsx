import { OrderConfirmedContainer } from "./styles";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import order from "../../../../assets/Image-order-confirmed.svg";

export function OrderConfirmed() {
  return (
    <OrderConfirmedContainer>
      <div className="content">
        <div className="container">
          <div className="container-1">
            <h2>Uhu! Pedido confirmado</h2>
            <h4>Agora é só aguardar que logo o café chegará até você</h4>

            <div className="gradient-border">
              <div className="container-3">
                <div className="adress">
                  <div className="icon">
                    <MapPin size={16} weight="fill" color="#FAFAFA" />
                  </div>
                  <div className="address">
                    <p>Entrega em</p>
                    <h3>Rua João Daniel Martinelli,</h3>
                    <h3>102 </h3>
                    <p>Farrapos -</p>
                    <p>Porto Alegre,</p>
                    <p> RS</p>
                  </div>
                </div>

                <div className="time">
                  <div className="icon-2">
                    <Timer size={16} weight="fill" color="#FAFAFA" />
                  </div>
                  <div className="description">
                    <p>Previsão de entrega</p>
                    <h3>20 min - 30 min</h3>
                  </div>
                </div>

                <div className="payment">
                  <div className="icon-3">
                    <CurrencyDollar size={16} weight="fill" color="#FAFAFA" />
                  </div>
                  <div className="description">
                    <p>Pagamento na entrega</p>
                    <h3>Cartão de Crédito</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-2">
            <img src={order} />
          </div>
        </div>
      </div>
    </OrderConfirmedContainer>
  );
}
