#!/usr/bin/env bash

# Exit if any command exits with a non-zero exit code
set -o errexit

echo "Setting up PostgreSQL on Alpine Linux..."

echo "Adding permissions for postgres user..."
export PGDATA=/postgres-volume/run/postgresql/data

# Only allow postgres user access to data directory
chmod 0700 /postgres-volume/run/postgresql "$PGDATA"
initdb -D "$PGDATA"

echo 'update unix socket directory'

# check if file exists
if [ -f /postgres-volume/run/postgresql/data/postgresql.conf ]; then
  echo "file exists"
else
  echo "file does not exist"
fi

# Update PostgreSQL config path to use volume location if app has a volume
sed -i "s|#unix_socket_directories = '/run/postgresql'|unix_socket_directories = '/postgres-volume/run/postgresql/'|g" /postgres-volume/run/postgresql/data/postgresql.conf || echo "PostgreSQL volume not mounted, running database as non-persistent (new deploys erase changes not saved in migrations)"

echo "updated with sed"

cat /postgres-volume/run/postgresql/data/postgresql.conf

# Log to syslog, which is rotated (older logs automatically deleted)
# sed "/^[# ]*log_destination/clog_destination = 'syslog'" -i "$PGDATA/postgresql.conf"

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
