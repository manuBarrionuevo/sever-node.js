# Establece la imagen base
FROM node:14

# Crea el directorio de la aplicación
WORKDIR /usr/src/app

# Instala las dependencias de la aplicación
COPY package*.json ./
RUN npm install

# Copia los archivos de la aplicación
COPY . .

# Expone el puerto y ejecuta la aplicación
EXPOSE 8080
CMD [ "node", "server.js" ]
