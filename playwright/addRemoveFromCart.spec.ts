import test, { expect } from '@playwright/test';

// go to main page
test('add something to cart, change quantity and remove item', async ({
  page,
}) => {
  await page.goto('http://localhost:3000');

  await expect(page.getByRole('link', { name: 'Visit shop' })).toBeVisible();

  // click on Products
  await page.getByTestId('products-link').click();
  // click on single product
  await page.getByTestId('product-3').click();
  await expect(page).toHaveURL('http://localhost:3000/products/3');
  // click on input field
  await page.getByTestId('product-quantity').click();
  // type in 2
  await page.getByTestId('product-quantity').fill('2');
  // click on add button
  await page.getByTestId('product-add-to-cart').click();
  // cookie should be 2
  await expect(
    page.locator('[data-test-id="cart-link"] > [data-test-id="cart-count"]'),
  ).toHaveText('2');
  // click on cart
  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');
  // click on minus
  await page.getByRole('button', { name: '-' }).click();
  // quantitiy should be 1
  await expect(page.getByTestId('cart-product-quantity-3')).toHaveText('1');
  // click on remove
  await page.getByRole('button', { name: 'X' }).click();
  // cart should be empty
  await expect(
    page.getByText('Your shopping cart is currently empty'),
  ).toBeVisible();
});
