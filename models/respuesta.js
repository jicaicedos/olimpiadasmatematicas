var mongoose = require("mongoose")
var Schema = mongoose.Schema

mongoose.connect("mongodb://localhost/olimpiadasmatematicas")

var respuesta_schema = new Schema({
	usu_ID: {type: String, required: true},
	usu_nombre: {type: String, required: true},
	usu_respuesta: {type: Array, required: true},
	res_correcta: {type: Array, required: true},
	puntajeObtenido: {type: Number, required: true},
	tiempo: {type: String, required: true},
	res_dia: {type: Number, required: true},
	res_mes: {type: Number, required: true},
	res_anio: {type: Number, required: true},
	res_tiempo_inicial: {type: Date, required: true},
	res_tiempo_final: {type: Date, required: true}
});

var Respuesta = mongoose.model('Respuesta', respuesta_schema)

module.exports.Respuesta = Respuesta
