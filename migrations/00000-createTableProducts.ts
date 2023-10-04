import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  type: string;
  origin: string | null;
  flavourProfile: string[];
  price: number;
  description: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(30) NOT NULL,
      type varchar(30) NOT NULL,
      origin varchar(30) NOT NULL,
      flavour_profile varchar[] NOT NULL,
      price float NOT NULL,
      description varchar(200)
    );
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE products
  `;
}
