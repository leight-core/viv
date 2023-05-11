FROM leightcore/debian as build

# setup mandatory environment variables
ENV \
    PHP_INI_DIR=/usr/local/etc/php \
    PHP_VERSION=8.2.6

WORKDIR /usr/src
RUN \
    curl -SLk "https://php.net/get/php-$PHP_VERSION.tar.xz/from/this/mirror" | tar -Jx --strip-components=1

# download and build PHP
WORKDIR /usr/src
RUN \
    ./configure --help
RUN \
    ./configure \
		--with-config-file-path="$PHP_INI_DIR" \
		--with-config-file-scan-dir="$PHP_INI_DIR/conf.d" \
		--enable-fpm \
		--with-fpm-user=www-data \
		--with-fpm-group=www-data \
		--disable-cgi \
		--with-pdo_mysql \
		--with-pdo_pgsql \
		--with-mysqli \
		--with-kerberos \
		--enable-shmop \
		--with-curl \
		--with-bz2 \
		--enable-dba \
		--enable-exif \
		--enable-ftp \
		--enable-soap \
		--with-pear \
		--enable-gd \
		--with-webp \
		--with-jpeg \
		--with-xpm \
		--enable-gd-jis-conv \
		--with-gettext \
		--enable-phar \
		--with-gmp \
		--with-imap \
		--with-imap-ssl \
		--with-mhash \
		--enable-intl \
		--enable-sockets \
		--with-sodium \
		--with-password-argon2 \
		--with-xsl \
		--with-zip \
		--enable-mbstring \
		--with-openssl \
		--with-system-ciphers \
		--enable-bcmath \
		--enable-calendar \
		--with-readline \
		--with-zlib \
		--with-ldap \
		--with-ldap-sasl \
	&& make -j"$(nproc)" \
	&& make install \
	&& /usr/src/build/shtool install -c ext/phar/phar.phar /usr/local/bin/phar.phar \
	&& ln -s -f phar.phar /usr/local/bin/phar

RUN mkdir -p /usr/local/etc/php/conf.d/
RUN chmod +x -R /usr/local/bin

RUN pecl install xdebug
RUN pecl install memcached

# add all required files for the image (configurations, ...)
ADD rootfs/build /

# take composer from official composer imsage
COPY --from=composer /usr/bin/composer /usr/local/bin/composer

# start a new, clean stage (without any heavy dependency)
FROM leightcore/debian as runtime

# install just required dependencies to keep the image as light as possible
RUN \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get update && \
    apt-get install -y --no-install-recommends --no-install-suggests \
        nginx \
        libreadline-dev libpq-dev libxml2-dev libonig-dev libsqlite3-dev libzip-dev libldap2-dev libpng-dev \
        libc-client-dev libkrb5-dev libsasl2-dev libmemcached-dev libsodium-dev libargon2-dev libxslt-dev libwebp-dev \
        libjpeg-dev libxpm-dev nodejs patch cron msmtp procps libfcgi0ldbl libc-client2007e-dev zlib1g-dev sendmail

# take built binaries from build
COPY --from=build /usr/local/bin/php /usr/local/bin/php
COPY --from=build /usr/local/sbin/php-fpm /usr/local/sbin/php-fpm
COPY --from=build /usr/local/etc/php/conf.d/ /usr/local/etc/php/conf.d/
COPY --from=build /usr/local/lib/php/ /usr/local/lib/php/
COPY --from=build /usr/local/etc/ /usr/local/etc/
# take composer from official composer imsage
COPY --from=composer /usr/bin/composer /usr/local/bin/composer

ADD rootfs/runtime /

RUN \
    chmod +x -R /usr/local/bin

# just see some info 'round (and also see if PHP binary is ok)
RUN \
    php -v && \
    php -m && \
    nginx -t && \
    node -v && \
    npm -v

# Creates one commonly used app folder
WORKDIR /opt/app
# defualt work directory for an application
WORKDIR /var/www
