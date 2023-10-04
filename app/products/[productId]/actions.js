'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function addQuantity(productId, quantity) {
  const cartCookies = getCookie('cart');

  const cart = !cartCookies ? [] : parseJson(cartCookies);
  console.log(cart);

  const productToUpdate = cart.find((item) => {
    return item.id === productId;
  });
  if (productToUpdate) {
    productToUpdate.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      quantity: quantity,
    });
  }

  await cookies().set('cart', JSON.stringify(cart));
}
