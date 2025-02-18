# Etapa 1: Construcción del frontend
FROM node:18-alpine AS build-frontend
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend ./
RUN npm run build

# Etapa 2: Construcción del backend
FROM node:18-alpine AS build-backend
WORKDIR /app/backend
COPY backend/package.json backend/package-lock.json ./
RUN npm install
COPY backend ./

# Etapa 3: Imagen final con Nginx y Node.js
FROM node:18-alpine
WORKDIR /app

# Instalar Nginx
RUN apk add --no-cache nginx

# Copiar el frontend a la carpeta de Nginx
COPY --from=build-frontend /app/frontend/dist /usr/share/nginx/html

# Copiar la configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar el backend
COPY --from=build-backend /app/backend /app/backend
WORKDIR /app/backend
RUN chmod +x server.js

# Exponer los puertos
EXPOSE 5000

# Comando de inicio: Ejecutar el backend y Nginx en paralelo
CMD ["sh", "-c", "node /app/backend/server.js & nginx -g 'daemon off;'"]
