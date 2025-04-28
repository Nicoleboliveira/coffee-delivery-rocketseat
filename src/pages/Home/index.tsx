import { Intro } from "./components/Intro";
import { ListCoffee } from "./components/ListCoffee";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <ListCoffee />
    </HomeContainer>
  );
}
