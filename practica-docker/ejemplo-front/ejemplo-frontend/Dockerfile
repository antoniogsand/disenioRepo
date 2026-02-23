# 1. Imagen base moderna para evitar errores de Vite
FROM node:22-alpine

# 2. Carpeta de trabajo
WORKDIR /app

# 3. Copiamos los archivos de configuración
COPY package*.json ./

# 4. Instalamos las dependencias
RUN npm install

# 5. Copiamos todo el código de React
COPY . .

# 6. Exponemos el puerto que configuramos en el package.json
EXPOSE 3000

# 7. Comando para arrancar el servidor de desarrollo
CMD ["npm", "run", "dev"]