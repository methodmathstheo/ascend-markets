# Serves the static site on Railway (or any Docker host) with Caddy.
FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY . /srv
RUN rm -f /srv/Caddyfile /srv/Dockerfile /srv/.dockerignore
EXPOSE 8080
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
