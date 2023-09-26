import { notFound } from 'next/navigation';
import { getProduct } from '../../database/products';

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
      This is your product {singleProduct.name}
      {/* <Image src=`images/${singleProduct.firstName}` */}
    </div>
  );
}
