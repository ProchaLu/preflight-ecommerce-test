import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import AddQuantityToCart from './AddQuantityToCart';
import styles from './page.module.scss';

export async function generateMetadata({ params }) {
  const singleProduct = await getProductById(Number(params.productId));

  return {
    title: singleProduct ? singleProduct.name : '',
  };
}

export default async function Product({ params }) {
  const singleProduct = await getProductById(Number(params.productId));

  if (!singleProduct) {
    return notFound();
  }
  return (
    <section className={styles.productContent}>
      <Image
        data-test-id="product-image"
        src={`/images/productImages/${singleProduct.name}.png`}
        alt="coffee beans product-image"
        width={600}
        height={600}
      />
      <div className={styles.productDescription}>
        <h1 className={styles.h1}>{singleProduct.name}</h1>
        <p>
          {' '}
          <span className={styles.label}>Price:</span>
          <span data-test-id="product-price">{singleProduct.price}</span>€
        </p>
        <p>
          <span className={styles.label}>Origin:</span> {singleProduct.origin}
        </p>
        <p>
          <span className={styles.label}>Type:</span> {singleProduct.type}
        </p>
        <p>
          <span className={styles.label}>Flavour profile:</span>{' '}
          {singleProduct.flavourProfile}
        </p>
        <p>{singleProduct.description}</p>
        <AddQuantityToCart productId={singleProduct.id} />
      </div>
    </section>
  );
}
