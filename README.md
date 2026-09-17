# ROMBO · deiyv.com

Sitio público de la casa productora **ROMBO** (talento **David Guerrero / Deiyv**).

Estático. Sin base de datos. Sin servidor de aplicación. El brief de contacto abre WhatsApp o correo en el dispositivo del visitante.

Marca: el header y el pie usan el **lockup vectorial** `assets/brand/deiyv-lockup-inverse.svg` (sello + wordmark Deiyv, recortado, tinta `#f4efe6` sobre fondo oscuro). El maestro del pack es `assets/brand/deiyv-logo-exact.svg`. El sello solo vive en `assets/brand/deiyv-mark.svg` y `favicon.svg`.

Repositorio: [DavidGele/Deiyv.com](https://github.com/DavidGele/Deiyv.com)

## Ver en local

```bash
python3 -m http.server 8080
```

Abrir `http://127.0.0.1:8080`. Las rutas son relativas: el mismo árbol funciona en GitHub Pages (incluido `username.github.io/Deiyv.com/`).

## GitHub Pages (opción $0, lista)

El sitio es estático. Lleva `.nojekyll`, rutas relativas y un workflow en `.github/workflows/pages.yml`.

1. Sube **esta carpeta como raíz** de `DavidGele/Deiyv.com` (no la metas en una subcarpeta).
2. Repo → **Settings → Pages**:
   - Source: **GitHub Actions**, o
   - Source: **Deploy from a branch** → `main` → `/ (root)`
3. URL inmediata: `https://davidgele.github.io/Deiyv.com/`
4. Dominio propio: en Pages pon `deiyv.com`. El archivo `CNAME` ya está. En el DNS, `A` a las IPs de GitHub Pages o `CNAME` de `www` a `davidgele.github.io`.

Si Pages marca error de dominio y el DNS todavía no apunta, borra `CNAME` hasta que el dominio esté listo. El sitio en `github.io` seguirá sirviendo.

## Antes de publicar

1. En `js/config.js` pon el WhatsApp a 10 dígitos de México con `52` adelante, sin espacios: `"whatsapp": "52155XXXXXXXX"`.
2. Confirma handles reales de Instagram / TikTok / YouTube.
3. Sustituye `hola@deiyv.com` cuando el correo esté creado.
4. Apunta el dominio `deiyv.com` al servicio que elijas abajo.
