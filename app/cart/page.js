import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import AddOneProduct from './AddOneProduct';
import styles from './page.module.scss';
import RemoveOneProduct from './RemoveOneProduct';
import SetQuantityToZeroButton from './SetQuantityToZeroButton';

export const metadata = {
  title: 'Shopping cart',
  description: 'Your shopping cart at Covfefe',
};

export function renderTotalAmount(total) {
  if (total > 0) {
    return (
      <div>
        <p className={styles.total}>
          Total: <span data-test-id="cart-total">{total}</span>
          Euro
        </p>
        <Link className={styles.checkoutButton} href="/checkout">
          Proceed to Checkout
        </Link>
      </div>
    );
  } else {
    return (
      <p className={styles.emptyCart}>Your shopping cart is currently empty</p>
    );
  }
}

export default async function Cart() {
  let total = 0;
  const cartCookies = getCookie('cart');

  const cart = !cartCookies ? [] : parseJson(cartCookies);
  const products = await getProducts();

  const mergeCookiesWithProducts = products.map((product) => {
    const matchingWithProduct = cart.find((item) => product.id === item.id);
    return { ...product, quantity: matchingWithProduct?.quantity };
  });

  return (
    <section className={styles.cartSection}>
      <h1 className={styles.header}>Shopping cart:</h1>
      <ul>
        {mergeCookiesWithProducts.map((product) => {
          if (product.quantity) {
            total += product.quantity * product.price;

            return (
              <li
                key={`product-${product.id}`}
                data-test-id={`cart-product-${product.id}`}
              >
                {product.name} - Quantity:{' '}
                <AddOneProduct productId={product.id} />
                <span data-test-id={`cart-product-quantity-${product.id}`}>
                  {product.quantity}
                </span>
                <RemoveOneProduct productId={product.id} />
                Subtotal: {product.quantity * product.price}
                <SetQuantityToZeroButton productId={product.id} />
              </li>
            );
          } else {
            return undefined;
          }
        })}
      </ul>
      {renderTotalAmount(total)}
    </section>
  );
}
