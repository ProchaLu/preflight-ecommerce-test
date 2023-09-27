'use server';

// Case A: cookie is undefined
// Case B: cookie is defined but have the fruit id
// Case C: cookie is defined but doesn't have the fruit id

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function addQuantity(productId, quantity) {
  // 1. get the current cookie
  const cartCookies = getCookie('cart');
  // 2. parse the cookie value

  // !fruitsCommentsCookie <=> fruitsCommentsCookie === undefined
  const cart = !cartCookies
    ? // Case A: cookie is undefined
      // we need to create a new cookie with an empty array
      []
    : parseJson(cartCookies);

  // 3. we edit the cookie value
  // We get the the object for the fruit on cookies or undefined
  const productToUpdate = cart.find((item) => {
    return item.id === productId;
  });
  // Case B: cookie is defined and fruit id already exists!
  // if we are in fruit id = 1
  if (productToUpdate) {
    // const newQuantity = Number(productToUpdate.quantity) + quantity;
    productToUpdate.quantity += quantity;
  } else {
    // Case C: cookie is defined and fruit id doesn't exist!
    cart.push({
      id: productId,
      quantity: quantity,
    });
  }

  // 4. we override the cookie
  await cookies().set('cart', JSON.stringify(cart));
}
