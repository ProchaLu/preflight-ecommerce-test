#!/usr/bin/env bash

echo "Setting up PostgreSQL on Fly.io..."
mkdir -p /postgres-volume/run/postgresql/data
chown postgres:postgres /postgres-volume/run/postgresql
chown postgres:postgres /app/scripts/alpine-postgresql-setup-and-start.sh
chmod +x /app/scripts/alpine-postgresql-setup-and-start.sh
su -c "chown postgres:postgres /postgres-volume/run/postgresql/data"
su postgres -c "/app/scripts/alpine-postgresql-setup-and-start.sh"
