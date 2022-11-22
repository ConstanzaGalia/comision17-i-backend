const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, login, deleteUser, getOneUser, updateUser } = require('../controllers/userController');

//Estructura de una ruta
//router + tipo de pertición (GET, POST, PUT, PATH, DELETE)
// + midleware (OPCIONAL) + CONTROLLER
router.get('/users', getAllUsers);
router.get('/user/:id', getOneUser);
router.post('/createUser', createUser);
router.post('/login', login);
router.delete('/users/:id', deleteUser)
router.put('/users/:id', updateUser)


module.exports = router;
