#!/bin/bash

set -euo pipefail

BUILD_NUMBER=$1
DOCKER_IMAGE=docker.vgasoft.vn/vgasoft-prod:"$BUILD_NUMBER"
ENV_FILE=/data/envproduction/vgasoft.vn/.env.production
CONTAINER_NAME=vgasoft-prod

if [ ! -f "$ENV_FILE" ]; then
    echo "$ENV_FILE does not existed. Exit."
    exit 1
fi

PORT=$(awk 'sub(/^[ \t]*PORT=/,""){print $1}' $ENV_FILE)
if [ -z "$PORT" ]
then
      echo "Cannot get PORT from .env.production file. Exit."
      exit 1
fi
echo "Exposed port: $PORT"

containerId=$(docker ps -qa --filter "name=$CONTAINER_NAME")
if [ -n "$containerId" ]; then
  echo "Stop and remove existing container..."
  docker stop $CONTAINER_NAME | xargs docker rm
fi

docker run -d --init --name "$CONTAINER_NAME" \
       --mount type=bind,source="$ENV_FILE",target=/usr/src/app/.env.production \
       --restart always \
       -p "$PORT":"$PORT" \
       "$DOCKER_IMAGE" npm run start