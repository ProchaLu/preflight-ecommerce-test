#!/usr/bin/env bash

# Exit if any command exits with a non-zero exit code
set -o errexit

echo "Setting up PostgreSQL on Alpine Linux..."

echo "Creating folders for PostgreSQL and adding permissions for postgres user..."
export PGDATA=/postgres-volume/run/postgresql/data
# error without mkdir -p "$PGDATA"
# ➜  preflight git:(main) ✗ pnpm docker-run https://github.com/ProchaLu/preflight-ecommerce-test

# > @upleveled/preflight@5.0.2 docker-run /Users/lukas/Documents/UpLeveled/preflight/preflight
# > docker run preflight "https://github.com/ProchaLu/preflight-ecommerce-test"

# Cloning https://github.com/ProchaLu/preflight-ecommerce-test...
# Installing dependencies...
# Setting up PostgreSQL database on Preflight...
# Setting up PostgreSQL on Alpine Linux...
# Creating folders for PostgreSQL and adding permissions for postgres user...
# chmod: /postgres-volume/run/postgresql/data: No such file or directory
# file:///preflight/node_modules/.pnpm/execa@8.0.1/node_modules/execa/lib/error.js:60
#                 error = new Error(message);
#                         ^

# Error: Command failed with exit code 1: bash ./scripts/alpine-postgresql-setup-and-start.sh
#     at makeError (file:///preflight/node_modules/.pnpm/execa@8.0.1/node_modules/execa/lib/error.js:60:11)
#     at handlePromise (file:///preflight/node_modules/.pnpm/execa@8.0.1/node_modules/execa/index.js:124:26)
#     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
#     at async file:///preflight/clone-and-preflight.js:68:5 {
#   shortMessage: 'Command failed with exit code 1: bash ./scripts/alpine-postgresql-setup-and-start.sh',
#   command: 'bash ./scripts/alpine-postgresql-setup-and-start.sh',
#   escapedCommand: 'bash "./scripts/alpine-postgresql-setup-and-start.sh"',
#   exitCode: 1,
#   signal: undefined,
#   signalDescription: undefined,
#   stdout: undefined,
#   stderr: undefined,
#   cwd: 'project-to-check',
#   failed: true,
#   timedOut: false,
#   isCanceled: false,
#   killed: false
# }
mkdir -p "$PGDATA"

# Only allow postgres user access to data directory
chmod 700 "$PGDATA"
initdb -D "$PGDATA"

# Update PostgreSQL config path to use volume location if app has a volume
sed -i "s/#unix_socket_directories = '\/run\/postgresql'/unix_socket_directories = '\/postgres-volume\/run\/postgresql'/g" /postgres-volume/run/postgresql/data/postgresql.conf || echo "PostgreSQL volume not mounted, running database as non-persistent (new deploys erase changes not saved in migrations)"

# Log to syslog, which is rotated (older logs automatically deleted)
sed "/^[# ]*log_destination/clog_destination = 'syslog'" -i "$PGDATA/postgresql.conf"

# Configure PostgreSQL to listen for connections from any address
echo "listen_addresses='*'" >> $PGDATA/postgresql.conf

echo "Starting PostgreSQL..."
pg_ctl start -D "$PGDATA"

echo "Creating database, user and schema..."
psql -h /postgres-volume/run/postgresql  -U postgres postgres << SQL
  CREATE DATABASE $PGDATABASE;
  CREATE USER $PGUSERNAME WITH ENCRYPTED PASSWORD '$PGPASSWORD';
  GRANT ALL PRIVILEGES ON DATABASE $PGDATABASE TO $PGUSERNAME;
  \\connect $PGDATABASE;
  CREATE SCHEMA $PGUSERNAME AUTHORIZATION $PGUSERNAME;
SQL
