import test, { expect } from '@playwright/test';

// reuse parts from prior test until on cart page with items in cart
test('add something to cart, go to checkout, complete input fields and go to thank you page', async ({
  page,
}) => {
  await page.goto('http://localhost:3000');

  await expect(page.getByRole('link', { name: 'Fail test' })).toBeVisible();

  // click on Products
  await page.getByTestId('products-link').click();
  // click on single product
  await page.getByTestId('product-2').click();
  await expect(page).toHaveURL('http://localhost:3000/products/2');
  // click on input field
  await page.getByTestId('product-quantity').click();
  // type in 2
  await page.getByTestId('product-quantity').fill('3');
  // click on add button
  await page.getByTestId('product-add-to-cart').click();
  // cookie should be 2
  await expect(
    page.locator('[data-test-id="cart-link"] > [data-test-id="cart-count"]'),
  ).toHaveText('3');
  // click on cart
  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');
  // click on checkout
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
  await expect(page).toHaveURL('http://localhost:3000/checkout');
  // create input for all those fields
  await page.getByTestId('checkout-first-name').click();
  await page.getByTestId('checkout-first-name').fill('John');

  await page.getByTestId('checkout-last-name').click();
  await page.getByTestId('checkout-last-name').fill('Doe');

  await page.getByTestId('checkout-email').click();
  await page.getByTestId('checkout-email').fill('test@email.com');

  await page.getByTestId('checkout-address').click();
  await page.getByTestId('checkout-address').fill('Testgasse 5');

  await page.getByTestId('checkout-city').click();
  await page.getByTestId('checkout-city').fill('Vienna');

  await page.getByTestId('checkout-postal-code').click();
  await page.getByTestId('checkout-postal-code').fill('1140');

  await page.getByTestId('checkout-country').click();
  await page.getByTestId('checkout-country').fill('Austria');

  await page.getByTestId('checkout-credit-card').click();
  await page.getByTestId('checkout-credit-card').fill('4111111111111111');

  await page.getByTestId('checkout-expiration-date').click();
  await page.getByTestId('checkout-expiration-date').fill('12/23');

  await page.getByTestId('checkout-security-code').click();
  await page.getByTestId('checkout-security-code').fill('123');
  // go to confirm order
  await page.getByTestId('checkout-confirm-order').click();

  // land on thank you page
  await expect(page).toHaveURL('http://localhost:3000/thankyou');
  // thank you visible
  await expect(page.getByText('Thank you for shopping with us!')).toBeVisible();
  // cookies to zero
  await expect(
    page.locator('[data-test-id="cart-link"] > [data-test-id="cart-count"]'),
  ).toHaveText('0');
});
