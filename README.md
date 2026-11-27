# Danubio Geoscientia — Website v0.1.0

Sitio corporativo estático desarrollado con HTML5, CSS3 y JavaScript. Compatible con GitHub Pages y sin backend.

## Vista local

Abra `index.html` directamente o sirva la carpeta con una extensión de servidor local. Para evitar restricciones de carga de archivos JSON en algunos navegadores, se recomienda usar un servidor local.

Ejemplo con Python:

```powershell
py -m http.server 8080
```

Luego abra `http://localhost:8080/`.

## Publicación en GitHub Pages

1. Cree un repositorio en GitHub y suba el contenido.
2. Abra **Settings > Pages**.
3. En **Build and deployment**, seleccione **Deploy from a branch**.
4. Seleccione la rama principal y la carpeta raíz `/`.
5. Guarde. GitHub generará la URL pública del sitio.

Todas las rutas internas son relativas y no requieren configuración adicional.

## Actualización de contenidos

- Servicios: `data/services.json`
- Equipo profesional: `data/team.json`
- Datos corporativos y correo: `data/company.json`
- Textos generales bilingües: `js/main.js`
- Diseño: `css/styles.css`

Para incorporar equipo real, agregue perfiles validados a `data/team.json`. No publique nombres, credenciales o antecedentes no confirmados.

Para activar el correo, configure `email` con una dirección corporativa válida en `data/company.json`. La integración con un proveedor externo de formularios podrá implementarse posteriormente.

## Convenciones

- Idioma por defecto: español.
- Cambio funcional: español/inglés.
- Sin imágenes externas ni servicios de pago requeridos.
- El gráfico visual actual es abstracto y no representa datos reales.
- La información de NI 43-101 no declara certificación ni Qualified Persons sin validación.

## Limitaciones pendientes

- Incorporar razón social, misión, visión e historia validadas.
- Incorporar fotografías y perfiles profesionales validados.
- Configurar correo corporativo válido.
- Sustituir gráficos abstractos por fotografías o imágenes con licencias adecuadas.
- Incorporar opcionalmente servicio externo de formularios si se requiere confirmación de envío.
