
// Création de la route permettant les actions liées à "user"

const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const checkPassword = require("../middleware/password");
const rateLimit = require("../middleware/rate-limiter");

router.post('/signup', rateLimit, checkPassword, userCtrl.signup);
router.post('/login', rateLimit, userCtrl.login);

module.exports = router;