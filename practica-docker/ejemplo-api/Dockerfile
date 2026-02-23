# Partimos de una imagen de Node ligera
FROM node:18-alpine

# Definimos dónde vivirá la app dentro del contenedor
WORKDIR /app

# Copiamos los archivos del package-lock.json
COPY package*.json ./

# Instalamos las dependencias dentro del contenedor
RUN npm install

# Copiamos el resto del código del index.js
COPY . .

# Exponemos el puerto que usa la API
EXPOSE 3001

# Comando para arrancar la API
CMD ["node", "index.js"]