import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import bialetti from '../../public/images/moka-pot.png';
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
      <>
        <div className={styles.renderTotal}>
          <p className={styles.total}>
            Total:
            <span className={styles.product} data-test-id="cart-total">
              {total}
            </span>
            <span className={styles.product}>€</span>
          </p>
        </div>
        <Link className={styles.checkoutLink} href="/checkout">
          Proceed to Checkout
        </Link>
      </>
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
    <div className={styles.cartPage}>
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
                  <div className={styles.partOne}>
                    <span className={styles.product}>{product.name}:</span>
                  </div>
                  <div className={styles.partTwo}>
                    Quantity: <AddOneProduct productId={product.id} />
                    <span
                      className={styles.product}
                      data-test-id={`cart-product-quantity-${product.id}`}
                    >
                      {product.quantity}
                    </span>
                    <RemoveOneProduct productId={product.id} />
                  </div>
                  <div className={styles.partThree}>
                    Subtotal:{' '}
                    <span className={styles.product}>
                      {product.quantity * product.price}€
                    </span>
                  </div>
                  <div className={styles.partFour}>
                    <SetQuantityToZeroButton productId={product.id} />
                  </div>
                </li>
              );
            } else {
              return undefined;
            }
          })}
        </ul>
        {renderTotalAmount(total)}
      </section>
      <section className={styles.imageSection}></section>
    </div>
  );
}
