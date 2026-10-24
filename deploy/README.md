# Deploy

The site runs on the VPS as one container behind the host's Caddy.

1. A push to `master` runs `.github/workflows/ci.yml`. When the checks pass it
   builds the `Dockerfile` for linux/amd64 and pushes
   `ghcr.io/cydoentis/portfolio:master`.
2. On the server, `/srv/portfolio` holds `docker-compose.yml` from this folder.
   An update timer runs `docker compose pull && docker compose up -d` every
   5 minutes, so the new image goes live within 5 minutes of a green push.
3. The container serves the site on `127.0.0.1:8081`. The host's
   `/etc/caddy/Caddyfile` adds HTTPS:

   ```
   codystine.com {
       encode zstd gzip
       reverse_proxy 127.0.0.1:8081
   }
   www.codystine.com {
       redir https://codystine.com{uri} permanent
   }
   ```

DNS for codystine.com is on Namecheap: A records to `40.160.103.45` and AAAA
to `2604:2dc0:101:200::3b68`, for both `codystine.com` and `www`.

Try the image locally:

```sh
docker build -t portfolio .
docker run --rm -p 8081:8080 portfolio   # http://localhost:8081
```
