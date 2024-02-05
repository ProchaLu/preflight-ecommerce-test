#!/usr/bin/env bash

echo "Setting up PostgreSQL on Fly.io..."
mkdir -p /postgres-volume/run/postgresql/data
chown postgres:postgres /postgres-volume/run/postgresql
chown postgres:postgres /app/scripts/alpine-postgresql-setup-and-start.sh
su postgres -c "/app/scripts/alpine-postgresql-setup-and-start.sh"
