import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  type: string;
  origin: string;
  flavourProfile: string[];
  price: number;
  description: string | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY key generated always AS identity,
      name varchar(30) NOT NULL,
      type varchar(30) NOT NULL,
      origin varchar(30) NOT NULL,
      flavour_profile VARCHAR[] NOT NULL,
      price float NOT NULL,
      description varchar(200)
    );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE products `;
}
