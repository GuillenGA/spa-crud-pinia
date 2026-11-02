# 📌 Tercer Proyecto Unidad 3 – SPA con CRUD y Pinia en Vue 3

Aplicación Single Page Application (SPA) desarrollada con **Vue 3 (Composition API)**, **Pinia** para la gestión del estado global (Productos y Carrito) y **Vue Router** para la navegación.

## 🚀 Comandos de Desarrollo Local

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build
```

## 🌐 Publicación Automática en GitHub Pages

Este proyecto incluye un flujo de trabajo de **GitHub Actions** (`.github/workflows/deploy.yml`) que compila y despliega automáticamente la aplicación cada vez que haces `git push` a la rama `main`.

### Pasos para subirlo a tu cuenta de GitHub:
1. Crea un repositorio público en tu GitHub llamado exactamente **`spa-crud-pinia`**.
2. En tu repositorio de GitHub, ve a **Settings** -> **Pages** y en **Build and deployment > Source** selecciona **GitHub Actions**.
3. Abre una terminal dentro de la carpeta descomprimida de este proyecto y ejecuta:
```bash
git init
git add .
git commit -m "Initial commit: SPA CRUD y Carrito con Vue 3 y Pinia"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/spa-crud-pinia.git
git push -u origin main
```
