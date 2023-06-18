const { Router } = require("express");
const {
  obtenerPeliculas,
  añadirPelicula,
  actualizarPelicula,
  eliminarPelicula,
} = require("../controllers/peliculas.controller");
const router = Router();

router.get("/", obtenerPeliculas);

router.post("/", añadirPelicula);

router.put("/:id", actualizarPelicula);

router.delete("/:id", eliminarPelicula);

module.exports = router;
