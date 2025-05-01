import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ListCoffeContainer } from "./styles";
import { coffees } from "./cofes";

export function ListCoffee() {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    coffees.reduce((acc, coffee) => {
      acc[coffee.id] = 1;
      return acc;
    }, {} as { [key: number]: number })
  );

  const increase = (id: number) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrease = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };
  return (
    <ListCoffeContainer>
      <span>
        <h2>Nossos cafés</h2>

        <div className="coffee-list">
          {coffees.map((coffee) => (
            <div key={coffee.id} className="card">
              <img src={coffee.image} alt={coffee.name} />
              <div className="tags">
                {coffee.tags.map((tag) => (
                  <h5 key={tag}>{tag}</h5>
                ))}
              </div>
              <h4>{coffee.name}</h4>
              <p>{coffee.description}</p>
              <div>
                <div className="price">
                  <h6>R$</h6>
                  <h3>{coffee.price.toFixed(2).replace(".", ",")}</h3>
                </div>
                <div className="buttons">
                  <div className="btn-1">
                    <button
                      className="minus"
                      onClick={() => decrease(coffee.id)}
                    >
                      <Minus size={14} weight="bold" />
                    </button>
                    <span>{quantities[coffee.id]}</span>
                    <button
                      className="plus"
                      onClick={() => increase(coffee.id)}
                    >
                      <Plus size={14} weight="bold" />
                    </button>
                  </div>
                  <button className="btn-2">
                    <ShoppingCart size={20} color="#FAFAFA" weight="fill" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </span>
    </ListCoffeContainer>
  );
}
