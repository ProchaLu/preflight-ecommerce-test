'use client';

import { removeProduct } from './actions';
import { Props } from './AddOneProduct';
import styles from './buttonStyles.module.scss';

export default function RemoveProductFromCart({ productId }: Props) {
  return (
    <button
      className={styles.button}
      onClick={async () => await removeProduct(productId)}
    >
      X
    </button>
  );
}
