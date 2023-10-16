import { CartItem } from '../app/cart/actions';

// check if product that got put in the cart already exists in the cart and increment it accordingly or create new product in cart
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
