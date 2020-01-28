var users = require('../model/users'),
    express = require('express'),
    router = express.Router(),
    validar = require('../utilities/utilities');

router.post('/create', (req, res) => {
    var body = req.body;
    if (validar.identification(body.identification) && validar.email(body.email) === true) {
        users.insertMany({
            identification: body.identification,
            email: body.email,
            password: body.password,
            creation_date: new Date()
        }, (err, docs) => {
            if (err) {
                console.error(err);
                throw err;
            }
            res.status(200).json(docs)
        })
    }

}).post('/update', (req, res) => {
    var body = req.body;
    users.update({ identification: body.identification }, {
        $set: {
            names: body.names,
            type_document: body.type_document,
            reason_social: body.reason_social,
            email: body.email,
            phones: body.phones,
            direction: body.direction,
            update_date: new Date()
        }
    }, (err, docs) => {
        if (err) {
            console.error(err);
            throw err;
        }
        res.status(200).json(docs)
    })
}).post('/delete', (req, res) => {
    users.remove({ identification: body.identification }, (err, docs) => {
        if (err) {
            console.error(err);
            throw err;
        }
        res.status(200).json(docs)
    })
})

module.exports = router