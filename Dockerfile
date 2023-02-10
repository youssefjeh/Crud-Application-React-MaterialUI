# Définir l'image de base
FROM node:14

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier package.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier les fichiers de l'application
COPY . .

# Définir les commandes pour lancer l'application
CMD [ "npm", "start" ]
