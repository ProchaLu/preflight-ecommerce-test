'use client';

import { removeProduct } from './actions';
import styles from './buttonStyles.module.scss';

export default function RemoveProductFromCart(productId) {
  return (
    <button
      className={styles.button}
      onClick={async () => await removeProduct(productId)}
    >
      X
    </button>
  );
}
