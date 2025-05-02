import { OrderConfirmedContainer } from "./styles";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import order from "../../../../assets/Image-order-confirmed.svg";

type OrderConfirmedProps = {
  orderDetails: any;
};

export function OrderConfirmed({ orderDetails }: OrderConfirmedProps) {
  const { address, paymentMethod } = orderDetails;

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
                    <h3>
                      Rua {address.rua}, {address.numero}
                    </h3>
                    <p>
                      {address.bairro} - {address.cidade}, {address.estado}
                    </p>
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
                    <h3>{paymentMethod}</h3>
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
