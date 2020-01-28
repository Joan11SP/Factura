const express = require('express'),
      router = express.Router(),
      mostrarUsers= require('../controller/controller_user');


router.use('/users',mostrarUsers);



module.exports=router;