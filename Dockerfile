FROM mysql:latest

ENV MYSQL_ALLOW_EMPTY_PASSWORD=true
ENV MYSQL_USER=mohan
ENV MYSQL_PASSWORD=supersecret
ENV MYSQL_DATABASE=ezyattend

COPY ezyattend_latest.sql  /docker-entrypoint-initdb.d/

EXPOSE 3306
