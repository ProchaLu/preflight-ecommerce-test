import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';
import AddQuantityToCart from './AddQuantityToCart';

export function generateMetadata({ params }) {
  const singleProduct = getProduct(Number(params.productId));

  return {
    title: singleProduct ? singleProduct.name : '',
  };
}

export default function Product({ params }) {
  const singleProduct = getProduct(Number(params.productId));

  if (!singleProduct) {
    return notFound();
  }
  return (
    <div>
      <h1>{singleProduct.name}</h1>
      {/* <Image src=`images/${singleProduct.firstName data-test-id="product-image"}` */}
      {/* <p data-test-id="product-price">NUMBER WITHOUT CURRENCY</p> */}
      <AddQuantityToCart productId={singleProduct.id} />
    </div>
  );
}
