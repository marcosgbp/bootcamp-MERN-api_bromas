const express = require('express');
const app = express();
const PORT = 8000;

//MIDDELWARE
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//BASE DE DATOS
require('./config/mongoose.config');

//ENRUTAMIENTOS
const RutasUsuarios = require('./routes/jokes.routes');
RutasUsuarios(app);


app.listen(PORT, ()=> {
    console.log(`Corriendo el servidor en el puerto ${PORT}`)
});