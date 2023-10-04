'use client';

import { removeOneFromCart } from './actions';
import styles from './buttonStyles.module.scss';

export default function RemoveOneProduct(productId) {
  return (
    <button
      className={styles.button}
      onClick={async () => await removeOneFromCart(productId)}
    >
      -
    </button>
  );
}
