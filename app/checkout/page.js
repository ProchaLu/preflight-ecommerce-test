import React from 'react';
import CheckOutForm from './CheckOutForm';

export const metadata = {
  title: 'Check out',
  description: 'Almost finished with your order',
};

export default function Checkout() {
  return (
    <div>
      <p>This is checkout </p>
      <CheckOutForm />
    </div>
  );
}
