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

## Despliegue barato en Google Cloud (opcional)

El contenedor usa `nginx:alpine`, **128 MiB RAM**, **min instances = 0**. Sin tráfico el costo tiende a **0 USD** (quedan centavos si dejas Cloud Build o un IP reservada; no reserves IP).

### Opción A — Cloud Run (la que pide este repo)

```bash
gcloud services enable run.googleapis.com cloudbuild.googleapis.com containerregistry.googleapis.com
gcloud run deploy deiyv \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --min-instances 0 \
  --max-instances 3 \
  --memory 128Mi \
  --cpu 1 \
  --port 8080
```

Dominio:

```bash
gcloud run domain-mappings create --service deiyv --domain deiyv.com --region us-central1
```

Cada push a `main` se puede atar a Cloud Build con el archivo `cloudbuild.yaml` (Triggers → repositorio GitHub `DavidGele/Deiyv.com`).

### Opción B — Firebase Hosting (casi siempre más barata)

Capa gratuita generosa. Un bucket global, HTTPS incluido.

```bash
npm i -g firebase-tools
firebase login
firebase init hosting   # public = .
firebase deploy
```

### Opción C — Cloud Storage + load balancer

Sirve archivos crudos. Sale a fracciones de peso si el tráfico es bajo, pero el balanceador tiene costo fijo: **no la uses** hasta tener visitas de verdad. Cloud Run a escala 0 o Firebase ganan con tráfico cero.

## Lo que no se paga

- No hay Cloud SQL, Redis ni Cloud Functions.
- No hay min instances.
- No hay formulario que escriba a un backend.
- Las fuentes vienen de Google Fonts; si quieres 0 requests de terceros, descárgalas después.

## SEO incluido

- Títulos y descripciones únicos, `es-MX`
- Canonical, Open Graph, Twitter card
- JSON-LD de Organization + Person + WebSite + Article
- `sitemap.xml` y `robots.txt`
- HTML semántico, una sola CSS, JS mínimo
- Imágenes comprimidas < 130 KB

## Mapa

| Ruta | Rol |
| --- | --- |
| `/` | Venta |
| `/servicios.html` | Precios de lista |
| `/trabajo.html` | Archivo visual |
| `/casa.html` | ROMBO + Deiyv |
| `/oficio/` | Contenido que posiciona |
| `/contacto.html` | Brief → WhatsApp |
