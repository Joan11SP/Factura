var users = require('../model/users'),
    express = require('express'),
    router = express.Router(),
    validar = require('../utilities/utilities');

router.post('/', (req, res) => {
    users.find({ identification: req.body.identification, status: { $in: ["activo"] } }, (err, docs) => {
        if (err) {
            console.error(err);
            throw err;
        }
        res.status(200).json(docs)
    })
}).post('/create_account', (req, res) => {
    var body = req.body;
    var body1 = req.body.acces_key
    var comprobante;
    if (validar(body.identification, body.email) === true) {
        if(body1.substring(23,24)==1){
            comprobante='prueba'
        }else{
            comprobante='produccion'
        }
        users.insertMany({
            identification: body.identification,
            email: body.email,
            names: body.names,
            type_document: body.type_document,
            reason_social: body.reason_social,
            phones: body.phones,
            direction: body.direction,
            acces_key:[
                {
                    fecha:new Date(),
                    comprobante:comprobante
                }
            ],
            creation_date: Date.now()
        }, (err, docs) => {
            if (err) {
                console.error(err);
                throw err;
            }
            res.status(200).json(docs)
        })
    }
}).post('/update_account', (req, res) => {
    var body = req.body;
    if (validar(body.identification === true)) {
        users.findOneAndUpdate({ identification: body.identification }, {
            $set: {
                names: body.names,
                type_document: body.type_document,
                reason_social: body.reason_social,
                email: body.email,
                phones: body.phones,
                password: body.password,
                direction: body.direction,
                update_date: Date.now()
            }
        }, (err, docs) => {
            if (err) {
                console.error(err);
                throw err;
            }
            res.status(200).json(docs)
        })
    }
}).post('/delete_account', (req, res) => {
    var body = req.body;
    users.update({ identification: body.identification },
        { $set: { status: "inactivo" } }, (err, docs) => {
            if (err) {
                console.error(err);
                throw err;
            }
            res.status(200).json(docs)
        })
}).post('/set_password', (req, res) => {
    var body = req.body;
    users.update({ identification: body.identification },
        { $set: { password: body.password } }, (err, docs) => {
            if (err) {
                console.error(err);
                throw err;
            }
            res.status(200).json(docs)
        })
}).post('/acess', (req, res) => {//prueba
    var body = req.body.acces_key

        var dia = body.substring(0, 2);
        var mes = body.substring(2, 4);
        var year = body.substring(4, 8);
        var fecha = dia+" "+mes+" "+year;
        var a = new Date(fecha)
        res.send({ a })   

})

module.exports = router