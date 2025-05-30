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

export const coffees = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["TRADICIONAL"],
    image: Expresso,
    price: 9.9,
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["TRADICIONAL"],
    price: 9.9,
    image: Americano,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["TRADICIONAL"],
    price: 9.9,
    image: Cremoso,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["TRADICIONAL", "GELADO"],
    price: 9.9,
    image: Gelado,
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    image: Leite,
  },
  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    image: Latte,
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    image: Capuccino,
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    image: Macchiato,
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    price: 9.9,
    image: Mocaccino,
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["ESPECIAL", "COM LEITE"],
    price: 9.9,
    image: Chocolate,
  },
  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    price: 9.9,
    image: Cubano,
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["ESPECIAL"],
    price: 9.9,
    image: Havaiano,
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["ESPECIAL"],
    price: 9.9,
    image: Árabe,
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["ESPECIAL", "ALCOÓLICO"],
    price: 9.9,
    image: Irlandês,
  },
];
