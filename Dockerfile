# Etapa 1: Construcción del frontend
FROM node:18 AS build-frontend
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend ./
RUN npm run build

# Etapa 2: Construcción del backend
FROM node:18 AS build-backend
WORKDIR /app/backend
COPY backend/package.json backend/package-lock.json ./
RUN npm install
COPY backend ./

# Etapa 3: Configuración de Nginx y consolidación de la imagen final
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copiar el frontend generado en la carpeta de Nginx
COPY --from=build-frontend /app/frontend/dist ./

# Copiar la configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar el backend
WORKDIR /app/backend
COPY --from=build-backend /app/backend ./
RUN chmod +x server.js

# Exponer el puerto
EXPOSE 5000

# Comando de inicio
CMD ["sh", "-c", "node /app/backend/server.js & nginx -g 'daemon off;'"]
