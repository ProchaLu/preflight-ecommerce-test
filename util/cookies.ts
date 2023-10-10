'use server';

import { cookies } from 'next/headers';
import { CartItem } from '../app/cart/actions';

// nullish coalescing operator
export async function getCookie(name: string) {
  return await cookies().get(name)?.value;
}
export async function setCookie(cart: CartItem[]) {
  await cookies().set('cart', JSON.stringify(cart));
}

export async function clearCookies() {
  await cookies().set('cart', JSON.stringify([]));
}
