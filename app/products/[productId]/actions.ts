'use server';

import { getCookie, setCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import { updateCart } from '../../../util/updateCart';

export async function addQuantity(productId: number, quantity: number) {
  const cartCookies = getCookie('cart');

  const cart = !cartCookies ? [] : parseJson(cartCookies);

  updateCart(cart, productId, quantity);

  await setCookie(cart);
}
