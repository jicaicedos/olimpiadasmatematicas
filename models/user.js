/*
	Modelo para la entidad Usuarios para iniciar sesión
*/
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/olimpiadasmatematicas')

var user_schema = new Schema ({
	user_ID: {type: String, required: true},
	user_password: {type: String, required: true},
	user_rol: {type: String, required: true}
});

var User = mongoose.model('User', user_schema)

module.exports.User = User;
