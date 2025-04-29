import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ListCoffeContainer } from "./styles";
import Expresso from "../../../../assets/Expresso.svg";
import Americano from "../../../../assets/Americano.svg";
import Cremoso from "../../../../assets/Cremoso.svg";
import Gelado from "../../../../assets/Gelado.svg";
import Leite from "../../../../assets/Café-com-Leite.svg";
import Latte from "../../../../assets/Latte.svg";
import Capuccino from "../../../../assets/Capuccino.svg";
import Macchiato from "../../../../assets/Macchiato.svg";
import Mocaccino from "../../../../assets/Mocaccino.svg";
import Chocolate from "../../../../assets/Chocolate-quente.svg";
import Cubano from "../../../../assets/Cubano.svg";
import Havaiano from "../../../../assets/Havaiano.svg";
import Árabe from "../../../../assets/Árabe.svg";
import Irlandês from "../../../../assets/Irlandês.svg";

export function ListCoffee() {
  return (
    <ListCoffeContainer>
      <span>
        <h2>Nossos cafés</h2>

        <div>
          <div className="card">
            <img src={Expresso} />
            <div>
              <h5>TRADICIONAL</h5>
            </div>
            <h4>Expresso Tradicional</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <div className="price">
                <h6>R$</h6>
                <h3> 9,90</h3>
              </div>
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
                <button className="btn-2">
                  <ShoppingCart size={20} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Americano} />
            <div>
              <h5>TRADICIONAL</h5>
            </div>
            <h4>Expresso Americano</h4>
            <p>Expresso diluído, menos intenso que o tradicional</p>
            <div>
              <div className="price">
                <h6>R$</h6>
                <h3> 9,90</h3>
              </div>
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
                <button className="btn-2">
                  <ShoppingCart size={20} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Cremoso} />
            <div>
              <h5>TRADICIONAL</h5>
            </div>
            <h4>Expresso Cremoso</h4>
            <p>Café expresso tradicional com espuma cremosa</p>
            <div>
              <div className="price">
                <h6>R$</h6>
                <h3> 9,90</h3>
              </div>
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
                <button className="btn-2">
                  <ShoppingCart size={20} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Gelado} />
            <div>
              <h5>TRADICIONAL</h5>
              <h5>GELADO</h5>
            </div>
            <h4>Expresso Gelado</h4>
            <p>Bebida preparada com café expresso e cubos de gelo</p>
            <div>
              <div className="price">
                <h6>R$</h6>
                <h3> 9,90</h3>
              </div>
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
                <button className="btn-2">
                  <ShoppingCart size={20} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Leite} />
            <div>
              <h5>TRADICIONAL</h5>
              <h5>COM LEITE</h5>
            </div>
            <h4>Café com Leite</h4>
            <p>Meio a meio de expresso tradicional com leite vaporizado</p>
            <div>
              <div className="price">
                <h6>R$</h6>
                <h3> 9,90</h3>
              </div>
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
                <button className="btn-2">
                  <ShoppingCart size={20} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Latte} />
            <div>
              <h5>TRADICIONAL</h5>
              <h5>COM LEITE</h5>
            </div>
            <h4>Latte</h4>
            <p>
              Uma dose de café expresso com o dobro de leite e espuma cremosa
            </p>
            <div>
              <div className="price">
                <h6>R$</h6>
                <h3> 9,90</h3>
              </div>
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
                <button className="btn-2">
                  <ShoppingCart size={20} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Capuccino} />
            <div>
              <h5>TRADICIONAL</h5>
              <h5>COM LEITE</h5>
            </div>
            <h4>Capuccino</h4>
            <p>
              Bebida com canela feita de doses iguais de café, leite e espuma
            </p>
            <div>
              <div className="price">
                <h6>R$</h6>
                <h3> 9,90</h3>
              </div>
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
                <button className="btn-2">
                  <ShoppingCart size={20} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Macchiato} />
            <div>
              <h5>TRADICIONAL</h5>
              <h5>COM LEITE</h5>
            </div>
            <h4>Macchiato</h4>
            <p>Café expresso misturado com um pouco de leite quente e espuma</p>
            <div>
              <div className="price">
                <h6>R$</h6>
                <h3> 9,90</h3>
              </div>
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
                <button className="btn-2">
                  <ShoppingCart size={20} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Mocaccino} />
            <div>
              <h5>TRADICIONAL</h5>
              <h5>COM LEITE</h5>
            </div>
            <h4>Mocaccino</h4>
            <p>Café expresso com calda de chocolate, pouco leite e espuma</p>
            <div>
              <div className="price">
                <h6>R$</h6>
                <h3> 9,90</h3>
              </div>
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
                <button className="btn-2">
                  <ShoppingCart size={20} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Chocolate} />
            <div>
              <h5>ESPECIAL</h5>
              <h5>COM LEITE</h5>
            </div>
            <h4>Chocolate Quente</h4>
            <p>Bebida feita com chocolate dissolvido no leite quente e café</p>
            <div>
              <div className="price">
                <h6>R$</h6>
                <h3> 9,90</h3>
              </div>
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
                <button className="btn-2">
                  <ShoppingCart size={20} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Cubano} />
            <div>
              <h5>ESPECIAL</h5>
              <h5>ALCOÓLICO</h5>
              <h5>GELADO</h5>
            </div>
            <h4>Cubano</h4>
            <p>
              Drink gelado de café expresso com rum, creme de leite e hortelã
            </p>
            <div>
              <div className="price">
                <h6>R$</h6>
                <h3> 9,90</h3>
              </div>
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
                <button className="btn-2">
                  <ShoppingCart size={20} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Havaiano} />
            <div>
              <h5>ESPECIAL</h5>
            </div>
            <h4>Havaiano</h4>
            <p>Bebida adocicada preparada com café e leite de coco</p>
            <div>
              <div className="price">
                <h6>R$</h6>
                <h3> 9,90</h3>
              </div>
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
                <button className="btn-2">
                  <ShoppingCart size={20} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Árabe} />
            <div>
              <h5>ESPECIAL</h5>
            </div>
            <h4>Árabe</h4>
            <p>Bebida preparada com grãos de café árabe e especiarias</p>
            <div>
              <div className="price">
                <h6>R$</h6>
                <h3> 9,90</h3>
              </div>
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
                <button className="btn-2">
                  <ShoppingCart size={20} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Irlandês} />
            <div>
              <h5>ESPECIAL</h5>
              <h5>ALCOÓLICO</h5>
            </div>
            <h4>Irlandês</h4>
            <p>Bebida a base de café, uísque irlandês, açúcar e chantilly</p>
            <div>
              <div className="price">
                <h6>R$</h6>
                <h3> 9,90</h3>
              </div>
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
                <button className="btn-2">
                  <ShoppingCart size={20} color="#FAFAFA" weight="fill" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </span>
    </ListCoffeContainer>
  );
}
