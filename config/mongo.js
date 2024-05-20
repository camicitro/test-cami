//ESTE ES EL ARCHIVO PARA CONECTARSE CON LA BD

const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) =>{
        if (!err){
            console.log('Conexión correcta')
        } else {
            console.log('Error de conexión')
        }
    })
}

module.exports = { dbConnect }