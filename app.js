
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

mongoose.connect('mongodb+srv://tony84130:tonymontana@cluster0.8sgq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;



/*
const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    res.status(200).json(
        { message: "Je suis connecté !" }
    )
});

module.exports = app;
*/