import { HeaderContainer } from "./style";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Home">
          <img src={Logo} alt="" />
        </NavLink>
      </nav>
      <div>
        <span>
          <MapPin size={22} color="#8047F8" weight="fill" />
          Porto Alegre, RS
        </span>
        <NavLink to="/checkout" title="Carrinho">
          <nav>
            <h3>1</h3>
            <ShoppingCart size={19} color="#C47F17" weight="fill" />
          </nav>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
