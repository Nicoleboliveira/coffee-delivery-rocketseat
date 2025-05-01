import { OrderContainer } from "./styles";
import Expresso from "../../../../assets/Expresso.svg";
import Latte from "../../../../assets/Latte.svg";
import { Minus, Plus, Trash } from "phosphor-react";

type OrderProps = {
  onConfirmar: () => void;
};

export function Order({ onConfirmar }: OrderProps) {
  return (
    <OrderContainer>
      <div className="content">
        <h2>Cafés selecionados</h2>

        <div className="orderProducts">
          <div className="products">
            <img src={Expresso} />
            <div className="description">
              <h3>Expresso Tradicional</h3>
              <div className="buttons">
                <div className="btn-1">
                  <button className="minus">
                    <Minus size={14} weight="bold" />
                  </button>
                  1
                  <button className="plus">
                    <Plus size={14} weight="bold" />
                  </button>
                </div>
                <div className="btn-2">
                  <button className="trash">
                    <Trash size={16} />
                    REMOVER
                  </button>
                </div>
              </div>
            </div>
            <div className="price">R$ 9,90</div>
          </div>

          <div className="products">
            <img src={Latte} />
            <div className="description">
              <h3>Latte</h3>
              <div className="buttons">
                <div className="btn-1">
                  <button className="minus">
                    <Minus size={14} weight="bold" />
                  </button>
                  1
                  <button className="plus">
                    <Plus size={14} weight="bold" />
                  </button>
                </div>
                <div className="btn-2">
                  <button className="trash">
                    <Trash size={16} />
                    REMOVER
                  </button>
                </div>
              </div>
            </div>
            <div className="price">R$ 9,90</div>
          </div>

          <div className="container">
            <div className="information">
              <p>Total de itens</p>
              <h5>R$ 29,70</h5>
            </div>

            <div className="information">
              <p>Entrega</p>
              <h5>R$ 3,50</h5>
            </div>

            <div className="total">
              <h4>Total</h4>
              <h4>R$ 33,20</h4>
            </div>
          </div>
          <button type="button" className="confirm" onClick={onConfirmar}>
            CONFIRMAR PEDIDO
          </button>
        </div>
      </div>
    </OrderContainer>
  );
}
