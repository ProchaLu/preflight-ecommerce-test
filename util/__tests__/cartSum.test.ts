import { expect, test } from '@jest/globals';
import { cartSumTotal } from '../cartSum';

const total = 19.99;
const product = {
  id: 3,
  name: 'Bouncing',
  type: 'robusta',
  origin: 'country',
  flavourProfile: ['a', 'b', 'c', 'd'],
  price: 9.99,
  description: 'ajhdflkandfas',
  quantity: 3,
};

test('updating a cookie that already exists in the cart', () => {
  expect(cartSumTotal(total, product.quantity, product.price)).toBe('49.96');
});
