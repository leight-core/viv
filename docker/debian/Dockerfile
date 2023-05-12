FROM debian

ENV \
    DEBIAN_FRONTEND=noninteractive

RUN \
    apt-get update && \
    apt-get install -y --no-install-recommends --no-install-suggests \
        ca-certificates curl git wget zip unzip bzip2 supervisor zsh

RUN \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update && \
    apt-get install -y --no-install-recommends --no-install-suggests \
        nodejs

RUN \
    npm install -g npm && \
    npm install -g pnpm && \
    npm install -g yarn

RUN mkdir -p /etc/supervisor/conf.d

ADD rootfs /

CMD ["supervisord", "-c", "/etc/supervisor/supervisord.conf"]

WORKDIR /root
