
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');
const express = require('express');
const mongoose = require('mongoose');
//const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const app = express();
const path = require('path');
require('dotenv').config();

/*
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    // ...
  })
);
*/

//helmet (installé), hpp, rate limiter, dotenv (installé), password-validator (installé)
// Likes & Dislikes, Supprimer photo après modification

mongoose.connect(process.env.SECRET_DB,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json());

app.use(hpp());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
