'use client';

import { useState } from 'react';
import { addQuantity } from './actions';
import styles from './AddQuantityToCart.module.scss';

type Props = {
  productId: number;
};

export default function SetSelectedQuantity(props: Props) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  return (
    <form className={styles.form}>
      <input
        type="number"
        value={selectedQuantity}
        min="1"
        data-test-id="product-quantity"
        onChange={(event) =>
          setSelectedQuantity(Number(event.currentTarget.value))
        }
        className={styles.input}
      />
      <button
        className={styles.cartButton}
        formAction={async () =>
          await addQuantity(props.productId, selectedQuantity)
        }
        data-test-id="product-add-to-cart"
      >
        Add to cart
      </button>
    </form>
  );
}
