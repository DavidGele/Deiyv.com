FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html 404.html servicios.html trabajo.html casa.html contacto.html oficio.html privacidad.html robots.txt sitemap.xml site.webmanifest /usr/share/nginx/html/
COPY oficio /usr/share/nginx/html/oficio
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY assets /usr/share/nginx/html/assets
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1:8080/ >/dev/null || exit 1
