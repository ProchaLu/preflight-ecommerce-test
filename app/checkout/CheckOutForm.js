'use client';

import { redirect } from 'next/navigation';
import { clearCookies } from './actions';

export default function CheckOutForm() {
  return (
    <form>
      <div>
        <label htmlFor="firstName">First name:</label>
        <input
          data-test-id="checkout-first-name"
          id="firstName"
          pattern="\p{Letter}+"
          required
          placeholder="First name"
        />
      </div>
      <div>
        <label htmlFor="lastName">Last name:</label>
        <input
          data-test-id="checkout-last-name"
          id="lastName"
          pattern="\p{Letter}+"
          required
          placeholder="Last name"
        />
      </div>
      <div>
        <label htmlFor="email">E-mail-address:</label>
        <input data-test-id="checkout-email" id="email" type="email" required />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          data-test-id="checkout-address"
          id="address"
          pattern="[\p{Letter}0-9./-]+"
          required
          placeholder="Address"
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          data-test-id="checkout-city"
          id="city"
          pattern="\p{Letter}+"
          required
          placeholder="City"
        />
      </div>
      <div>
        <label htmlFor="postalCode">Postal code:</label>
        <input
          data-test-id="checkout-postal-code"
          id="postalCode"
          pattern="[0-9]+"
          required
          placeholder="Postal code"
        />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input
          data-test-id="checkout-country"
          id="country"
          pattern="\p{Letter}+"
          required
          placeholder="Country"
        />
      </div>
      <div>
        <label htmlFor="creditCard">Credit card:</label>
        <input
          data-test-id="checkout-credit-card"
          id="creditCard"
          maxLength="16"
          minLength="16"
          pattern="[0-9]+"
          required
          placeholder="Card number"
        />
      </div>
      <div>
        <label htmlFor="expirationDate">Expiration date:</label>
        <input
          data-test-id="checkout-expiration-date"
          id="expirationDate"
          pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
          placeholder="MM / YY"
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
          pattern="[0-9]+"
          required
          placeholder="CVC"
        />
      </div>
      <div>
        <button
          formAction={async () => {
            await clearCookies();
            redirect('/thankyou');
          }}
          data-test-id="checkout-confirm-order"
        >
          Confirm Order
        </button>
      </div>
    </form>
  );
}
