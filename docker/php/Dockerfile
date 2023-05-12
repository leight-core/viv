FROM leightcore/debian

RUN \
    apt-get update && \
    apt-get install -y --no-install-recommends --no-install-suggests \
        nginx xz-utils re2c autoconf file make g++ gcc libc-dev pkg-config bison \
        libxml2-dev libssl-dev libsqlite3-dev zlib1g-dev libbz2-dev libcurl4-openssl-dev libonig-dev \
        libpq-dev libreadline-dev libzip-dev libgmp-dev libldap2-dev libpng-dev libwebp-dev libjpeg-dev libxpm-dev \
        libc-client-dev libkrb5-dev libsasl2-dev libsodium-dev libargon2-dev libxslt-dev imagemagick libmagickcore-dev \
        libde265-dev libheif-dev libmemcached-dev patch cron sendmail \
        msmtp procps libfcgi0ldbl libc-client2007e-dev

RUN wget https://www.imagemagick.org/download/ImageMagick.tar.gz
RUN tar xf ImageMagick.tar.gz
RUN \
    cd ImageMagick* && ./configure --with-heic=yes && \
    make && \
    make install && \
    ldconfig && \
    rm -rf ImageMagick-*/

ADD rootfs /

# take composer from official composer imsage
COPY --from=composer /usr/bin/composer /usr/local/bin/composer
