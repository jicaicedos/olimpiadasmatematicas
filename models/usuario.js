var mongoose = require("mongoose")
var Schema = mongoose.Schema

mongoose.connect("mongodb://localhost/olimpiadasmatematicas")

var usuario_schema = new Schema({
	usu_ID: {type: Number, required: true}, 
	usu_nombre: {type: String, maxlength: 50, required: true}, 
	usu_grado:{type: String, maxlength: 10, required: true}, 
	usu_genero: {type: String, maxlength: 10, required: true}, 
	usu_edad: {type: Number, maxlength: 2, required: true},
	usu_num_celular: {type: Number, maxlength: 10, required: true},
	usu_tipo: {type: String, maxlength: 12, required: true}
});

var Usuario = mongoose.model("Usuario", usuario_schema)

module.exports.Usuario = Usuario

