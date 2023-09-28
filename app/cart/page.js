import Link from 'next/link';
import React from 'react';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export const metadata = {
  title: 'Shopping cart',
  description: 'Your shopping cart at Covfefe',
};

export function renderTotalAmount(total) {
  if (total > 0) {
    return (
      <div>
        <p>
          Total: <span data-test-id="cart-total">{total}</span>
          Euro
        </p>
        <Link href="/checkout">Proceed to Checkout</Link>
      </div>
    );
  } else {
    return 'Your shopping cart is empty';
  }
}

export default function Cart() {
  let total = 0;
  const cartCookies = getCookie('cart');

  const cart = !cartCookies ? [] : parseJson(cartCookies);

  const mergeCookiesWithProducts = getProducts().map((product) => {
    const matchingWithProduct = cart.find((item) => product.id === item.id);
    return { ...product, quantity: matchingWithProduct?.quantity };
  });

  return (
    <>
      <p>This is your shopping cart:</p>
      <ul>
        {mergeCookiesWithProducts.map((product) => {
          if (product.quantity) {
            total += product.quantity * product.price;
            console.log(total);

            return (
              <li
                key={`product-${product.id}`}
                data-test-id={`cart-product-${product.id}`}
              >
                {product.name} - Quantity:{' '}
                <span data-test-id={`cart-product-quantity-${product.id}`}>
                  {product.quantity}
                </span>
                Subtotal: {product.quantity * product.price} REMOVE-BUTTON
              </li>
            );
          } else {
            return undefined;
          }
        })}
      </ul>
      {renderTotalAmount(total)}
    </>
  );
}
