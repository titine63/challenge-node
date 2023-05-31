// Importation des modules nécessaires
const express = require("express");
require("dotenv").config(); // Charger les variables d'environnement à partir du fichier .env

const app = express();

// Récupération des valeurs des variables d'environnement
const name = process.env.MY_NAME || "Sandrine";
const city = process.env.MY_CITY || "Clermont-Ferrand";
const language = process.env.MY_LANGUAGE || "French";

// Route principale
app.get("/", (req, res) => {
  res.send(`I am ${name}, wilder in ${city}, and I love ${language}.`);
});

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
