'use server';

import { getCookie, setCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export type CartItem = {
  id: number;
  quantity: number;
};

export async function addOneToCart(productId: number) {
  const cartCookies = await getCookie('cart');

  const cart = !cartCookies ? [] : parseJson(cartCookies);

  const productToUpdate = cart.find((item: CartItem) => {
    return item.id === productId;
  });

  if (productToUpdate) {
    productToUpdate.quantity++;
  }

  await setCookie(cart);
}

export async function removeOneFromCart(productId: number) {
  const cartCookies = await getCookie('cart');

  let cart = !cartCookies ? [] : parseJson(cartCookies);

  const productToUpdate = cart.find((item: CartItem) => {
    return item.id === productId;
  });

  if (productToUpdate) {
    if (productToUpdate.quantity > 1) {
      productToUpdate.quantity -= 1;
    } else if (productToUpdate.quantity === 1) {
      cart = cart.filter((item: CartItem) => {
        return item.id !== productToUpdate.id;
      });
    }
  }
  await setCookie(cart);
}

export async function removeProduct(productId: number) {
  const cartCookies = await getCookie('cart');

  const cart = !cartCookies ? [] : parseJson(cartCookies);

  const cartWithoutTheItem = cart.filter((item: CartItem) => {
    return item.id !== productId;
  });

  await setCookie(cartWithoutTheItem);
}
