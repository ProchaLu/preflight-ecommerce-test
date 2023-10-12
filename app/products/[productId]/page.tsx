// import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import AddQuantityToCart from './AddQuantityToCart';
import styles from './page.module.scss';

type Props = {
  params: {
    productId: number;
  };
};

export async function generateMetadata({ params }: Props) {
  const singleProduct = await getProductById(Number(params.productId));

  return {
    title: singleProduct ? singleProduct.name : '',
  };
}

export default async function Product({ params }: Props) {
  const singleProduct = await getProductById(Number(params.productId));

  if (!singleProduct) {
    return notFound();
  }
  return (
    <section className={styles.productContent}>
      <img
        data-test-id="product-image"
        src={`/images/productImages/${singleProduct.name}.png`}
        alt={`bag of coffee beans of the product ${singleProduct.name}`}
        width={600}
        height={600}
        className={styles.productImage}
      />
      <div className={styles.productDescription}>
        <h1 className={styles.h1}>{singleProduct.name}</h1>
        <p>
          {' '}
          <span className={styles.label}>Price:</span>
          <span className={styles.productInfo}>€</span>
          <span className={styles.productInfo} data-test-id="product-price">
            {singleProduct.price}
          </span>
        </p>
        <p>
          <span className={styles.label}>Origin:</span>{' '}
          <span className={styles.productInfo}>{singleProduct.origin}</span>
        </p>
        <p>
          <span className={styles.label}>Type:</span>{' '}
          <span className={styles.productInfo}>{singleProduct.type}</span>
        </p>
        <p>
          <span className={styles.label}>Flavour profile:</span>{' '}
          <span className={styles.productInfo}>
            {singleProduct.flavourProfile}
          </span>
        </p>
        <p className={styles.label}>
          {/* <span className={styles.productInfo}> */}
          {singleProduct.description} It is a long established fact that a
          reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
          {/* </span> */}
        </p>
        <AddQuantityToCart productId={singleProduct.id} />
      </div>
    </section>
  );
}
