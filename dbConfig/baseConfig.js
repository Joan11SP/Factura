var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb://localhost:27017/Factura')

mongoose.connection.on('open',(ref)=>{
    console.log('Conectado a mongodb');
})
module.exports=connection;

