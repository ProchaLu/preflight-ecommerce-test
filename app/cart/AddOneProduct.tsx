'use client';

import { addOneToCart } from './actions';
import styles from './buttonStyles.module.scss';

export type Props = {
  productId: number;
};

export default function AddOneProduct({ productId }: Props) {
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
