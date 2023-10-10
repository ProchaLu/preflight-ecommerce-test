import { expect, test } from '@jest/globals';
import { updateCart } from '../updateCart';

const cart = [{ id: 2, quantity: 1 }];

test('updating a cookie that already exists in the cart', () => {
  // When accessing a key in the local storage that doesn't exist, the returned value is null
  expect(updateCart(cart, 2, 2)).toStrictEqual([{ id: 2, quantity: 3 }]);
});
