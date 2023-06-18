const { Router } = require('express');
const { obtenerUsuarios, 
        crearUsuarios, 
        actualizarUsuarios,
        borrarUsuarios } = require('../controllers/users.controller')
const router = Router();

router.get('/', obtenerUsuarios);
router.post('/', crearUsuarios);
router.put('/:id', actualizarUsuarios);
router.delete('/:id',borrarUsuarios);

module.exports = router