var mongoose = require('mongoose'),
    Schemas = mongoose.Schema;

var usersSchemas = new Schemas({
  names: { type: String, trim: true },
  identification: { type: String, trim: true,unique:true },
  type_document: { type: String, trim: true},
  reason_social: { type: String, trim: true},
  password: { type: String, trim: true },
  email: { type: Array, trim: true },
  phones: { type: Array, trim: true },
  direction: { type: String, trim: true },
  creation_date: { type: Date, trim: true},
  update_date: { type: Date, trim: true },
  status: { type:String, trim: true,default:"activo" },
});

var users = mongoose.model('users', usersSchemas);

module.exports = users;

