import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../database/products.js';
import styles from './page.module.css';

export default function Home() {
  const products = getProducts();

  return (
    <main className={styles.main}>
      <div>
        <h1>These are my products</h1>

        {products.map((product) => {
          return (
            <div key={`product-div-${product.id}`}>
              <Link href={`/${product.id}`}>{product.name}</Link>
              {/* <Image
                src={`/images/${product.name}.png`}
                alt={product.firstName}
                width={200}
                height={200}
              /> */}
            </div>
          );
        })}
      </div>
    </main>
  );
}
