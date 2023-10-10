import { CartItem } from '../app/cart/actions';

export function updateCart(
  cart: CartItem[],
  productId: number,
  quantity: number,
) {
  const productToUpdate = cart.find((item: CartItem) => {
    return item.id === productId;
  });
  if (productToUpdate) {
    productToUpdate.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      quantity: quantity,
    });
  }
  return cart;
}
