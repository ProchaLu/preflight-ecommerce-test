#!/usr/bin/env bash

mkdir -p /postgres-volume/run/postgresql/data
chown postgres:postgres /postgres-volume/run/postgresql

su postgres -c "./alpine-postgresql-setup-and-start.sh"
