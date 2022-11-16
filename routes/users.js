const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/userController');

//Estructura de una ruta
//router + tipo de pertición (GET, POST, PUT, PATH, DELETE)
// + midleware (OPCIONAL) + CONTROLLER
router.get('/users', getAllUsers);


module.exports = router;
