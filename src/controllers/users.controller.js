const { users, peliculas } = require("../database/db");
const { v4: uuid } = require('uuid')

const obtenerUsuarios = (req, res) => {
    return res.json({
        ok: true,
        msg: "usuarios obtenidos",
        data: users
    });
};

const crearUsuarios= (req, res) => {
    const { user_name, password } = req.body;

    const user = {
        id: uuid(),
        user_name: user_name,
        password: password,
    };

    users.push(user);
    return res.json({
        ok: true,
        msg: 'Usuario creado exitosamente',
        data: user,
    });

};

const actualizarUsuarios = (req, res) => {
    const { id } = req.params;
    const { user_name, password } = req.body;

    // Buscar el usuario con el ID especificado
    const user = users.find(user => user.id === id);

    // Si no se encuentra el usuario, devolver un error
    if (!user) {
        return res.status(404).json({
            ok: false,
            msg: 'Usuario no encontrado',
        });
    }

    // Actualizar los datos del usuario
    user.user_name = user_name;
    user.password = password;

    return res.json({
        ok: true,
        msg: 'Usuario actualizado exitosamente',
        data: user,
    });
};

const borrarUsuarios = (req, res) => {
    const { id } = req.params;

    const user = users.findIndex(user => user.id === id);
    const index = users.indexOf(user);
    users.splice(index, 1);

    return res.json({
        ok: true,
        msg: 'Usuario eliminado exitosamente',
        data: user,
    });
};

module.exports = {
    obtenerUsuarios,
    crearUsuarios,
    actualizarUsuarios,
    borrarUsuarios,
}