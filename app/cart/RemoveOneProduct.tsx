'use client';

import { removeOneFromCart } from './actions';
import { Props } from './AddOneProduct';
import styles from './buttonStyles.module.scss';

export default function RemoveOneProduct({ productId }: Props) {
  return (
    <button
      className={styles.button}
      onClick={async () => await removeOneFromCart(productId)}
    >
      -
    </button>
  );
}
