import 'server-only';

const products = [
  {
    id: 1,
    name: 'Jittery',
    type: 'arabica',
    origin: 'country',
    flavourProfile: ['a', 'b', 'c', 'd'],
    price: 12.99,
    description: 'ajhdflkandfas',
  },
  {
    id: 2,
    name: 'Hyper',
    type: 'arabica',
    origin: 'country',
    flavourProfile: ['a', 'b', 'c', 'd'],
    price: 10.99,
    description: 'ajhdflkandfas',
  },
  {
    id: 3,
    name: 'Bouncing',
    type: 'robusta',
    origin: 'country',
    flavourProfile: ['a', 'b', 'c', 'd'],
    price: 9.99,
    description: 'ajhdflkandfas',
  },
  {
    id: 4,
    name: 'Buzzing',
    type: 'arabica',
    origin: 'country',
    flavourProfile: ['a', 'b', 'c', 'd'],
    price: 14.99,
    description: 'ajhdflkandfas',
  },
  {
    id: 5,
    name: 'Antsy',
    type: 'robusta',
    origin: 'country',
    flavourProfile: ['a', 'b', 'c', 'd'],
    price: 13.99,
    description: 'ajhdflkandfas',
  },
  {
    id: 6,
    name: 'Twitchy',
    type: 'arabica',
    origin: 'country',
    flavourProfile: ['a', 'b', 'c', 'd'],
    price: 10.99,
    description: 'ajhdflkandfas',
  },
  {
    id: 7,
    name: 'Fidgety',
    type: 'arabica',
    origin: 'country',
    flavourProfile: ['a', 'b', 'c', 'd'],
    price: 11.99,
    description: 'ajhdflkandfas',
  },
  {
    id: 8,
    name: 'Manic',
    type: 'robusta',
    origin: 'country',
    flavourProfile: ['a', 'b', 'c', 'd'],
    price: 10.99,
    description: 'ajhdflkandfas',
  },
  {
    id: 9,
    name: 'Spazzy',
    type: 'arabica',
    origin: 'country',
    flavourProfile: ['a', 'b', 'c', 'd'],
    price: 11.99,
    description: 'ajhdflkandfas',
  },
  {
    id: 10,
    name: 'Zippy',
    type: 'robusta',
    origin: 'country',
    flavourProfile: ['a', 'b', 'c', 'd'],
    price: 12.99,
    description: 'ajhdflkandfas',
  },
  {
    id: 11,
    name: 'Electric',
    type: 'robusta',
    origin: 'country',
    flavourProfile: ['a', 'b', 'c', 'd'],
    price: 9.99,
    description: 'ajhdflkandfas',
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
