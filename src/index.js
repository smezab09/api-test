// Importaciones
const express = require('express');
const app = express();
const PORT = 4000;

// Middlewares
app.use(express.json());


// Rutas
app.get('/', (req, res) => {
    return res.json({
        msg: 'Bienvenidos al API'
    })
});

app.use('/users', require('./routes/users.routes'));
app.use('/peliculas', require('./routes/peliculas.routes'));


// Servidor
app.listen(PORT, () => {
    console.log(`Servidor en línea en el puerto ${PORT}`);
})

