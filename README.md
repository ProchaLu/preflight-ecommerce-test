## Next.js: E-commerce store - Coffee

This is a full-stack application representing a fake webshop selling coffee beans.

The shops styling is optimised for screens with a width > 900 px, implementing responsiveness for smaller screens is planned in the future.

# Functionalities

- langing page
- products page
- single product page
- shopping cart page
- checkout page
- thank you page for a completed order

# Technologies used

- Next.js
- React
- Node.js
- Typescript
- HTML
- Javascript
- SASS
- Jest unit tests
- Playwright end-to-end-tests
- PostgreSQL

# Setup instructions:

- `Clone` the respository
- Install PostgresQL
- Setup the database (database + user)
- Create a `.env file` and set it up like this
  ````PGHOST=localhost
  PGDATABASE=<nameOfYourDatabase>
  PGUSERNAME=<nameOfYourUsername>
  PGPASSWORD=<nameOfYourPassword>```
  ````
- Run `pnpm install` to install required dependencies
- Run `pnpm migrate` up
- Run `pnpm dev` to start the server

# Deployment instructions:

- Sign up on fly.io (+ add payment method)
- Run `flyctl auth login` and enter your credentials
  after successfull login you will see the message `successfully logged in as <your email>` in the terminal
- Run `flyctl apps create --name <app name> --machines` to create an app
- Create secrets by running `flyctl secrets set PGHOST=localhost PGDATABASE=<databasename> PGUSERNAME=<username> PGPASSWORD=<password>`
- Create volume for the database by running `flyctl volumes create postgres --size 1 --region otp`
- Deploy by running `flyctl deploy`

# Screenshots

- Products page
  ![Product page](./public/screenshots/productpage.avif)

- Singe product page
  ![Single product page](./public/screenshots/singleproductpage.avif)

- Checkout page
  ![Checkout page](./public/screenshots/checkoutpage.avif)
