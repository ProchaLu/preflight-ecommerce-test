export function cartSumTotal(total: number, quantity: number, price: number) {
  return Number((total += quantity * price).toFixed(2));
}
