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

// export const deleteProductById = cache(async (id: number) => {
//   const [product] = await sql<Product[]>`
//     DELETE FROM
//       products
//     WHERE
//       id = ${id}
//     RETURNING *
//   `;

//   return product;
// });

// export const createProduct = cache(
//   async (
//     name: string,
//     type: string,
//     origin: string,
//     flavourProfile: string,
//     price: number,
//     description: string,
//   ) => {
//     const [product] = await sql<Product[]>`
//     INSERT INTO products
//       (name, type, origin, flavour_profile, price, description)
//     VALUES
//       (${name}, ${type}, ${origin}, ${flavourProfile}, ${price}, ${description})
//     RETURNING *
//   `;

//     return product;
//   },
// );

// export const updateProductById = cache(
//   async (
//     id: number,
//     name: string,
//     type: string,
//     origin: string,
//     flavourProfile: string,
//     price: number,
//     description: string,
//   ) => {
//     const [product] = await sql<Product[]>`
//     UPDATE
//       products
//     SET
//       first_name = ${name},
//       type = ${type},
//       origin = ${origin},
//       flavour_profile = ${flavourProfile},
//       price = ${price},
//       description = ${description}
//     WHERE id = ${id}
//     RETURNING *
//   `;
//     return product;
//   },
// );
