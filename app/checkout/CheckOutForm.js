'use client';

import Link from 'next/link';

export default function CheckOutForm() {
  return (
    <form>
      <div>
        <label htmlFor="firstName">First name:</label>
        <input data-test-id="checkout-first-name" id="firstName" required />
      </div>
      <div>
        <label htmlFor="lastName">Last name:</label>
        <input data-test-id="checkout-last-name" id="lastName" required />
      </div>
      <div>
        <label htmlFor="email">E-mail-address:</label>
        <input data-test-id="checkout-email" id="email" type="email" required />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input data-test-id="checkout-address" id="address" required />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input data-test-id="checkout-city" id="city" required />
      </div>
      <div>
        <label htmlFor="postalCode">Postal code:</label>
        <input data-test-id="checkout-postal-code" id="postalCode" required />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input data-test-id="checkout-country" id="country" required />
      </div>
      <div>
        <label htmlFor="creditCard">Credit card:</label>
        <input
          data-test-id="checkout-credit-card"
          id="creditCard"
          maxLength="16"
          minLength="16"
          required
        />
      </div>
      <div>
        <label htmlFor="expirationDate">Expiration date:</label>
        <input
          data-test-id="checkout-expiration-date"
          id="expirationDate"
          required
        />
      </div>
      <div>
        <label htmlFor="securityCode">Security code</label>
        <input
          data-test-id="checkout-security-code"
          id="securityCode"
          maxLength="3"
          minLength="3"
          required
        />
      </div>
      <div>
        <button formAction data-test-id="checkout-confirm-order">
          Confirm Order
        </button>
      </div>
    </form>
  );
}

// The Confirm Order button needs to have the HTML attribute data-test-id="checkout-confirm-order"

// Clicking on the Confirm Order button should empty the cart and navigate to the Thank You page
