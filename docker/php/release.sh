#!/usr/bin/env bash
set -e

docker build -t leightcore/php:base .
docker push leightcore/php:base
