#!/bin/bash

# Set the working directory
WORK_DIR=$(cd $(dirname $0) && pwd)

# Check if the ./docker directory exists
if [ ! -d "$WORK_DIR/supabase/docker" ]; then
  echo "The ./supabase/docker directory does not exist!"
  exit 1
fi

# Copy the .env.example file to ./docker/.env
echo "Copying .env.example to ./supabase/docker/.env.example"
cp "$WORK_DIR/.env.example" "$WORK_DIR/supabase/docker/.env.example"

# Copy the docker-compose-supabase.yml to ./docker/docker-compose.yml
echo "Copying docker-compose-supabase.yml to ./supabase/docker/docker-compose.yml"
cp "$WORK_DIR/docker-compose-supabase.yml" "$WORK_DIR/supabase/docker/docker-compose.yml"


# Copy the full-schema.sql to ./supabase/docker/volumes/db/init/data.sql
echo "Copying full-schema.sql to ./supabase/docker/volumes/db/init/data.sql"
cp "$WORK_DIR/full-schema.sql" "$WORK_DIR/supabase/docker/volumes/db/init/data.sql"

# Execute the reset.sh script
echo "Executing ./supabase/docker/reset.sh"
cd "$WORK_DIR/supabase/docker"
bash "./reset.sh"

# Change to the docker directory and run docker-compose
echo "Running docker-compose up in ./supabase/docker"
docker compose up -d

git restore .

echo "Supabase initialization complete!"

# Run the Sim-ads docker
cd "$WORK_DIR"

echo "Stopping and removing all containers..."
docker compose down --rmi all --volumes --remove-orphans

docker compose up -d

echo "Sim-ads web deployed!"
