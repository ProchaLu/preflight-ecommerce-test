import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import coffeeLogo from '../public/images/coffee-beans.png';
import shoppingCartIcon from '../public/images/shopping-cart.svg';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';
import { CartItem } from './cart/actions';

export const metadata = {
  title: { default: 'Home | Covfefe', template: '%s | Covfefe' },
  description: 'Get your caffein here!',
};

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const cartCookies = await getCookie('cart');

  const cart = !cartCookies ? [] : parseJson(cartCookies);

  const quantityInCart = cart.reduce((total: number, item: CartItem) => {
    return total + item.quantity;
  }, 0);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon/icon-apple-touch.png" />
      </head>
      <body>
        <header>
          <nav className="navBar">
            <Link className="hover-underline-animation" href="/">
              Home
            </Link>
            <Link
              className="hover-underline-animation"
              href="/products"
              data-test-id="products-link"
            >
              Products
            </Link>
          </nav>
          <Link className="logo" href="/">
            <Image src={coffeeLogo} alt="store-logo" width={50} height={50} />
            COVFEFE
          </Link>
          <div className="cartWrapper">
            <Link
              className="hover-underline-animation"
              href="/cart"
              data-test-id="cart-link"
            >
              <Image src={shoppingCartIcon} alt="covfefe logo" />
              <span data-test-id="cart-count"> {quantityInCart}</span>
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <Link href="/">Impressum</Link>
          <div className="attribution">
            Images designed by{' '}
            <Link href="https://www.freepik.com/">Freepik</Link> &{' '}
            <Link href="https://www.canva.com/">Canva AI</Link>
          </div>
          <div className="foundingYear">2023 Covfefe</div>
        </footer>
      </body>
    </html>
  );
}
