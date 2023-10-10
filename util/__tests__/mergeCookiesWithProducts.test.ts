import { expect, test } from '@jest/globals';
import { mergeCookiesWithProducts } from '../mergeCookiesWithProducts';

test('combines quantity from cookies with products from database', () => {
  const cartCookies = [
    {
      id: 3,
      quantity: 2,
    },
    {
      id: 5,
      quantity: 3,
    },
  ];
  const products = [
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
      id: 5,
      name: 'Antsy',
      type: 'robusta',
      origin: 'country',
      flavourProfile: ['a', 'b', 'c', 'd'],
      price: 13.99,
      description: 'ajhdflkandfas',
    },
  ];

  expect(mergeCookiesWithProducts(products, cartCookies)).toStrictEqual([
    {
      id: 3,
      name: 'Bouncing',
      type: 'robusta',
      origin: 'country',
      flavourProfile: ['a', 'b', 'c', 'd'],
      price: 9.99,
      description: 'ajhdflkandfas',
      quantity: 2,
    },
    {
      id: 5,
      name: 'Antsy',
      type: 'robusta',
      origin: 'country',
      flavourProfile: ['a', 'b', 'c', 'd'],
      price: 13.99,
      description: 'ajhdflkandfas',
      quantity: 3,
    },
  ]);
});
