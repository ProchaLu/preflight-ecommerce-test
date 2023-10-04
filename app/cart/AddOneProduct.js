'use client';

import { addOneToCart } from './actions';
import styles from './buttonStyles.module.scss';

export default function AddOneProduct(productId) {
  return (
    <button
      className={styles.button}
      onClick={async () => {
        await addOneToCart(productId);
      }}
    >
      +
    </button>
  );
}
