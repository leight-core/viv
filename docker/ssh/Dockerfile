FROM leightcore/alpine

RUN \
    apk update && \
    apk add --no-cache \
      openssh

ADD rootfs /
RUN chmod 0600 -R /etc/ssh

WORKDIR /root
