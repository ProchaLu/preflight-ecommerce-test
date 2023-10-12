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

- Clone the GitHub repo locally

Database setup

- Install PostgreSQL
- Create file called .env and create credentials for database name/user/password according to .env.example file looking like this:

PGHOST=localhost
PGDATABASE=<nameOfYourDatabase>
PGUSERNAME=<nameOfYourUsername>
PGPASSWORD=<nameOfYourPassword>

Required dependencies:

- Run pnpm install

Migrate databases:

- Run pnpm migrate up

Start server:

- Run pnpm start

Deployment instructions:
For the deployment of this project fly.io was used, the following steps are important for a successful deployment

- Sign up on fly.io
- Create app
- Choose region
- HIER FEHLEN NOCH STEPS

# Screenshots

Clone the repository with git clone <repo>
Setup the database by downloading and installing PostgreSQL
Create a user and a database
Create a new file .env
Copy the environment variables from .env-example into .env
Replace the placeholders xxxxx with your username, password and name of database
Install dotenv-cli with yarn add dotenv-cli
Run yarn install in your command line
Run the migrations with yarn migrate up
Start the server by running yarn dev
