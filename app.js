//  Requires
var express = require('express');

// Mongoose establecer conexión
var mongoose = require('mongoose');

// Body Parser
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();

// Body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');


// Conexión a la BD
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res)=>{

if(err) throw err;

console.log('Base de datos:\x1b[32m%s\x1b[0m ',' online');



});


// // Rutas  ( lo hemos copiado en el archivo app.js de la carpeta routes)
// app.get('/',(req , res , next ) => {

//     res.status(200).json({
//         ok: true,
//         mensaje: 'Petición realizada correctamente'
//     });
// });

// Rutas
app.use('/usuario' , usuarioRoutes);
app.use('/login' , loginRoutes);
app.use('/' , appRoutes);

// Escuchar peticiones
app.listen(3000,() =>{
    console.log('Express server corriendo en el puerto 3000:\x1b[32m%s\x1b[0m ',' online');

});