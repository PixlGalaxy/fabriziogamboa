# Usar Node.js para construir el frontend y backend
FROM node:18-alpine AS build
WORKDIR /app

# Copiar dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copiar el código del frontend y backend
COPY . .

# Construir el frontend
RUN npm run build

# Imagen final con Node.js y Nginx
FROM node:18-alpine
WORKDIR /app

# Copiar backend y frontend construidos
COPY --from=build /app/backend /app/backend
COPY --from=build /app/dist /usr/share/nginx/html

# Instalar dependencias del backend
WORKDIR /app/backend
RUN npm install --production

# Copiar configuración de Nginx
WORKDIR /app
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 5000 para el frontend y backend
EXPOSE 5000

# Ejecutar backend y nginx juntos
CMD ["sh", "-c", "node /app/backend/server.js & nginx -g 'daemon off;'"]
