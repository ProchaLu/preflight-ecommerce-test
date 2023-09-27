import Link from 'next/link';
import { getProducts } from '../../database/products';

export const metadata = {
  title: 'Products',
  description: "Covfefe's products",
};

export default function page() {
  const products = getProducts();

  return (
    <div>
      <h1>These are my products</h1> {/*h1 is necessary for drone */}
      {products.map((product) => {
        return (
          <div key={`product-div-${product.id}`}>
            <Link
              href={`/products/${product.id}`}
              data-test-id={`product-${product.id}`}
            >
              {product.name}
            </Link>
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
  );
}
