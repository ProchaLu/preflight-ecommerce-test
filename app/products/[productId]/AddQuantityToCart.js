'use client';

import { useState } from 'react';
import { addQuantity } from './actions';

export default function SetSelectedQuantity(props) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  return (
    <form>
      <input
        type="number"
        value={selectedQuantity}
        min="1"
        data-test-id="product-quantity"
        onChange={(event) => setSelectedQuantity(event.currentTarget.value)}
      />
      <button
        formAction={async () =>
          await addQuantity(props.productId, Number(selectedQuantity))
        }
        data-test-id="product-add-to-cart"
      >
        Add to cart
      </button>
    </form>
  );
}
