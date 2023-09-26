import 'server-only';

const products = [
  {
    id: 1,
    name: 'Jittery',
    type: 'arabica',
    origin: 'country',
    flavourProfile: '',
  },
  {
    id: 2,
    name: 'Hyper',
    type: 'arabica',
    origin: 'country',
    flavourProfile: '',
  },
  {
    id: 3,
    name: 'Bouncing off the walls',
    type: 'robusta',
    origin: 'country',
    flavourProfile: '',
  },
  {
    id: 4,
    name: 'Buzzing',
    type: 'arabica',
    origin: 'country',
    flavourProfile: '',
  },
  {
    id: 5,
    name: 'Antsy',
    type: 'robusta',
    origin: 'country',
    flavourProfile: '',
  },
  {
    id: 6,
    name: 'Twitchy',
    type: 'arabica',
    origin: 'country',
    flavourProfile: '',
  },
  {
    id: 7,
    name: 'Fidgety',
    type: 'arabica',
    origin: 'country',
    flavourProfile: '',
  },
  {
    id: 8,
    name: 'Manic',
    type: 'robusta',
    origin: 'country',
    flavourProfile: '',
  },
  {
    id: 9,
    name: 'Spazzy',
    type: 'arabica',
    origin: 'country',
    flavourProfile: '',
  },
  {
    id: 10,
    name: 'Zippy',
    type: 'robusta',
    origin: 'country',
    flavourProfile: '',
  },
  {
    id: 11,
    name: 'Electric',
    type: 'robusta',
    origin: 'country',
    flavourProfile: '',
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
