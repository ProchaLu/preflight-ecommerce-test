import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import coffeeLogo from '../public/images/coffee-beans.png';
import shoppingCartIcon from '../public/images/shopping-cart.svg';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';
import CookieBanner from './CookieBanner';

export const metadata = {
  title: { default: 'Home | Covfefe', template: '%s | Covfefe' },
  description: 'Get your caffein here!',
};

export default function RootLayout({ children }) {
  const cartCookies = getCookie('cart');

  const cart = !cartCookies ? [] : parseJson(cartCookies);

  const quantityInCart = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CookieBanner className="cookies" />
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
            {/* wäre cool wenn das so runterfahren könnte & schon die einzelnen produkte anzeigt */}
          </nav>
          <Link className="logo" href="/">
            <Image src={coffeeLogo} alt="store-logo" width={50} height={50} />
            COVFEFE
          </Link>
          {/* searchbar */}
          <div className="cartWrapper">
            <Link
              className="hover-underline-animation"
              href="/cart"
              data-test-id="cart-link"
            >
              <Image src={shoppingCartIcon} />
              <span data-test-id="cart-count"> {quantityInCart}</span>
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <Link href="/">Impressum</Link>
          <div className="attribution">
            Images designed by{' '}
            <Link href="https://www.freepik.com/">Freepik</Link>
          </div>
          <div className="foundingYear">2023 Covfefe</div>
        </footer>
      </body>
    </html>
  );
}
