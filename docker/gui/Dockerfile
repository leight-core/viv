FROM alpine

RUN \
    apk update && \
    apk add --no-cache \
        pcmanfm font-opensans adwaita-icon-theme

ENV DISPLAY=:0
ENV PULSE_SERVER=/tmp/PulseServer

CMD pcmanfm
