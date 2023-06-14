const mongoose = require('mongoose');
const URI = "mongodb://0.0.0.0/TP5-RochaCristianAlberto-Backend";
mongoose.connect(URI) //comando de coneccion de base de datos
    .then(db => console.log('Base de Datos conectada'))
    .catch(err => console.error(err))
module.exports = mongoose;