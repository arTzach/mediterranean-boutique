FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN ls -la
RUN npm install
COPY . .
RUN ls -la
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist/mediterranean-boutique/browser /usr/share/nginx/html
