import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { IntroContainer } from "./styles";
import ImagemIntro from "../../../../assets/ImagemIntro.svg";

export function Intro() {
  return (
    <IntroContainer>
      <span>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <main>
          <div>
            <span>
              <div className="cart">
                <ShoppingCart size={14} color="#FAFAFA" weight="fill" />
              </div>
              Compra simples e segura
            </span>

            <span>
              <div className="timer">
                <Timer size={14} color="#FAFAFA" weight="fill" />
              </div>
              Entrega rápida e rastreada
            </span>
          </div>
          <div>
            <span>
              <div className="package">
                <Package size={14} color="#FAFAFA" weight="fill" />
              </div>
              Embalagem mantém o café intacto
            </span>

            <span>
              <div className="coffee">
                <Coffee size={14} color="#FAFAFA" weight="fill" />
              </div>
              O café chega fresquinho até você
            </span>
          </div>
        </main>
      </span>

      <div>
        <img src={ImagemIntro} />
      </div>
    </IntroContainer>
  );
}
