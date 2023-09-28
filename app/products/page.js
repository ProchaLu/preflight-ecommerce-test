import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products',
  description: "Covfefe's products",
};

export default function page() {
  const products = getProducts();

  return (
    <div>
      <h1>These are my products</h1> {/* h1 is necessary for drone */}
      <section className={styles.productsSection}>
        {products.map((product) => {
          return (
            <div
              key={`product-div-${product.id}`}
              className={styles.productCard}
            >
              <Link
                href={`/products/${product.id}`}
                data-test-id={`product-${product.id}`}
              >
                <Image
                  src={`/images/productImages/${product.name}.png`}
                  alt={product.name}
                  width={300}
                  height={300}
                />
                <p>{product.name}</p>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}
