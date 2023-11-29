import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products',
  description: "Covfefe's products",
};

export default async function Page() {
  const products = await getProducts();

  return (
    <div className={styles.pageContent}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.header}>Let us spill our beans...</h1>
      </div>
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
                className={styles.zoom}
              >
                <img
                  src={`/images/productImages/${product.name}.avif`}
                  alt={product.name}
                  width={300}
                  height={300}
                />
                <div className={styles.productNameAndPrice}>
                  <p>{product.name}</p> <p>{product.price}€</p>
                </div>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}
