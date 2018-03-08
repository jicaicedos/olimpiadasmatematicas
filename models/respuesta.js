var mongoose = require("mongoose")
var Schema = mongoose.Schema

mongoose.connect("mongodb://localhost/olimpiadasmatematicas")

var respuesta_schema = new Schema({
	usu_ID: {type: String, required: true},
	res_usuario: {type: Number, required: true},
	res_correcta: {type: Number, required: true},
	res_tiempo_inicial: {type: Date, required: true},
	res_tiempo_final: {type: Date, required: true}
});

var Respuesta = mongoose.model('Respuesta', respuesta_schema)

module.exports.Respuesta = Respuesta
