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
              <p className="cart">
                <ShoppingCart size={16} color="#FAFAFA" weight="fill" />
              </p>
              Compra simples e segura
            </span>

            <span>
              <p className="timer">
                <Timer size={16} color="#FAFAFA" weight="fill" />
              </p>
              Entrega rápida e rastreada
            </span>
          </div>
          <div>
            <span>
              <p className="package">
                <Package size={16} color="#FAFAFA" weight="fill" />
              </p>
              Embalagem mantém o café intacto
            </span>

            <span>
              <p className="coffee">
                <Coffee size={16} color="#FAFAFA" weight="fill" />
              </p>
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
