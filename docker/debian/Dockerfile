FROM debian

ENV \
    DEBIAN_FRONTEND=noninteractive

RUN \
    apt-get update && \
    apt-get install -y --no-install-recommends --no-install-suggests \
        ca-certificates curl git vim xz-utils zip unzip bzip2 re2c supervisor zsh \
        autoconf file make g++ gcc libc-dev pkg-config bison \
        libxml2-dev libssl-dev libsqlite3-dev zlib1g-dev libbz2-dev libcurl4-openssl-dev libonig-dev \
        libpq-dev libreadline-dev libzip-dev libgmp-dev libldap2-dev libpng-dev libwebp-dev libjpeg-dev libxpm-dev \
        libc-client-dev libkrb5-dev libsasl2-dev libsodium-dev libargon2-dev libxslt-dev imagemagick libmagickcore-dev \
        libde265-dev libheif-dev wget libmemcached-dev

RUN \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update && \
    apt-get install -y --no-install-recommends --no-install-suggests \
        nodejs

RUN wget https://www.imagemagick.org/download/ImageMagick.tar.gz
RUN tar xf ImageMagick.tar.gz
RUN \
  cd ImageMagick* && \
  ./configure --with-heic=yes && \
  make && \
  make install && \
  ldconfig
RUN rm ImageMagick.tar.gz && rm -rf ImageMagick-*/

RUN \
    npm install -g npm && \
    npm install -g pnpm && \
    npm install -g yarn

RUN mkdir -p /etc/supervisor/conf.d

ADD rootfs /

CMD ["supervisord", "-c", "/etc/supervisor/supervisord.conf"]

WORKDIR /root
