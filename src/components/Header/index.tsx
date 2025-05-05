import { HeaderContainer } from "./style";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useCart } from "../../context/CartContext";

export function Header() {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HeaderContainer>
      <span>
        <NavLink to="/" title="Home">
          <img src={Logo} alt="" />
        </NavLink>
      </span>
      <div>
        <span>
          <MapPin size={22} color="#8047F8" weight="fill" />
          Porto Alegre, RS
        </span>
        <NavLink to="/checkout" title="Carrinho">
          <nav style={{ position: "relative" }}>
            {totalQuantity > 0 && <h3>{totalQuantity}</h3>}
            <ShoppingCart size={19} color="#C47F17" weight="fill" />
          </nav>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
