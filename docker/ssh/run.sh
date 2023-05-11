#!/usr/bin/env bash

docker build -t leightcore/ssh .
docker run -it --rm leightcore/ssh
