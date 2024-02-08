import 'server-only';
import { cache } from 'react';
import { sql } from '../database/connect';
import { Product } from '../migrations/00000-createTableProducts';

export const getProducts = cache(async () => {
  // return products;
  const products = await sql<Product[]>`
    SELECT * FROM products
  `;
  return products;
});

export const getProductById = cache(async (id: number) => {
  // Postgres always returns an array
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
});
