require('dotenv').config();
// Importaciones
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());


// Rutas
app.get('/', (req, res) => {
    return res.json({
        msg: 'Bienvenidos al API',
        author: process.env.AUTHOR,
    })
});

app.use('/users', require('./routes/users.routes'));
app.use('/peliculas', require('./routes/peliculas.routes'));


// Servidor
app.listen(PORT, () => {
    console.log(`Servidor en línea en el puerto ${PORT}`);
})

