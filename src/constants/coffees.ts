export interface ICoffee {
  id: string
  name: string
  description: string
  types: string[]
  price: string
  image: string
}

export const coffees: ICoffee[] = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    types: ['tradicional'],
    price: '4,90',
    image: '/images/Coffees/Expresso.png',
  },
  {
    id: '2',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    types: ['tradicional'],
    price: '6,90',
    image: '/images/Coffees/Americano.png',
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    types: ['tradicional'],
    price: '8,90',
    image: '/images/Coffees/Expresso Cremoso.png',
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    types: ['tradicional', 'gelado'],
    price: '9,90',
    image: '/images/Coffees/Café Gelado.png',
  },
  {
    id: '5',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    types: ['tradicional', 'com leite'],
    price: '9,90',
    image: '/images/Coffees/Café com Leite.png',
  },
  {
    id: '6',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    types: ['tradicional', 'com leite'],
    price: '11,90',
    image: '/images/Coffees/Latte.png',
  },
  {
    id: '7',
    name: 'Cappuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    types: ['tradicional', 'com leite'],
    price: '11,90',
    image: '/images/Coffees/Capuccino.png',
  },
  {
    id: '8',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    types: ['tradicional', 'com leite'],
    price: '12,90',
    image: '/images/Coffees/Macchiato.png',
  },
  {
    id: '9',
    name: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    types: ['tradicional', 'com leite'],
    price: '13,90',
    image: '/images/Coffees/Mochaccino.png',
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    types: ['especial', 'com leite'],
    price: '12,90',
    image: '/images/Coffees/Chocolate Quente.png',
  },
  {
    id: '11',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    types: ['especial', 'alcoólico', 'gelado'],
    price: '12,90',
    image: '/images/Coffees/Cubano.png',
  },
  {
    id: '12',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    types: ['especial'],
    price: '15,90',
    image: '/images/Coffees/Havaiano.png',
  },
  {
    id: '13',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    types: ['especial'],
    price: '15,90',
    image: '/images/Coffees/Árabe.png',
  },
  {
    id: '14',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    types: ['especial', 'alcoólico'],
    price: '18,90',
    image: '/images/Coffees/Irlandês.png',
  },
]
