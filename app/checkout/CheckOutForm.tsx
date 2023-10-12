'use client';

import { redirect, useRouter } from 'next/navigation';
import { clearCookies } from '../../util/cookies';
import styles from './CheckOutForm.module.scss';

export default function CheckOutForm() {
  const router = useRouter();

  return (
    <form className={styles.form}>
      <div>
        <fieldset>
          <h1 className={styles.header}>Personal Information</h1>
          <div className={styles.fullName}>
            <input
              data-test-id="checkout-first-name"
              id="firstName"
              pattern="[\p{Letter}./- ]+"
              required
              placeholder="First name"
            />
            <input
              data-test-id="checkout-last-name"
              id="lastName"
              pattern="[\p{Letter}./- ]+"
              required
              placeholder="Last name"
            />
          </div>
          <input
            data-test-id="checkout-email"
            id="email"
            type="email"
            placeholder="E-mail address"
            required
            className={styles.fullLine}
          />
        </fieldset>
        <fieldset>
          <h1 className={`${styles.header} ${styles.moreSpacing}`}>
            Shipping Address
          </h1>
          <input
            data-test-id="checkout-address"
            id="address"
            pattern="[\p{Letter}0-9./- ]+"
            required
            placeholder="Address"
            className={styles.fullLine}
          />
          <div className={styles.cityCode}>
            <input
              data-test-id="checkout-city"
              id="city"
              pattern="[\p{Letter}./- ]+"
              required
              placeholder="City"
            />
            <input
              data-test-id="checkout-postal-code"
              id="postalCode"
              pattern="[0-9]+"
              required
              placeholder="Postal code"
            />
          </div>
          <input
            data-test-id="checkout-country"
            id="country"
            pattern="[\p{Letter}./- ]+"
            required
            placeholder="Country"
            className={styles.fullLine}
          />
        </fieldset>
      </div>
      <fieldset>
        <h1 className={styles.header}>Payment Information</h1>
        <input
          data-test-id="checkout-credit-card"
          id="creditCard"
          maxLength={16}
          minLength={16}
          pattern="[0-9]+"
          required
          placeholder="Card number"
          className={styles.fullLine}
        />
        <div className={styles.cardDetails}>
          <input
            data-test-id="checkout-expiration-date"
            id="expirationDate"
            pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
            placeholder="Expiration date (MM / YY)"
            required
          />
          <input
            data-test-id="checkout-security-code"
            id="securityCode"
            maxLength={3}
            minLength={3}
            pattern="[0-9]+"
            required
            placeholder="Security code"
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.button}
            formAction={async () => {
              await clearCookies();
              router.push('/thankyou');
            }}
            data-test-id="checkout-confirm-order"
          >
            Confirm Order
          </button>
          <button
            className={`${styles.button} ${styles.whiteButton}`}
            formAction={() => redirect('/products')}
            formNoValidate
          >
            Continue shopping
          </button>
        </div>
      </fieldset>
    </form>
  );
}
