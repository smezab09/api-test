const { peliculas } = require("../database/db");
const { v4: uuid } = require('uuid');

const obtenerPeliculas = (req, res) => {
    return res.json({
        ok: true,
        msg: "Películas obtenidas",
        data: peliculas
    });
};

const añadirPelicula = (req, res) => {
    const { title, year, price } = req.body;

    const pelicula = {
        id: uuid(),
        title: title,
        year: year,
        price: price,
    };

    peliculas.push(pelicula);
    return res.json({
        ok: true,
        msg: 'Película añadida exitosamente',
        data: pelicula,
    });

};

const actualizarPelicula = (req, res) => {
    const { id } = req.params;
    const { title, year, price } = req.body;

    // Buscar la película con el ID especificado
    const pelicula = peliculas.find(pelicula => pelicula.id === id);

    // Si no se encuentra la película, devolver un error
    if (!pelicula) {
        return res.status(404).json({
            ok: false,
            msg: 'Película no encontrada',
        });
    }

    // Actualizar los datos de la película
    pelicula.title = title;
    pelicula.year = year;
    pelicula.price = price;

    return res.json({
        ok: true,
        msg: 'Película actualizada exitosamente',
        data: pelicula,
    });
};

const eliminarPelicula = (req, res) => {
    const { id } = req.params;

    const pelicula = peliculas.findIndex(pelicula => pelicula.id === id);
    const index = peliculas.indexOf(pelicula);
    peliculas.splice(index, 1);

    return res.json({
        ok: true,
        msg: 'Película eliminada exitosamente',
        data: pelicula,
    });
};

module.exports = {
    obtenerPeliculas,
    añadirPelicula,
    actualizarPelicula,
    eliminarPelicula
}