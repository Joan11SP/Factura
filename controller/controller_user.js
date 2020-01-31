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
    if (validar(body.identification, body.email) === true) {
        users.insertMany({
            identification: body.identification,
            email: body.email,
            names: body.names,
            type_document: body.type_document,
            reason_social: body.reason_social,
            phones: body.phones,
            direction: body.direction,
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
    if (validar(body.identification === true) ) {
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
})


module.exports = router