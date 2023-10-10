import { CartItem } from '../app/cart/actions';
import { Product } from '../migrations/00000-createTableProducts';

export function mergeCookiesWithProducts(
  products: Product[],
  cart: CartItem[],
) {
  const mergedProductsArray = products.map((product: Product) => {
    const matchingWithProduct = cart.find(
      (item: CartItem) => product.id === item.id,
    );
    if (!matchingWithProduct) {
      return null;
    }
    return { ...product, quantity: matchingWithProduct.quantity };
  });
  return mergedProductsArray;
}
