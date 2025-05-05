import { OrderContainer } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { useCart } from "../../../../context/CartContext";

type OrderProps = {
  isOrderDataComplete: boolean; // Recebe a validação da confirmação do pedido
  onConfirmar: () => void; // Função para confirmar o pedido
};

export function Order({ isOrderDataComplete, onConfirmar }: OrderProps) {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const delivery = cart.length > 0 ? 3.5 : 0;
  const total = totalItems + delivery;
  const handleConfirmarPedido = () => {
    onConfirmar();
    clearCart();
    // Atraso de 200ms para limpar o carrinho corretamente antes de navegar
    setTimeout(() => {}, 200);
  };

  return (
    <OrderContainer>
      <div className="content">
        <h2>Cafés selecionados</h2>

        <div className="orderProducts">
          {/* NOVA DIV para isolar os produtos */}
          <div className="productsContainer">
            {cart.map((item) => (
              <div className="products" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="description">
                  <h3>{item.name}</h3>
                  <div className="buttons">
                    <div className="btn-1">
                      <button
                        className="minus"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        <Minus size={14} weight="bold" />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="plus"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        <Plus size={14} weight="bold" />
                      </button>
                    </div>
                    <div className="btn-2">
                      <button
                        className="trash"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash size={16} />
                        REMOVER
                      </button>
                    </div>
                  </div>
                </div>
                <div className="price">
                  R$ {item.price.toFixed(2).replace(".", ",")}
                </div>
              </div>
            ))}
          </div>

          <div className="container">
            <div className="information">
              <p>Total de itens</p>
              <h5>R$ {totalItems.toFixed(2).replace(".", ",")}</h5>
            </div>

            {cart.length > 0 && (
              <div className="information">
                <p>Entrega</p>
                <h5>R$ {delivery.toFixed(2).replace(".", ",")}</h5>
              </div>
            )}

            <div className="total">
              <h4>Total</h4>
              <h4>R$ {total.toFixed(2).replace(".", ",")}</h4>
            </div>
          </div>

          {isOrderDataComplete ? (
            <button
              type="button"
              className="confirm"
              onClick={handleConfirmarPedido} // Confirma o pedido ao clicar
            >
              CONFIRMAR PEDIDO
            </button>
          ) : (
            <button type="button" className="confirm" disabled>
              CONFIRMAR PEDIDO
            </button>
          )}
        </div>
      </div>
    </OrderContainer>
  );
}
