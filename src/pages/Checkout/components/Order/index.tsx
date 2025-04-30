import { OrderContainer } from "./styles";
import Expresso from "../../../../assets/Expresso.svg";
import Latte from "../../../../assets/Latte.svg";
import { Minus, Plus, Trash } from "phosphor-react";

export function Order() {
  return (
    <OrderContainer>
      <span>
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
        </div>
      </span>
    </OrderContainer>
  );
}
