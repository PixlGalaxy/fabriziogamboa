# Stage 1: Build the Frontend
FROM node:18-alpine AS build
WORKDIR /app

# Copy and install dependencies
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy the rest of the frontend and build
COPY frontend ./
RUN npm run build

# Stage 2: Set up the Backend
FROM node:18-alpine AS backend
WORKDIR /app

# Copy backend files and install dependencies
COPY backend/package.json backend/package-lock.json ./
RUN npm install

# Copy the backend code
COPY backend ./

# Stage 3: Final setup with Nginx
FROM nginx:alpine
COPY --from=frontend-build /app/dist /usr/share/nginx/html
COPY --from=backend /app /app
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose ports
EXPOSE 80 5000

# Set enviorment variables
ARG DISCORD_BOT_TOKEN
ARG DISCORD_USER_ID

ENV DISCORD_BOT_TOKEN=${DISCORD_BOT_TOKEN}
ENV DISCORD_USER_ID=${DISCORD_USER_ID}

# Command to run backend and nginx
CMD ["sh", "-c", "node /backend/server.js & nginx -g 'daemon off;'"]
