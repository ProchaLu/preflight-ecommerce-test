import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import coffeeLogo from '../public/images/coffee-logo.png';
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
      <body>
        <CookieBanner />
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/products" data-test-id="products-link">
              Products
            </Link>
            {/* wäre cool wenn das so runterfahren könnte & schon die einzelnen produkte anzeigt */}
          </nav>
          <div>
            <Image src={coffeeLogo} alt="store-logo" width={50} height={50} />
            COVFEFE
          </div>
          {/* searchbar */}
          <Link href="/cart" data-test-id="cart-link">
            Your cart: <span data-test-id="cart-count">{quantityInCart}</span>
          </Link>
        </header>
        <main>{children}</main>
        <footer>
          <Link href="/">Impressum</Link>
          <div>
            Images designed by{' '}
            <Link href="https://www.freepik.com/">Freepik</Link>
          </div>
          <div>2023 Covfefe</div>
        </footer>
      </body>
    </html>
  );
}
